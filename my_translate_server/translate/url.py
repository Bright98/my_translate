from django.urls import path
from . import views

urlpatterns = [
    path("", views.home),
    path("translate/", views.translate),
    path("add_to_leitner/", views.add_to_leitner),
    path("show_words/", views.show_words),
    path("remember_word/", views.remember_word),
]