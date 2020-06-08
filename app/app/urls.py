from django.contrib import admin
from django.urls import path, include
from rest_framework.authtoken.views import obtain_auth_token
from rest_framework_swagger.views import get_swagger_view

API_TITLE = 'Todo API'
API_DESCRIPTION = 'Todo管理用API'
schema_view = get_swagger_view(title=API_TITLE)

urlpatterns = [
    path('api/', include("todo.api.urls")),
    path('api/', include("account.api.urls")),
    path('api/admin/', admin.site.urls),
    path('api/auth/', obtain_auth_token),
    path('api/swagger-docs/', schema_view),
]
