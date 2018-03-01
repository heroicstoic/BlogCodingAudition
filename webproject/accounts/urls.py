from django.urls import path
from django.contrib.auth.views import login
from . import views

urlpatterns = [
	path('', login, {'template_name': 'login.html'}),
	path('login/', login, {'template_name': 'login.html'}, name='login'),
]