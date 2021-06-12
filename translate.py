from threading import Thread
import subprocess
import os

# os.chdir("./my_translate_server")
# subprocess.run(["virtualenv", ".env"])
# subprocess.call("source .env/bin/activate", shell=True, executable="/bin/bash")
# subprocess.run(["pip", "install", "-r", "requirement.txt"])

# os.chdir("../my_translate_front")
# subprocess.run(["npm", "install"])

# os.chdir("..")


def run_front():
    os.chdir("./my_translate_front")
    subprocess.run(["npm", "start"])


def run_server():
    os.chdir("./my_translate_server")
    subprocess.run(["python3", "manage.py", "runserver", "5005"])


if __name__ == "__main__":
    Thread(target=run_front).start()
    Thread(target=run_server).start()