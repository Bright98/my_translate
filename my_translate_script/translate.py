import subprocess
import os
import sys


if os.path.exists("./env") == False:
    print("[create environment ...]")
    subprocess.run("virtualenv env", shell=True)

    if sys.platform == "win32":
        print("[activate environment ...]")
        os.system("env\\Scripts\\activate")
    else:
        print("[activate environment ...]")
        subprocess.call("source .env/bin/activate", shell=True, executable="/bin/bash")

    print("[installing requirements ...]")
    os.system("pip install -r ../requirements.txt")

os.chdir("../my_translate_server")

print("[migrate changes ...]")
os.system("python manage.py makemigrations")
os.system("python manage.py migrate")

print("[running server ...]")
os.system("start /b python manage.py runserver 5005")


os.chdir("../my_translate_front/build")

print("[running front ...]")
os.system("start /b python -m http.server")
