from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    #path('', include(users_app.urls)),
    #path('admin/', admin.site.urls),
]