from rest_framework import generics, permissions
from .models import JobPost
from .serializers import JobPostSerializer

class JobPostListCreateView(generics.ListCreateAPIView):
    queryset = JobPost.objects.all()
    serializer_class = JobPostSerializer
    permission_classes = [permissions.IsAuthenticated]  # ✅ Requires authentication

    def perform_create(self, serializer):
        serializer.save(employer=self.request.user)  # ✅ Automatically assigns employer

class JobPostDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = JobPost.objects.all()
    serializer_class = JobPostSerializer
    permission_classes = [permissions.IsAuthenticated]
