from django.urls import path, re_path, include
from . import views

urlpatterns = [
	path('', views.home, name='index'),
	path('write', views.write, name='write'),
	path('edit/<int:pk>)', views.edit, name='edit'),
	path('delete/<int:pk>)', views.delete, name='delete'),
]