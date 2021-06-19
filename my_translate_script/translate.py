import os
import sys


if not os.path.exists("./env"):
    print("\n[installing requirements ...]\n")
    os.system("pip install -r ../requirements.txt")

os.chdir("../my_translate_server")

print("\n[migrate changes ...]\n")
os.system("python manage.py makemigrations")
os.system("python manage.py migrate")

print("\n[running server ...]\n")
if sys.platform == "win32":
    os.system("start /b python manage.py runserver 5005")
else:
    os.system("python manage.py runserver 5005 &")


os.chdir("../my_translate_front")

print("\n[running front ...]\n")
if sys.platform == "win32":
    os.system("start /b python -m http.server")
else:
    os.system("python -m http.server &")

print("\n---[successfully done ...]---\n")
