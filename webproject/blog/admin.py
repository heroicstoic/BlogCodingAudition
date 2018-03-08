from django.contrib import admin
from blog.models import Blog

class BlogAdmin(admin.ModelAdmin):
	fields = ("title", "description", "content", "op", "datePublished", "id")
	readonly_fields = ("op", "datePublished", "id")

# Register your models here.
admin.site.register(Blog, BlogAdmin)