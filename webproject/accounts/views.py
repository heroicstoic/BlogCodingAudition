from django.shortcuts import render, redirect
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
from django.contrib.auth.decorators import login_required
from blog.models import Blog

def register(request):
	if request.method == 'POST':
		form = UserCreationForm(request.POST)
		if form.is_valid():
			form.save()
			return redirect('/accounts/profile')
		else:
			args = {'form': form, 'invalid': True}
			return render(request, 'register.html', args)
	else:
		form = UserCreationForm()

		args = {'form': form, 'invalid': False}
		return render(request, 'register.html', args)

@login_required
def profile(request):
	blogs = Blog.objects.filter(op=request.user)
	args = {'user': request.user, 'blogs': blogs}
	return render(request, 'profile.html', args)