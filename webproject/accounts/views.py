from django.shortcuts import render, redirect
from django.contrib.auth.forms import UserCreationForm

# Create your views here.
def register(request):
	if request.method == 'POST':
		form = UserCreationForm(request.POST)
		if form.is_valid():
			form.save()
			return redirect('/')
		else:
			args = {'form': form, 'invalid': True}
			return render(request, 'register.html', args)
	else:
		form = UserCreationForm()

		args = {'form': form, 'invalid': False}
		return render(request, 'register.html', args)