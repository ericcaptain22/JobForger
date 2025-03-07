from django.urls import path
from .views import ResumeListCreateView, ResumeDetailView, UserResumeListView  # ✅ Added UserResumeListView

urlpatterns = [
    path("", ResumeListCreateView.as_view(), name="resume-list-create"),  # ✅ `/api/resumes/`
    path("<int:pk>/", ResumeDetailView.as_view(), name="resume-detail"),  # ✅ `/api/resumes/{id}/`
    path("my-resumes/", UserResumeListView.as_view(), name="user-resumes"),  # ✅ `/api/resumes/my-resumes/`
]
