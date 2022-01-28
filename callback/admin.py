from django.contrib import admin
from .models import CallBack

@admin.register(CallBack)
class CallBackAdmin(admin.ModelAdmin):
    pass