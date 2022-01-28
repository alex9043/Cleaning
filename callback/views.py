from django.shortcuts import render

from .models import CallBack
from .form import CallBackForm

def callback(request):
    if request.method == "POST":
        name = request.POST.get("name")
        phone = request.POST.get("phone")
        callback = CallBack(
            name = name,
            phone = phone, 
        )
        callback.save()
        return render(request, "index.html")
    else:
        callBackForm = CallBackForm()
        return render(request, "index.html", {"form": callBackForm})
