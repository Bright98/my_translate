from django.db import models
import uuid


class User(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=20)

    def __str__(self):
        return "id: {} - email: {}".format(self.id, self.email)


class Word(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    word = models.CharField(
        max_length=50,
        unique=True,
    )
    translate = models.CharField(max_length=50)
    cycle = models.IntegerField(default=0)
    time_stamp = models.IntegerField(default=0)

    def __str__(self):
        return (
            "user: {} - word: {} - translate: {} - cycle: {} - time_stamp: {}".format(
                self.user_id, self.word, self.translate, self.cycle, self.time_stamp
            )
        )
