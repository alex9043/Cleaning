# Generated by Django 3.2.10 on 2021-12-16 11:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('order', '0008_remove_order_servicesinorder'),
    ]

    operations = [
        migrations.AddField(
            model_name='servicesinorder',
            name='Order',
            field=models.ManyToManyField(to='order.Order'),
        ),
    ]
