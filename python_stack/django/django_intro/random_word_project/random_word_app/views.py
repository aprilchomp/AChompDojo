from django.shortcuts import render, HttpResponse, redirect
from django.utils.crypto import get_random_string 

def index(request):
    return render(request, "index.html")    

# Create your views here.
def results(request):
    if 'counter' not in request.session:
        request.session['counter'] = 0
    request.session['counter'] += 1
    generated_num = get_random_string(length=14)
    request.session['generated_num'] = generated_num
    return render(request, "index.html")

def clear_session(request):
    request.session.flush()
    return redirect('/')