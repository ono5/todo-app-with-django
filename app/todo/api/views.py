from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.views import APIView # new
from rest_framework.response import Response

from todo.models import Todo
from todo.api.serializers import TodoSerializer


@api_view(['GET'])
def todo_list_view(request):
    """post_view"""
    todos = Todo.objects.all()
    serializer = TodoSerializer(todos, many=True)
    return Response(serializer.data)
