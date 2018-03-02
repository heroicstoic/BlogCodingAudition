from django.shortcuts import render, redirect, HttpResponse
from blog.models import Blog, BlogForm

# Create your views here.
def home(request):
	blogs = Blog.objects.all()

	args = {'user': request.user, 'blogs': blogs}
	return render(request, 'index.html', args)

def about(request):
	if request.method == 'POST':
		form = BlogForm(request.POST)
		if form.is_valid():
			blog = form.save(commit=False)
			blog.op = request.user
			blog.save()
		
		return redirect('/')
	else:
		form = BlogForm()
		args = {'form': form}
		return render(request, 'about.html', args)