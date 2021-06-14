import subprocess
import os
import sys


if not os.path.exists("./env"):

    # -- envirement --
    # print("\n[create environment ...]\n")
    # subprocess.run("virtualenv env", shell=True)

    # if sys.platform == "win32":
    #     print("\n[activate environment ...]\n")
    #     os.system("env\\Scripts\\activate")
    # else:
    # print("\n[activate environment ...]\n")
    # subprocess.call("source .env/bin/activate", shell=True, executable="/bin/bash")

    print("\n[installing requirements ...]\n")
    os.system("pip install -r ../requirements.txt")

os.chdir("../my_translate_server")

print("\n[migrate changes ...]\n")
os.system("python3 manage.py makemigrations")
os.system("python3 manage.py migrate")

print("\n[running server ...]\n")
if sys.platform == "win32":
    os.system("start /b python3 manage.py runserver 5005")
else:
    os.system("python3 manage.py runserver 5005 &")


os.chdir("../my_translate_front/build")

print("\n[running front ...]\n")
if sys.platform == "win32":
    os.system("start /b python3 -m http.server")
else:
    os.system("python3 -m http.server 9000 &")

print("\n---[successfully done ...]---\n")
