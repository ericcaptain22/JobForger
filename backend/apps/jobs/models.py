from django.db import models
from apps.users.models import CustomUser

class JobPost(models.Model):
    recruiter = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    description = models.TextField()
    required_skills = models.ManyToManyField("resumes.Skill")
    location = models.CharField(max_length=255)
