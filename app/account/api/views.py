from rest_framework import generics
from rest_framework import viewsets
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated

from account.models import User
from account.api.serializers import UserSerializer
from account.api.permissions import ProfilePermission


class UserViewSet(viewsets.ModelViewSet):
    """User View Set
    ユーザー情報の検索/登録/更新/削除するAPIを提供する
    """
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = (ProfilePermission,)


class ManageUserView(generics.RetrieveUpdateAPIView):
    """Manage User View
    アクセストークンからユーザー情報を取得/更新するAPIを提供する
    """
    serializer_class = UserSerializer
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated,)

    def get_object(self):
        # ログインしているユーザーを戻す
        return self.request.user
