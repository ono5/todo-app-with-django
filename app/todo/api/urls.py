from django.urls import path

from todo.api.views import (
    todo_list_view,
)

urlpatterns = [
    path("todos/", todo_list_view, name="todo-list"),
]
