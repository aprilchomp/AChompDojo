from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('process_form', views.process),
    #path('', include('dojo_survey_app.urls'))
    #path('admin/', admin.site.urls),
]