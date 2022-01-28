from django.http.response import HttpResponseRedirect
from django.shortcuts import render
from django.http import HttpResponse
from .form import OrderForm
from .models import CleaningType, Order, User, Service, ServicesInOrder, Status
from datetime import datetime

mothsDict = {"Январь": 1, "Февраль": 2, "Март": 3, "Апрель": 4, "Май": 5, "Июнь": 6, "Июль": 7, "Август": 8, "Сентябрь": 9, "Октябрь": 10, "Ноябрь": 11, "Декабрь": 12}
def order(request):
    if request.method == "POST":
        cleaningType = request.POST.get("cleaningType")
        area = request.POST.get("area")
        serviceName = request.POST.getlist("serviceName")
        serviceNumber = request.POST.getlist("serviceNumber")
        day = request.POST.get("day")
        month = request.POST.get("month")
        monthNum = mothsDict[month]
        # date = month + " " + day
        time = request.POST.get("time")
        firstName = request.POST.get("firstName")
        secondName = request.POST.get("secondName")
        phone = request.POST.get("phone")
        email = request.POST.get("email")
        address = request.POST.get("address")
        order = Order(
            CleaningType = CleaningType.objects.get(name = cleaningType), 
            area = area, 
            dateTime = "{0}-{1}-{2} {3}".format(datetime.now().year, monthNum, day, time), 
            User = User.objects.get(phone = phone),
            totalPrice = 0, 
            # status = Status.objects.get(name = "Получен"), 
        )
        order.save()
        totalPrice = ServInOrder(order, serviceName, serviceNumber)
        # if
        totalPrice = int(CleaningType.objects.get(name = cleaningType).price) * int(area) + totalPrice
        order.totalPrice = totalPrice
        order.save()
        # return HttpResponse("<h2>cleaningType = {0}</h2><h2>area = {1}</h2><h2>serviceName = {2}</h2><h2>serviceNumber = {3}</h2><h2>day = {4}</h2><h2>time = {5}</h2><h2>firstName = {6}</h2><h2>secondName = {7}</h2><h2>phone = {8}</h2><h2>email = {9}</h2><h2>address = {10}</h2>".format(cleaningType, area, serviceName, serviceNumber, date, time, firstName, secondName, phone, email, address))
        return HttpResponseRedirect("/order")
    else:
        orderform = OrderForm()
        return render(request, "pages/order.html", {"form": orderform})
    # return render(request, "pages/application.html")

def ServInOrder(order, serviceName, serviceNumber):
    i = 0
    totalPrice = 0
    while(i < len(serviceName)):
        if serviceName[i] == "":
            pass
        else:
            servInOrder = ServicesInOrder(
                Order = Order.objects.get(id = order.id),
                Service = Service.objects.get(name = serviceName[i]),
                number = serviceNumber[i]
            )
            servInOrder.save()
            if int(serviceNumber[i]) > 0:
                totalPrice = totalPrice + int(Service.objects.get(name = serviceName[i]).price) * int(serviceNumber[i])
            else:
                totalPrice = totalPrice + int(Service.objects.get(name = serviceName[i]).price)
        i = i + 1
    print(totalPrice)
    return totalPrice