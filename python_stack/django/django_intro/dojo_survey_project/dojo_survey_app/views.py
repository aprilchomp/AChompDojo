from django.shortcuts import render, redirect, HttpResponse
def index(request):
    return render(request, "index.html")

# Create your views here.
def process(request):
    if request.method != "POST":
        return redirect('/')
    print(request.POST['username'])
    print(request.POST['email'])
    print(request.POST['location'])
    print(request.POST['comments'])
    context = {
        'username': request.POST['username'],
        'email': request.POST['email'],
        'location': request.POST['location'],
        'comments': request.POST['comments'],
    }
    return render(request, 'results.html', context)
