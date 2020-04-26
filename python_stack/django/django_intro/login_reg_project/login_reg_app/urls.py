from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('register', views.register),
    path('success', views.success),
    path('login', views.login),
    path('logout', views.logout),
    path('make_post', views.post_mess),
    path('add_comment/<int:id>', views.post_comment),
]
