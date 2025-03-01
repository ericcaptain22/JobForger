from rest_framework import generics
from .models import Resume
from .serializers import ResumeSerializer
from rest_framework.permissions import IsAuthenticated

class UserResumeListView(generics.ListAPIView):
    serializer_class = ResumeSerializer
    permission_classes = [IsAuthenticated]  # ✅ Ensure only logged-in users access their resumes

    def get_queryset(self):
        return Resume.objects.filter(user=self.request.user)  # ✅ Fetch only logged-in user's resumes
