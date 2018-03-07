from django.shortcuts import render, redirect, HttpResponse
from blog.models import Blog
from blog.forms import BlogForm, SearchForm
from django.urls import reverse
from django.contrib.auth.decorators import login_required
from blog.serializers import BlogSerializer
from rest_framework import generics

# Create your views here.
def home(request):
	if request.method == 'POST':
		form = SearchForm(request.POST)
		blogs = Blog.objects.all()
		if form.is_valid():
			blogs = Blog.objects.filter(op__username=form.cleaned_data['author'])

		args = {'blogs': blogs, 'form':form}
		return render(request, 'index.html', args)

	else:
		form = SearchForm()
		blogs = Blog.objects.all()

		args = {'blogs': blogs, 'form':form}
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

@login_required
def edit(request, pk):
	blog = Blog.objects.get(pk=pk)
	if request.method == "POST" and request.user == blog.op:
		form = BlogForm(request.POST)
		if form.is_valid():
			new_blog = form.save(commit=False)
			blog.title = new_blog.title
			blog.content = new_blog.content
			blog.save()
		return redirect(reverse('profile'))
	form = BlogForm(instance = blog)
	args = {'form': form}
	return render(request, 'write.html', args)

@login_required
def delete(request,pk):
	blog = Blog.objects.get(pk=pk)
	if request.method == "POST" and request.user == blog.op:
		form = BlogForm(request.POST)
		if form.is_valid():
			blog.delete()
		return redirect(reverse('profile'))
	form = BlogForm(instance = blog)
	args = {'form': form}
	return render(request, 'write.html', args)

class apiview(generics.RetrieveUpdateDestroyAPIView):
	queryset = Blog.objects.all()
	serializer_class = BlogSerializer