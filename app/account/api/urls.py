from django.urls import path
from django.conf.urls import include
from rest_framework import routers

from account.api.views import (
    UserViewSet,
    ManageUserView,
)

router = routers.DefaultRouter()
router.register('users', UserViewSet)

urlpatterns = [
    path('account/', ManageUserView.as_view(), name='account'),
    path('', include(router.urls))
]
