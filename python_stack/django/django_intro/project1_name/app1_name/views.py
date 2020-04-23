from django.shortcuts import render, HttpResponse, redirect

def index(request):
    return HttpResponse("placeholder to later display a list of all blogs")
def new(request):
    return HttpResponse("placeholder to display a new form to create a new blog")
def third(request, name):
    return HttpResponse(f"hello {name}!")
def add(request, num1, num2):
    my_sum = num1 + num2
    return HttpResponse(f'The sum of {num1} and {num2} is {my_sum}')
    #what you would enter in url bar is 'localhost:8000/add/24/24
def show(request, num1):
    return HttpResponse(f'placeholder to display blog number: {num1}')
def edit(request, num1):
    return HttpResponse(f'placeholder to edit blog {num1}')
def create(request):
    return redirect('/')
def destroy(request):
    return redirect('/')
