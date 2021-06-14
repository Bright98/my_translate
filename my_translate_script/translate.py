import subprocess
import os
import sys


if os.path.exists("./env") == False:
    print("\n[create environment ...]\n")
    subprocess.run("virtualenv env", shell=True)

    if sys.platform == "win32":
        print("\n[activate environment ...]\n")
        os.system("env\\Scripts\\activate")
    else:
        print("\n[activate environment ...]\n")
        subprocess.call("source .env/bin/activate", shell=True, executable="/bin/bash")

    print("\n[installing requirements ...]\n")
    os.system("pip install -r ../requirements.txt")

os.chdir("../my_translate_server")

print("\n[migrate changes ...]\n")
os.system("python manage.py makemigrations")
os.system("python manage.py migrate")

print("\n[running server ...]\n")
os.system("start /b python manage.py runserver 5005")


os.chdir("../my_translate_front/build")

print("\n[running front ...]\n")
os.system("start /b python -m http.server")

print("\n---[successfully done ...]---\n")
