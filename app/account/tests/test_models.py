from django.test import TestCase
from django.contrib.auth import get_user_model


class ModelTests(TestCase):

    def test_create_user_successful(self):
        """ユーザー作成の確認テスト
        """
        # Arrange ---
        name = 'admin'
        password = 'admin_password'

        # Act ---
        user = get_user_model().objects.create_user(
            name=name,
            password=password,
        )

        # Assert ---
        assert user.name == name
        assert user.check_password(password)
