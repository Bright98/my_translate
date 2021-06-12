from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
from google_trans_new import google_translator
from .models import Word
from django.db import IntegrityError


def home(request):
    return HttpResponse("hello")


@csrf_exempt
def translate(request):

    if request.method == "POST":
        translator = google_translator()

        word = request.POST["word"]
        translate = translator.translate(word, lang_tgt="fa")

        return JsonResponse(translate, safe=False)

    return HttpResponse("")


@csrf_exempt
def add_to_leitner(request):
    if request.method == "POST":
        try:

            _word = request.POST["word"]
            _translate = request.POST["translate"]
            _cycle = request.POST["cycle"]
            _time_stamp = request.POST["time_stamp"]

            data = Word(
                word=_word, translate=_translate, cycle=_cycle, time_stamp=_time_stamp
            )
            data.save()

            context = {"message": "OK"}
            return JsonResponse(context, safe=False, status=201)

        except IntegrityError as e:

            context = {"message": "REPETITIVE"}
            return JsonResponse(context, safe=False, status=400)

    return HttpResponse()


@csrf_exempt
def show_words(request):
    if request.method == "POST":
        _now_time_stamp = request.POST["time_stamp"]

        data = Word.objects.filter(time_stamp__lte=_now_time_stamp).values(
            "word", "translate", "cycle", "time_stamp"
        )

        return JsonResponse(list(data), safe=False)

    return HttpResponse()


@csrf_exempt
def remember_word(request):
    if request.method == "POST":
        _word = request.POST["word"]
        _cycle = request.POST["cycle"]
        _time_stamp = request.POST["time_stamp"]

        data = Word.objects.filter(word=_word).update(
            cycle=_cycle, time_stamp=_time_stamp
        )
        if data:
            context = {"message": "OK"}
            return JsonResponse(context, safe=False, status=200)

    return HttpResponse()