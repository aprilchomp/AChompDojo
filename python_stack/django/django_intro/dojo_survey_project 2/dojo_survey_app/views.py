from django.shortcuts import render, redirect, HttpResponse
def index(request):
    return render(request, "index.html")

# Create your views here.
def process(request):
    if request.method != "POST":
        return redirect('/')
    request.session['username'] = request.POST['username']
    request.session['email'] = request.POST['email']
    request.session['location'] = request.POST['location']
    request.session['comments'] = request.POST['comments']

    return redirect(f'/results')

def results(request):
    context = {
    'username':request.session['username'],
    'email':request.session['email'],
    'location':request.session['location'],
    'comments':request.session['comments'],
}
    return render(request, 'results.html', context)

def clear_session(request):
    request.session.flush()
    return redirect('/')