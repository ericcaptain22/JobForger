import os
from pathlib import Path
from django.core.management.utils import get_random_secret_key
# Define BASE_DIR correctly
BASE_DIR = Path(__file__).resolve().parent.parent
SECRET_KEY = os.getenv("DJANGO_SECRET_KEY", get_random_secret_key())
DEBUG = True
ALLOWED_HOSTS = ["*"]
AUTH_USER_MODEL = "users.CustomUser"
ROOT_URLCONF = "config.urls"  # Ensure this matches your project's main URLs file
DEFAULT_AUTO_FIELD = "django.db.models.BigAutoField"

# Static files (CSS, JavaScript, Images)
STATIC_URL = "/static/"
#STATICFILES_DIRS = [BASE_DIR / "static"]  # For development
# Media files (User uploads like resumes)
MEDIA_URL = "/media/"
MEDIA_ROOT = BASE_DIR / "media"
# Serve static files in development
if DEBUG:
    import mimetypes
    mimetypes.add_type("application/javascript", ".js", True)

INSTALLED_APPS = [
    "django.contrib.admin",
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    "django.contrib.messages",
    "django.contrib.staticfiles",
    "rest_framework",
    "rest_framework_simplejwt",
    "corsheaders",
    "django_filters",
    "apps.users",
    "apps.resumes",
    "apps.jobs",
]

MIDDLEWARE = [
    "django.middleware.security.SecurityMiddleware",
    "django.contrib.sessions.middleware.SessionMiddleware",
    "corsheaders.middleware.CorsMiddleware",
    "django.middleware.common.CommonMiddleware",
    "django.middleware.csrf.CsrfViewMiddleware",
    "django.contrib.auth.middleware.AuthenticationMiddleware",
    "django.contrib.messages.middleware.MessageMiddleware",
    
]

CORS_ALLOWED_ORIGINS = [
    "http://localhost:3000",  # React frontend
]

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',  # Ensure it's MySQL
        'NAME': 'resume',                   # Your database name
        'USER': 'root',                 # Your MySQL username
        'PASSWORD': 'Kdb0017@',         # Your MySQL password
        'HOST': '127.0.0.1',                    # Use '127.0.0.1' instead of 'localhost'
        'PORT': '3306',                         # Default MySQL port
    }
}



TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [BASE_DIR / "templates"], # Make sure this directory exists
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

REST_FRAMEWORK = {
    "DEFAULT_AUTHENTICATION_CLASSES": (
        "rest_framework_simplejwt.authentication.JWTAuthentication",
    ),
    "DEFAULT_PERMISSION_CLASSES": [
        "rest_framework.permissions.AllowAny",
    ],
}

"""LOGGING = {
    "version": 1,
    "disable_existing_loggers": False,
    "handlers": {
        "console": {
            "class": "logging.StreamHandler",
        },
    },
    "loggers": {
        "django": {
            "handlers": ["console"],
            "level": "DEBUG",
            "propagate": True,
        },
    },
}
"""