from django.contrib.auth.models import AbstractUser, Group, Permission
from django.db import models

class CustomUser(AbstractUser):
    USER_TYPE_CHOICES = (("job_seeker", "Job Seeker"), ("recruiter", "Recruiter"))
    user_type = models.CharField(max_length=20, choices=USER_TYPE_CHOICES)

    # Fix reverse accessor conflicts
    groups = models.ManyToManyField(Group, related_name="custom_user_groups", blank=True)
    user_permissions = models.ManyToManyField(Permission, related_name="custom_user_permissions", blank=True)
