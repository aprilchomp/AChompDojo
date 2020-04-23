from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('add_course', views.add_course),
    path('remove/<int:id>', views.remove, name="remove_course"),
    path('confirm_remove/<int:id>', views.confirm_remove, name="confirm_remove")
]