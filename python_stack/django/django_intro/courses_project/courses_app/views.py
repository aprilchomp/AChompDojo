from django.shortcuts import render, HttpResponse, redirect
from django.contrib import messages
from .models import Course

# Create your views here.
def index(request):
    courses = Course.objects.all()
    context = {
        'courses': courses,
    }
    return render(request, 'index.html', context)

def add_course(request):
    errors = Course.objects.basic_validator(request.POST)
    if len(errors) > 0:
        for key, value in errors.items():
            messages.error(request, value)
        return redirect('/')
    else:
        new_course = Course.objects.create(name=request.POST['name'], description=request.POST['description'])
        print(new_course)
        return redirect('/')

def remove(request, id):
    remove_course = Course.objects.get(id=id)
    context = {
        'id': remove_course.id,
        'name': remove_course.name,
        'description': remove_course.description,
    }
    return render(request, 'remove.html', context)

def confirm_remove(request, id):
    remove_course = Course.objects.get(id=id)
    remove_course.delete()
    return redirect('/')
