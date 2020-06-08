from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework import viewsets
from todo.models import Todo
from todo.api.serializers import TodoSerializer


class TodoViewSet(viewsets.ModelViewSet):
    """Todo View Set
    Todoの検索/登録/更新/削除するPIを提供する
    認証(アクセストークン)が必要
    """
    # queryset = Todo.objects.all().order_by('id')
    serializer_class = TodoSerializer
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated,)

    def get_queryset(self):
        return Todo.objects.filter(author=self.request.user).order_by('id')
