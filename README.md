<div dir='rtl'>

<h1><img src="https://user-images.githubusercontent.com/37469478/122631241-9f126780-d0df-11eb-86cd-fc6dffc65c3e.png" width="32" /> my translate | ترجمه من</h1>

این پروژه شامل سرویس ترجمه (برگرفته از apiهای google translate) و جعبه لایتنر برای مرور کلمات ذخیره شده است.

</div>

---
<div dir='rtl'>
<h3>چطور کار میکنه؟</h3>
  
![image](https://user-images.githubusercontent.com/37469478/121872402-76beed80-cd1a-11eb-8192-38e267defab1.png)
![image](https://user-images.githubusercontent.com/37469478/121872544-a1a94180-cd1a-11eb-94d0-925768a7aa4e.png)
  ![image](https://user-images.githubusercontent.com/37469478/121872584-b08ff400-cd1a-11eb-8887-f3008defaa42.png)

</div>


---
<div dir='rtl'>
<h3>چطور استفاده کنم؟</h3>
</div>

<h4>reqirements:</h4>

- python >= 3

- pip

- [virtualenv](https://pypi.org/project/virtualenv/)

- [subprocess](https://pypi.org/project/subprocess.run/)

<h4>ready to install:</h4>

```shell
virtualenv env
```
<h5>activate virtualenv:</h5>

Windows:
```shell
env\Scripts\activate
```

Mac OS / Linux
```shell
source env/bin/activate
```


<h4>run:</h4>

```shell
cd ./my_translate_script
python3 ./translate.py
```

<div dir='rtl'>

در نهایت پروژه روی `localhost:8000` قابل استفاده است. :)
</div>

---
<div dir='rtl'>
<h3>در ادامهء توسعه پروژه...</h3>

امیدواریم در آینده با خرید host و server پروژه از حالت local خارج بشه :)
</div>

---
<div dir='rtl'>

<h5>آزادکردن پورت 8000 در linux:</h5>

</div>

```shell
kill -9 $(ps -A | grep python | awk '{print $1}')
```
