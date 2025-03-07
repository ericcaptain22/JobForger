from rest_framework import serializers
from .models import Resume, Skill

class SkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skill
        fields = "__all__"
        
class ResumeSerializer(serializers.ModelSerializer):
    skills = SkillSerializer(many=True, read_only=True)

    class Meta:
        model = Resume
        fields = ["id", "user", "title", "summary", "skills"]  # ✅ Ensure all fields are included
        read_only_fields = ["user"]  # ✅ Prevent changing the user manually
