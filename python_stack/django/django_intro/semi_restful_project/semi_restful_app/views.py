from django.shortcuts import render, HttpResponse, redirect
from .models import Show
# Inside your app's views.py file for validation (below)
from django.contrib import messages

# Create your views here.
def index(request):
    return redirect('/shows')

def create(request):
    # pass the post data to the method we wrote and save the response in a variable called errors
    errors = Show.objects.basic_validator(request.POST)
    # check if the errors dictionary has anything in it
    if len(errors) > 0:
        # if the errors dictionary contains anything, loop through each key-value pair and make a flash message
        for key, value in errors.items():
            messages.error(request, value)
        # redirect the user back to the form to fix the errors
        return redirect('/shows/new')
    else:
        new_show = Show.objects.create(title=request.POST['title'], network=request.POST['network'], release_date=request.POST['release_date'], description=request.POST['description'])
        context = {
            'title': new_show.title,
            'network': new_show.network,
            'release_date': new_show.release_date,
            'description': new_show.description,
        }
        return redirect(f'/shows/{new_show.id}')

def edit(request, id):
    edited_show = Show.objects.get(id=id)
    context = {
        'id': edited_show.id,
        'title': edited_show.title,
        'network': edited_show.network,
        'release_date': edited_show.release_date,
        'description': edited_show.description,
    }
    return render(request, 'edit.html', context)

def update(request, id):
        # pass the post data to the method we wrote and save the response in a variable called errors
    errors = Show.objects.basic_validator(request.POST)
        # check if the errors dictionary has anything in it
    if len(errors) > 0:
        # if the errors dictionary contains anything, loop through each key-value pair and make a flash message
        for key, value in errors.items():
            messages.error(request, value)
        # redirect the user back to the form to fix the errors
        return redirect(f'/shows/{id}/edit')
    else:
        # if the errors object is empty, that means there were no errors!
        # retrieve the blog to be updated, make the changes, and save
        updated_show = Show.objects.get(id=id)
        updated_show.title = request.POST['title']
        updated_show.network = request.POST['network']
        updated_show.release_date = request.POST['release_date']
        updated_show.description = request.POST['description']
        updated_show.save()
        return redirect(f'/shows/{updated_show.id}')


def add(request):
    return render(request, 'add.html')

def shows(request, id):
    new_show = Show.objects.get(id=id)
    context = {
        'id': new_show.id,
        'title': new_show.title,
        'network': new_show.network,
        'release_date': new_show.release_date,
        'description': new_show.description,
    }
    return render(request, 'show.html', context)

def all_shows(request):
    shows = Show.objects.all()
    context = {
        'shows': shows
    }
    return render(request, 'index.html', context)

def delete(request, id):
    delete_show = Show.objects.get(id=id)
    delete_show.delete()
    return redirect('/')

