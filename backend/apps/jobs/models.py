from django.db import models
from django.contrib.auth import get_user_model
from django.utils.timezone import now  

User = get_user_model()

class JobPost(models.Model):
    employer = models.ForeignKey(User, on_delete=models.CASCADE)  
    title = models.CharField(max_length=255)
    description = models.TextField()
    location = models.CharField(max_length=100)
    salary = models.DecimalField(max_digits=10, decimal_places=2, default=0.00)  # ✅ Set default salary
    posted_at = models.DateTimeField(default=now)  

    def __str__(self):
        return self.title
