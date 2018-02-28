from django.db import models

# Create your models here.

class Blog(models.Model):
    title = models.CharField(max_length = 20, help_text = "Title of the blog")
    content = models.TextField(help_text = "Content of the blog")
    datePublished = models.DateTimeField(auto_now = True, help_text = "Date blog published")

    class Meta:
        ordering = ["datePublished", "-title", "-content"]

    def get_absolute_url(self):
         return reverse('model-detail-view', args=[str(self.id)])

    def __str__(self):
        return self.title
