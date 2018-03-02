from django.shortcuts import render, HttpResponse

# Create your views here.
def home(request):
	args = {'user': request.user}
	return render(request, 'index.html', args)

def about(request):
	return render(request, 'about.html')