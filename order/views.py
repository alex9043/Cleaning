from django.shortcuts import render

def order(request):
    return render(request, "pages/application.html")
