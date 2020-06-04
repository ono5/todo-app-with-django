from django.contrib import admin
from todo.models import Todo


admin.sites.register(Todo)
