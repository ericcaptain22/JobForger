from django.contrib import admin
from django.urls import path, include
from django.shortcuts import redirect
from django.http import JsonResponse

# Function to handle requests to `/api/`
def api_root(request):
    return JsonResponse({"message": "Welcome to the Resume Builder API!", "endpoints": ["/api/users/", "/api/resumes/", "/api/jobs/"]})

# Function to redirect `/` to `/api/`
def redirect_to_api(request):
    return redirect("/api/")

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/users/", include("apps.users.urls")),
    path("api/resumes/", include("apps.resumes.urls")),
    path("api/jobs/", include("apps.jobs.urls")),
    path("api/", api_root),  # ✅ `/api/` as the main API entry point
    path("", redirect_to_api),  # ✅ Redirect root `/` to `/api/`
]
