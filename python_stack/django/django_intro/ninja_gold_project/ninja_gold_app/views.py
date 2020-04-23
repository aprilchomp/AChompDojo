from django.shortcuts import render, HttpResponse, redirect
import random

def index(request):
    if 'total' not in request.session:
        request.session['total'] = 0
    if 'activities' not in request.session:
        request.session['activities'] = []
    return render(request, 'index.html')

# Create your views here.
def process_money(request):
    location = request.POST['location']
    request.session['location'] = location
    
    if location == 'farm':
        number = random.randint(10, 20)
        request.session['total'] += number
        request.session['activities'].append(f'Earned {number} golds from the farm!')
    if location == 'cave':
        number = random.randint(5, 10)
        request.session['total'] += number
        request.session['activities'].append(f'Earned {number} golds from the cave!')
    if location == 'house':
        number = random.randint(2, 5)
        request.session['total'] += number
        request.session['activities'].append(f'Earned {number} golds from the house!')
    if location == 'casino':
        number = random.randint(-50, 50)
        request.session['total'] += number
        if number >= 0:
            request.session['activities'].append(f'Entered a casio and earned {number} golds!')
        if number < 0:
            request.session['activities'].append(f'Entered a casio and lost {number} golds... ouch...')
    

    return redirect('/')
    #return render(request, 'index.html')