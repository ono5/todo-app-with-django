from django.test import TestCase
from django.urls import reverse

from rest_framework import status
from rest_framework.test import APIClient

# django-rest-frameworkのViewSetでは、XXXX-listでURL取得可能
TODO_URL = reverse('todo:todos-list')


class TodoViewSetTests(TestCase):
    """TodoViewSetのTestクラス
    """

    def setUp(self):
        self.client = APIClient()

    def test_auth_required(self):
        """TodoViewSetの認証テスト
        未認証時は、401エラー
        """
        # Arrange ---

        # Act ---
        res = self.client.get(TODO_URL)

        # Assert ---
        assert res.status_code == status.HTTP_401_UNAUTHORIZED
