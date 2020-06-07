from django.contrib.auth import get_user_model
from django.test import TestCase
from django.urls import reverse

from rest_framework import status
from rest_framework.authtoken.models import Token
from rest_framework.test import APIClient

from app.todo.models import Todo

# django-rest-frameworkのViewSetでは、XXXX-listでURL取得可能
TODO_URL = reverse('todo:todos-list')


class TodoViewSetTests(TestCase):
    """TodoViewSetのTestクラス
    """

    def setUp(self):
        self.client = APIClient()

    def test_auth_required_ng(self):
        """TodoViewSetの認証テスト
        未認証時は、401エラーが返却される
        """
        # Arrange ---

        # Act ---
        res = self.client.get(TODO_URL)

        # Assert ---
        assert res.status_code == status.HTTP_401_UNAUTHORIZED

    def test_auth_required_with_TOKEN(self):
        """TodoViewSetの認証テスト
        Tokenを付与して実行
        200OKが返却される
        """
        # Arrange ---
        user = get_user_model().objects.create_user(
            'admin',
            'adminpass'
        )
        token = Token.objects.create(user=user)
        client = self.client
        client.credentials(HTTP_AUTHORIZATION='Token ' + token.key)

        # Act ---
        res = client.get(TODO_URL)

        # Assert ---
        assert res.status_code == status.HTTP_200_OK
