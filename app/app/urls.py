from django.contrib import admin
from django.urls import path, include
from rest_framework.authtoken.views import obtain_auth_token

urlpatterns = [
    path('api/', include("todo.api.urls")),
    path('api/', include("account.api.urls")),
    path('api/admin/', admin.site.urls),
    path('api/auth/', obtain_auth_token),
]
