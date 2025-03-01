from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.permissions import AllowAny, IsAuthenticated
from django.contrib.auth import authenticate
from rest_framework.views import APIView
from rest_framework_simplejwt.tokens import RefreshToken
from .models import CustomUser
from .serializers import RegisterSerializer, UserSerializer, LoginSerializer
from django.db import connection
from django.contrib.auth.models import update_last_login  # ✅ Add this import


class UserProfileView(APIView):
    permission_classes = [IsAuthenticated]  # ✅ Only allow authenticated users

    def get(self, request):
        serializer = UserSerializer(request.user)  # ✅ Fetch logged-in user
        return Response(serializer.data)

class RegisterView(generics.CreateAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = RegisterSerializer
    permission_classes = [AllowAny]

    def perform_create(self, serializer):
        user = serializer.save()
        connection.commit()  # ✅ Ensure data is immediately committed to MySQL

class LoginView(generics.GenericAPIView):
    serializer_class = LoginSerializer
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        validated_data = serializer.validated_data
        user = validated_data["user"]  # ✅ Get User instance
        refresh = validated_data["refresh"]
        access = validated_data["access"]

        update_last_login(None, user)  # ✅ Update last login time
        connection.commit()  # ✅ Ensure login is saved to MySQL

        return Response({
            "refresh": refresh,
            "access": access,
            "user": UserSerializer(user).data  # ✅ Serialize user properly
        }, status=status.HTTP_200_OK)
