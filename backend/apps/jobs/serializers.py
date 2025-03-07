from rest_framework import serializers
from .models import JobPost

class JobPostSerializer(serializers.ModelSerializer):
    class Meta:
        model = JobPost
        fields = ["id", "employer", "title", "description", "location", "salary", "posted_at"]
        read_only_fields = ["employer", "posted_at"]  # ✅ Prevent modifying employer field
