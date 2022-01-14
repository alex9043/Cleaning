from django.db import models
from django.db.models.fields import CharField, DateTimeField, EmailField, FloatField, IntegerField, UUIDField
from django.db.models.fields.related import ForeignKey

import uuid

class CleaningType(models.Model):
    name = models.CharField(max_length=100, default=None)
    price = models.DecimalField(max_digits=8,decimal_places=2, default=None)

    def __str__(self):
        return self.name

class Service(models.Model):
    name = models.CharField(max_length=100, default=None)
    price = models.DecimalField(max_digits=8,decimal_places=2, default=None)

    def __str__(self):
        return self.name

class ServicesInOrder(models.Model):
    Service = models.ForeignKey('Service', on_delete=models.CASCADE)
    Order = models.ForeignKey('Order', on_delete=models.CASCADE, null=True)
    number = models.IntegerField(default=None)

    def __str__(self):
        return self.Service.name

class User(models.Model):
    # id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    firstName = models.CharField(max_length=100)
    secondName = models.CharField(max_length=100)
    phone = models.CharField(max_length=12)
    email = models.EmailField()

    def __str__(self):
        return self.firstName + ' ' + self.secondName

class Status(models.Model):
    name = models.CharField(max_length=100, default=None)

    def __str__(self):
        return self.name


class Order(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    CleaningType = models.ForeignKey('CleaningType', on_delete=models.CASCADE, null=True, default=None)
    area = models.FloatField(null=True, default=None)
    dateTime = models.DateTimeField(null=True, default=None)
    User = models.ForeignKey('User', on_delete=models.CASCADE, null=True, default=None)
    totalPrice = models.DecimalField(max_digits=8,decimal_places=2, null=True, default=None)
    status = models.ManyToManyField('Status', null=True, default=None)

    def __str__(self):
        return str(self.id)