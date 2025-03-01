from django.urls import path
from .views import UserResumeListView

urlpatterns = [
    path("my-resumes/", UserResumeListView.as_view(), name="my-resumes"),  # ✅ Updated path
]
