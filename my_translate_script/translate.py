import subprocess
import os
import sys


if os.path.exists("./env") == False:
    subprocess.run("virtualenv env", shell=True)
    subprocess.run("pip install -r ../../requirement.txt")

    if sys.platform == "win32":
        os.system("env\\Scripts\\activate")
    else:
        subprocess.call("source .env/bin/activate", shell=True, executable="/bin/bash")


os.chdir("../my_translate_server")
subprocess.call("start /b python manage.py runserver 5005", shell=True)

os.chdir("../my_translate_front/build")
subprocess.call("start /b python -m http.server", shell=True)
