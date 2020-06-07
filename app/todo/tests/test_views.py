from django.contrib.auth import get_user_model
from django.test import TestCase
from django.urls import reverse

from rest_framework import status
from rest_framework.authtoken.models import Token
from rest_framework.test import APIClient

from todo.models import Todo
from todo.api.serializers import TodoSerializer

# django-rest-frameworkのViewSetでは、XXXX-listでURL取得可能
TODO_URL = reverse('todo:todos-list')


def sample_todo(user, **params):
    """Todoを作成する
    """
    defaults = {
        'title': 'First Todo',
        'content': 'Hello World',
    }
    defaults.update(params)
    return Todo.objects.create(author=user, **defaults)


class TodoViewSetAuthTests(TestCase):
    """TodoViewSetのTestクラス
    """

    def setUp(self):
        self.client = APIClient()
        self.user = get_user_model().objects.create_user(
            'admin',
            'adminpass'
        )

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
        token = Token.objects.create(user=self.user)
        client = self.client
        client.credentials(HTTP_AUTHORIZATION='Token ' + token.key)

        # Act ---
        res = client.get(TODO_URL)

        # Assert ---
        assert res.status_code == status.HTTP_200_OK


class TodoViewSetTests(TestCase):
    def setUp(self):
        self.user = get_user_model().objects.create_user(
            'admin',
            'adminpass'
        )
        token = Token.objects.create(user=self.user)
        self.client = APIClient()
        self.client.credentials(HTTP_AUTHORIZATION='Token ' + token.key)

    def test_retrieve_todos(self):
        """Todoリストを取得する
        """
        # Arrange ---
        sample_todo(user=self.user)
        sample_todo(user=self.user)

        # Act ---
        res = self.client.get(TODO_URL)

        # Assert ---
        todos = Todo.objects.all().order_by('id')
        serializer = TodoSerializer(todos, many=True)
        assert res.status_code == status.HTTP_200_OK
        assert res.data == serializer.data
