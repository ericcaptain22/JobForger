from django.db import models
from apps.users.models import CustomUser

class Skill(models.Model):
    name = models.CharField(max_length=255, unique=True)

class Resume(models.Model):
    user = models.OneToOneField(CustomUser, on_delete=models.CASCADE)
    full_name = models.CharField(max_length=255)
    email = models.EmailField()
    phone = models.CharField(max_length=20)
    experience = models.TextField()
    skills = models.ManyToManyField(Skill)
