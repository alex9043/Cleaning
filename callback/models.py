from django.db import models
from django.db.models.fields import CharField

class CallBack(models.Model):
    name = models.CharField(max_length=100)
    phone = models.CharField(max_length=12)

    def __str__(self):
        return self.name