from django.urls import path
from django.contrib.auth.views import login, logout
from . import views

urlpatterns = [
	path('', login, {'template_name': 'login.html'}),
	path('login/', login, {'template_name': 'login.html'}, name='login'),
	path('logout/', logout, {'template_name': 'logout.html'}, name='logout'),
	path('register/', views.register, name='register'),
]