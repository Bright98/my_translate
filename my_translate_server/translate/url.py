from django.urls import path
from . import views

urlpatterns = [
    path("", views.home),
    path("translate/", views.translate),
    path("add_to_leitner/", views.add_to_leitner),
    path("show_words/<token>/", views.show_words),
    path("remember_word/", views.remember_word),
    path("remove_all_words/", views.remove_all_words),
    path("change_max_word/", views.change_max_word),
    path("show_max_word/<token>/", views.show_max_word),
    path("signup/", views.sign_up),
    path("login/", views.login),
    path("send_mail/", views.send_email),
    path("confirm_code/", views.get_confirm_code),
    path("reset_password/", views.reset_password),
]