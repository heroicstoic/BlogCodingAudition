from django import forms
from blog.models import Blog

class BlogForm(forms.ModelForm):
	class Meta:
		model = Blog
		exclude = ['datePublished', 'op']

class SearchForm(forms.Form):
	author = forms.CharField(label='', max_length=256, widget=forms.TextInput(attrs={'placeholder': 'Search by Author'}))