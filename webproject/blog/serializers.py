from rest_framework import serializers
from blog.models import Blog

class BlogSerializer(serializers.ModelSerializer):
	username = serializers.SerializerMethodField()
	plaindate = serializers.SerializerMethodField()

	def get_username(self, obj):
		# add username data, for easy access
		return obj.op.username

	def get_plaindate(self, obj): 
		# Use UTC time, shouldn't be a huge issue. If local time is needed, should be as simple as using pytz
		# Currently uses 12hr, not as good for international implementation
		return obj.datePublished.strftime("%A, %B %d, %Y at %I:%M %p %Z")

	class Meta:
		model = Blog
		fields = '__all__'