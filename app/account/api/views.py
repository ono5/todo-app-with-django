from rest_framework import generics
from rest_framework import viewsets
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated

from account.models import User
from account.api.serializers import UserSerializer
from account.api.permissions import ProfilePermission


class UserViewSet(viewsets.ModelViewSet):
    """User View Set
    全てのユーザーを許可
    """
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = (ProfilePermission,)


class ManageUserView(generics.RetrieveUpdateAPIView):
    """Manage User View
    認証が通ったユーザーのみ可
    """
    serializer_class = UserSerializer
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated,)

    def get_object(self):
        # ログインしているユーザーを戻す
        return self.request.user
