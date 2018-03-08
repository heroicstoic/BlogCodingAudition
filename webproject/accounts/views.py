from django.shortcuts import render, redirect
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
from django.contrib.auth.decorators import login_required
from blog.models import Blog

# very basic user creation - presently does not require email, name, etc.
def register(request):
	if request.method == 'POST': #if posted, create the user as long as the form is valid
		form = UserCreationForm(request.POST)
		if form.is_valid():
			form.save()
			return redirect('/accounts/profile')
		else:
			args = {'form': form, 'invalid': True}
			return render(request, 'register.html', args)
	# if not posted, we probably just need to serve the page as intended
	else:
		form = UserCreationForm()

		args = {'form': form, 'invalid': False}
		return render(request, 'register.html', args)

# Allow the user to access their server-side profile, allowing them to modify their posted blogs
# django controlled to have better prevention of tampering
@login_required
def profile(request):
	blogs = Blog.objects.filter(op=request.user)
	args = {'user': request.user, 'blogs': blogs}
	return render(request, 'profile.html', args)