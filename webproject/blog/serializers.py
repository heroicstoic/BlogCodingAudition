from rest_framework import serializers
from blog.models import Blog

class BlogSerializer(serializers.ModelSerializer):
	username = serializers.SerializerMethodField()
	plaindate = serializers.SerializerMethodField()

	def get_username(self, obj):
		return obj.op.username

	def get_plaindate(self, obj):
		return obj.datePublished.strftime("%A, %B %d, %Y at %I:%M %p %Z")

	class Meta:
		model = Blog
		fields = '__all__'