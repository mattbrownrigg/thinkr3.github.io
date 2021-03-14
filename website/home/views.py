from django.shortcuts import render

# Create your views here.

def home(request):
     context = {}
     return render(request, 'home/home.html', context)

def aboutme(request):
     context = {}
     return render(request, 'aboutme/main.html', context)

def projects(request):
     context = {}
     return render(request, 'projects/main.html', context)

