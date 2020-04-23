# #from django.contrib import admin
# from django.urls import path, include

# urlpatterns = [
#     path('', include('app1_name.urls')),
#     #path('admin/', admin.site.urls),
# ]

from django.urls import path
from . import views
urlpatterns = [
    path('', views.index),
    path('new', views.new),
    path('third/<str:name>', views.third),
    path('add/<int:num1>/<int:num2>', views.add),
    path('show/<int:num1>', views.show),
    path('edit/<int:num1>', views.edit),
    path('create', views.create),
    path('destroy', views.destroy),
]