from django.urls import path, re_path, include
from rest_framework.urlpatterns import format_suffix_patterns
from . import views

urlpatterns = [
	path('', views.home, name='index'),
	path('write/', views.write, name='write'),
	path('edit/<int:pk>)', views.edit, name='edit'),
	path('delete/<int:pk>)', views.delete, name='delete'),
	path('api/', views.BlogListView.as_view(), name='rest_list'),
	path('api/<int:pk>', views.BlogRUDView.as_view(), name='rest_rud'),
]

urlpatterns = format_suffix_patterns(urlpatterns)