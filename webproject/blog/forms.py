from django import forms
from blog.models import Blog

class BlogForm(forms.ModelForm):
	class Meta:
		model = Blog
		# don't let the user modify the OP or Date, those should be created by the server
		exclude = ['datePublished', 'op']

# possible depricated
# class SearchForm(forms.Form):
#	author = forms.CharField(label='', max_length=256, widget=forms.TextInput(attrs={'placeholder': 'Search by Author'}))