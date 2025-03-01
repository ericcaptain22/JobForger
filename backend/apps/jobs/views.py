from rest_framework import generics
from .models import JobPost
from .serializers import JobPostSerializer

class JobPostListCreateView(generics.ListCreateAPIView):
    queryset = JobPost.objects.all()
    serializer_class = JobPostSerializer
