from django.db import models

# Create your models here.


class Word(models.Model):
    word = models.CharField(
        max_length=50,
        unique=True,
    )
    translate = models.CharField(max_length=50)
    cycle = models.IntegerField(default=0)
    time_stamp = models.IntegerField(default=0)

    def __str__(self):
        return "word: {} - translate: {} - cycle: {} - time_stamp: {}".format(
            self.word, self.translate, self.cycle, self.time_stamp
        )
