from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('shows', views.all_shows),
    path('shows/new', views.add, name="add_show"),
    path('shows/create', views.create, name="create_show"),
    path('shows/<int:id>/edit', views.edit, name="edit_show"),
    path('shows/<int:id>/update', views.update, name="update_show"),
    path('shows/<int:id>', views.shows, name="view_show"),
    path('shows/<int:id>/delete', views.delete, name="delete_show"),
    #path('', include('semi_restful_app.urls')),    
    #path('admin/', admin.site.urls),
]