from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    #path('', include(books_authors_app.urls)),
    #path('admin/', admin.site.urls),
]