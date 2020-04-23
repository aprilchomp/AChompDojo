from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('results', views.results),
    path('clear_session', views.clear_session),
    #path('admin/', admin.site.urls),
]
