from django.shortcuts import render, HttpResponse, redirect
from .models import *
from django.contrib import messages

# Create your views here.
def index(request):
    return render(request, 'index.html')

def success(request):
    if 'user' not in request.session:
        return redirect('/')
    context = {
        'books': Book.objects.all()
    }
    return render(request, 'success.html', context)

## Loggin in and reg
def register(request):
    #create a user object
        errors = User.objects.basic_validator(request.POST)
        print(errors)
        if len(errors) > 0:
            for key, value in errors.items():
                messages.error(request, value)
            return redirect('/')
        new_user = User.objects.create(first_name=request.POST['fname'], last_name=request.POST['lname'], email=request.POST['email'], password=request.POST['pw'])
        request.session['user'] = new_user.first_name
        request.session['id'] = new_user.id      ##for use in post_mess to grab id of user 
        return redirect('/success')
    
def login(request):
    print(request.POST)
    # get user from DB
    logged_user = User.objects.filter(email=request.POST['email'])
    if len(logged_user) > 0:
        logged_user = logged_user[0]
        if logged_user.password == request.POST['pw']:
            request.session['user'] = logged_user.first_name
            request.session['id'] = logged_user.id   ##for use in post_mess to grab id of user
            return redirect('/success')
    return redirect('/')

def logout(request):
    request.session.flush()
    return redirect('/')

def add_book(request):
    Book.objects.create(title=request.POST['title'], description=request.POST['description']) ##from success template input
    return redirect('/success')
