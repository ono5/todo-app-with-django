from django.urls import path
from django.conf.urls import include
from rest_framework import routers

from todo.api.views import TodoViewSet

router = routers.DefaultRouter()
router.register('todos', TodoViewSet, 'todos')

app_name = 'todo'

urlpatterns = [
    path('', include(router.urls)),
]
