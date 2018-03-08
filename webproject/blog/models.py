from django.forms import ModelForm
from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Blog(models.Model):
	title = models.CharField(max_length = 256, help_text = "Blog Title")
	description = models.CharField(max_length = 256, help_text = "Blog Description")
	content = models.TextField(help_text = "Blog Content")
	datePublished = models.DateTimeField(auto_now = True, help_text = "Date Blog Published")
	op = models.ForeignKey(User, on_delete=models.CASCADE, help_text = "Original Poster")

	class Meta:
		ordering = ["-datePublished", "title", "description", "content", "op"]

	def get_absolute_url(self):
		return reverse('model-detail-view', args=[str(self.id)])

	def __str__(self):
		return self.title