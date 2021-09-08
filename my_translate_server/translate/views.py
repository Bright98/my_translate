from my_translate_server.settings import SECRET_KEY
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse, JsonResponse
from .google_translate.google_translate import google_translator
from django.core.mail import send_mail
from django.db import IntegrityError
from .models import Word, User
from random import randint
import datetime
import hashlib
import jwt

globalCycle = [1, 1, 3, 7, 14, 21, 30, 45, 70]


def home(request):
    return HttpResponse("hello")


@csrf_exempt
def translate(request):

    if request.method == "POST":
        translator = google_translator()

        word = request.POST["word"]
        translate = translator.translate(word, lang_tgt="fa")

        return JsonResponse(translate, safe=False, status=200)

    return HttpResponse("")


@csrf_exempt
def add_to_leitner(request):
    if request.method == "POST":
        access_token = request.POST["auth"]
        _word = request.POST["word"]
        _translate = request.POST["translate"]
        _cycle = 0
        _time_stamp = datetime.datetime.now()

        _user_id = jwt.decode(access_token, SECRET_KEY, algorithms="HS256")["id"]

        words = Word.objects.filter(user__id=_user_id, word=_word)
        user = User.objects.filter(id=_user_id)

        if len(list(user)) == 0:
            context = {"message": "USER_NOT_FOUND"}
            return JsonResponse(context, safe=False, status=404)

        if len(list(words)) != 0:
            context = {"message": "REPETITIVE"}
            return JsonResponse(context, safe=False, status=400)

        else:
            data = Word(
                user_id=_user_id,
                word=_word,
                translate=_translate,
                cycle=_cycle,
                time_stamp=_time_stamp,
            )

            data.save()

            context = {"message": "OK"}
            return JsonResponse(context, safe=False, status=201)

    return HttpResponse()


@csrf_exempt
def show_words(request, token):
    if request.method == "GET":
        _time_stamp = datetime.datetime.now()

        _user_id = jwt.decode(token, SECRET_KEY, algorithms="HS256")["id"]

        user = User.objects.filter(id=_user_id)

        if len(list(user)) == 0:
            context = {"message": "USER_NOT_FOUND"}
            return JsonResponse(context, status=404)

        max_word = user.get().max_word
        print(max_word)

        _list = Word.objects.filter(
            user__id=_user_id, time_stamp__lte=_time_stamp
        ).order_by("cycle")

        data = _list.values("word", "translate", "cycle", "time_stamp")
        data_list = list(data)[:max_word]

        return JsonResponse(data_list, safe=False, status=200)

    return HttpResponse()


@csrf_exempt
def remember_word(request):

    if request.method == "POST":
        access_token = request.POST["auth"]
        _type = request.POST["type"]
        _word = request.POST["word"]
        _cycle = int(request.POST["cycle"])

        _user_id = jwt.decode(access_token, SECRET_KEY, algorithms="HS256")["id"]

        if _type == "REMEMBER":
            data = Word.objects.filter(user__id=_user_id, word=_word).update(
                cycle=_cycle + 1,
                time_stamp=datetime.datetime.now()
                + datetime.timedelta(days=globalCycle[_cycle + 1]),
            )

        if _type == "REMEMBER_SOSO":
            data = Word.objects.filter(user__id=_user_id, word=_word).update(
                cycle=_cycle,
                time_stamp=datetime.datetime.now() + datetime.timedelta(days=1),
            )

        if _type == "NOT_REMEMBER":
            data = Word.objects.filter(user__id=_user_id, word=_word).update(
                cycle=0,
                time_stamp=datetime.datetime.now() + datetime.timedelta(days=1),
            )

        if data:
            context = {"message": "OK"}
            return JsonResponse(context, safe=False, status=200)

    return HttpResponse()


@csrf_exempt
def remove_all_words(request):
    if request.method == "POST":
        access_token = request.POST["auth"]

        _user_id = jwt.decode(access_token, SECRET_KEY, algorithms="HS256")["id"]

        Word.objects.filter(user__id=_user_id).delete()

        context = {"message": "OK"}
        return JsonResponse(context, safe=False, status=200)

    return HttpResponse()


@csrf_exempt
def change_max_word(request):
    if request.method == "POST":
        access_token = request.POST["auth"]
        max_word = request.POST["max_word"]

        user_id = jwt.decode(access_token, SECRET_KEY, algorithms="HS256")["id"]

        user = User.objects.filter(id=user_id)

        if len(list(user)) == 0:
            context = {"message": "USER_NOT_FOUND"}
            return JsonResponse(context, safe=False, status=404)

        user.update(max_word=max_word)

        context = {"message": "OK"}
        return JsonResponse(context, safe=False, status=200)


@csrf_exempt
def show_max_word(request, token):
    if request.method == "GET":
        user_id = jwt.decode(token, SECRET_KEY, algorithms="HS256")["id"]

        user = User.objects.filter(id=user_id)

        if len(list(user)) == 0:
            context = {"message": "USER_NOT_FOUND"}
            return JsonResponse(context, status=404)

        data = user.get().max_word
        context = {"data": data}
        print(data)

        return JsonResponse(context, status=200)


@csrf_exempt
def sign_up(request):
    if request.method == "POST":
        try:
            _email = request.POST["email"]
            _password = request.POST["password"]

            hash_object = hashlib.md5(_password.encode())
            hash_password = hash_object.hexdigest()

            data = User(email=_email, password=hash_password)
            data.save()

            payload = {
                "id": str(data.id),
                "iat": datetime.datetime.now().timestamp(),
            }
            access_token = jwt.encode(payload, SECRET_KEY)

            context = {
                "message": "OK",
                "data": access_token.decode(),
            }

            return JsonResponse(context, safe=False, status=201)

        except IntegrityError as e:
            context = {
                "message": "REPETITIVE_USER",
                "data": str(e),
            }
            return JsonResponse(context, safe=False, status=400)

    return HttpResponse()


@csrf_exempt
def login(request):
    if request.method == "POST":
        _email = request.POST["email"]
        _password = request.POST["password"]

        hash_object = hashlib.md5(_password.encode())
        hash_password = hash_object.hexdigest()

        user = User.objects.filter(email=_email)

        if len(list(user)) == 0:
            context = {"message": "ACCOUNT_NOT_EXIST"}
            return JsonResponse(context, safe=False, status=404)

        if user.first().password != hash_password:
            context = {"message": "PASSWORD_IN_CORRECT"}
            return JsonResponse(context, safe=False, status=403)

        payload = {
            "id": str(user.first().id),
            "iat": datetime.datetime.now().timestamp(),
        }
        access_token = jwt.encode(payload, SECRET_KEY)

        context = {
            "message": "OK",
            "data": access_token.decode(),
        }
        return JsonResponse(context, safe=False, status=200)

    return HttpResponse()


@csrf_exempt
def send_email(request):
    if request.method == "POST":
        _email = request.POST["email"]

        if len(list(User.objects.filter(email=_email))) == 0:
            context = {"message": "ACCOUNT_NOT_EXIST"}
            return JsonResponse(context, safe=False, status=404)

        else:
            global confirm_code
            global forget_mail
            forget_mail = _email
            confirm_code = str(randint(1000, 9999))

            send_mail(
                "My Translate Code",
                "Hello from tranlate support.\nyour confirm code is: {}".format(
                    confirm_code
                ),
                "mytranslate.support@gmail.com",
                [_email],
                fail_silently=False,
            )

            context = {"message": "OK"}
            return JsonResponse(context, safe=False, status=200)

    return HttpResponse()


@csrf_exempt
def get_confirm_code(request):
    if request.method == "POST":

        _code = request.POST["code"]

        if _code == confirm_code:
            context = {"message": "OK"}
            return JsonResponse(context, safe=False, status=200)

        else:
            context = {"message": "CODE_INCORRECT"}
            return JsonResponse(context, safe=False, status=404)

    return HttpResponse()


@csrf_exempt
def reset_password(request):
    if request.method == "POST":

        _email = request.POST["email"]
        _password = request.POST["password"]

        user = User.objects.filter(email=_email)

        if len(list(user)) == 0:
            context = {"message": "RETRY_AGAIN"}

            return JsonResponse(context, safe=False, status=400)

        else:

            hash_object = hashlib.md5(_password.encode())
            hash_password = hash_object.hexdigest()

            user.update(password=hash_password)

            context = {"message": "OK"}

            return JsonResponse(context, safe=False, status=200)

    return HttpResponse()