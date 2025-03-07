from rest_framework import generics, permissions
from .models import Resume
from .serializers import ResumeSerializer
from rest_framework.permissions import IsAuthenticated

class UserResumeListView(generics.ListAPIView):
    serializer_class = ResumeSerializer
    permission_classes = [IsAuthenticated]  # ✅ Ensure only logged-in users access their resumes

    def get_queryset(self):
        return Resume.objects.filter(user=self.request.user)  # ✅ Fetch only logged-in user's resumes


class ResumeListCreateView(generics.ListCreateAPIView):
    queryset = Resume.objects.all()
    serializer_class = ResumeSerializer
    permission_classes = [permissions.IsAuthenticated]  # ✅ Ensure only logged-in users can create

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)  # ✅ Save the resume under the logged-in user

class ResumeDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Resume.objects.all()
    serializer_class = ResumeSerializer
    permission_classes = [permissions.IsAuthenticated]


