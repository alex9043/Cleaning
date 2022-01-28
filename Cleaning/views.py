from django.shortcuts import render

def index(request):
    return render(request, "index.html")

def services(request):
    return render(request, 'pages/more_services.html')

def about(request):
    return render(request, 'pages/about.html')