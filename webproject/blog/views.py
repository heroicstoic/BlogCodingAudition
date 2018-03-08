from django.shortcuts import render, redirect, HttpResponse
from blog.models import Blog
from blog.forms import BlogForm
from django.urls import reverse
from django.contrib.auth.decorators import login_required
from blog.serializers import BlogSerializer
from rest_framework import generics

# Home page, entirely react controlled and live
def home(request):
	return render(request, 'index.html')

# view a post, also to be react controlled
def post(request,pk):
	blog = Blog.objects.get(pk=pk)
	args = {'blog' : blog}
	return render(request, 'post.html', args)

# create new blog. Secure page, django controlled
@login_required
def write(request):
	if request.method == 'POST': # if we are posting, save the blog safely and go to the home page
		form = BlogForm(request.POST)
		if form.is_valid():
			blog = form.save(commit=False)
			blog.op = request.user
			blog.save()
		
		return redirect(reverse('index'))
	else: # if we aren't posting, simply direct to the login page
		form = BlogForm()
		args = {'form': form}
		return render(request, 'write.html', args)

# edit submitted blog, server-side secured
@login_required
def edit(request, pk):
	blog = Blog.objects.get(pk=pk)
	if request.method == "POST" and request.user == blog.op: #if we are posting, and the user owns the blog, let the changes be saved.
		form = BlogForm(request.POST)
		if form.is_valid():
			new_blog = form.save(commit=False)
			blog.title = new_blog.title
			blog.content = new_blog.content
			blog.save()
		return redirect(reverse('profile'))

	# if any above requirements are not satisfied, simply direct to the page.
	form = BlogForm(instance = blog)
	args = {'form': form}
	return render(request, 'write.html', args)

# delete submitted blog, server-side secured
@login_required
def delete(request,pk):
	blog = Blog.objects.get(pk=pk)
	if request.method == "POST" and request.user == blog.op: #if we are posting, and the user owns the blog, let the blog be deleted.
		form = BlogForm(request.POST)
		if form.is_valid():
			blog.delete()
		return redirect(reverse('profile'))

	# if any above requirements are not satisfied, simply direct to the page.
	form = BlogForm(instance = blog)
	args = {'form': form}
	return render(request, 'write.html', args)

# List for REST API, returns all blogs, with optional filter
class BlogListView(generics.ListAPIView):
	serializer_class = BlogSerializer

	def get_queryset(self): # determine what we should be serving the user
		qset = Blog.objects.all()
		query = self.request.GET.get("op")
		if query is not None:
			qset = qset.filter(op__username=query)
		# since we can't update or destroy from this view, 
		return qset

# Allow retrieve view, but not full RUD, as securing is more complicated, and not needed with this implementation
# Allows GET, HEAD, OPTIONS, but not PUT or PATCH
# If time permits, implement secure RUD
class BlogRView(generics.RetrieveAPIView):
	queryset = Blog.objects.all()
	serializer_class = BlogSerializer