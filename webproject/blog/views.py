from django.shortcuts import render, redirect, HttpResponse
from blog.models import Blog
from blog.forms import BlogForm, SearchForm
from django.urls import reverse
from django.contrib.auth.decorators import login_required

# Create your views here.
def home(request):
	form = SearchForm(auto_id=False)
	blogs = Blog.objects.all()

	args = {'user': request.user, 'blogs': blogs, 'form':form}
	return render(request, 'index.html', args)

@login_required
def write(request):
	if request.method == 'POST':
		form = BlogForm(request.POST)
		if form.is_valid():
			blog = form.save(commit=False)
			blog.op = request.user
			blog.save()
		
		return redirect(reverse('index'))
	else:
		form = BlogForm()
		args = {'form': form}
		return render(request, 'write.html', args)