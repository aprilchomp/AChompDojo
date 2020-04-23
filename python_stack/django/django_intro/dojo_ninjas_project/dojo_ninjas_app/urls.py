from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    #path('', include('dojo_ninjas_app.urls')),
    #path('admin/', admin.site.urls),
]
