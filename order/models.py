from django.db import models
from django.db.models.fields import CharField, DateTimeField, EmailField, FloatField, IntegerField, UUIDField
from django.db.models.fields.related import ForeignKey

import uuid

class CleaningType(models.Model):
    name = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=8,decimal_places=2)

    def __str__(self):
        return self.name

class Service(models.Model):
    name = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=8,decimal_places=2)

    def __str__(self):
        return self.name

class ServicesInOrder(models.Model):
    Service = models.ForeignKey('Service', on_delete=models.CASCADE)
    Order = models.ForeignKey('Order', on_delete=models.CASCADE, null=True)
    number = models.IntegerField()

    def __str__(self):
        return self.Service.name

class User(models.Model):
    firstName = models.CharField(max_length=100)
    secondName = models.CharField(max_length=100)
    phone = models.CharField(max_length=12)
    email = models.EmailField(primary_key=True)

    def __str__(self):
        return self.firstName + ' ' + self.secondName

class Status(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class Order(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    CleaningType = models.ForeignKey('CleaningType', on_delete=models.CASCADE)
    area = models.FloatField()
    dateTime = models.DateTimeField()
    User = models.ForeignKey('User', on_delete=models.CASCADE)
    totalPrice = models.DecimalField(max_digits=8,decimal_places=2)
    status = models.ManyToManyField('Status')

    def __str__(self):
        return str(self.id) + ' ' + self.CleaningType.name + ' ' + self.User.secondName