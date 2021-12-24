from django.shortcuts import render
from django.http import HttpResponse
from .form import OrderForm

def order(request):
    if request.method == "POST":
        post_data = request.POST
        if 'cleaningType1' in post_data:
            cleaningType = "Поддерживающая"
        elif 'cleaningType2' in post_data:
            cleaningType = "Стандартная"
        elif 'cleaningType3' in post_data:
            cleaningType = "Генеральная"
        elif 'cleaningType4' in post_data:
            cleaningType = "Послестроительная"
        elif 'cleaningType5' in post_data:
            cleaningType = "Мойка окон"

        area = request.POST.get("area")
        # age = request.POST.get("age")     # получение значения поля age
        return HttpResponse("<h2>cleaningType = {0}</h2><h2>value = {1}</h2>".format(cleaningType, area))
    else:
        orderform = OrderForm()
        return render(request, "pages/order_test.html", {"form": orderform})
    
    # return render(request, "pages/application.html")
    
