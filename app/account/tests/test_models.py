from django.test import TestCase
from django.contrib.auth import get_user_model


class ModelTests(TestCase):

    def test_create_user_successful(self):
        """ユーザー作成の確認テスト
        """
        # Arrange ---
        username = 'admin'
        password = 'admin_password'

        # Act ---
        user = get_user_model().objects.create_user(
            username=username,
            password=password,
        )

        # Assert ---
        assert user.username == username
        assert user.check_password(password)

    def test_create_new_superuser(self):
        """管理ユーザー確認テスト
        """
        # Arrange ---

        # Act ---
        user = get_user_model().objects.create_superuser(
            'superuser',
            'superuser')

        # Assert ---
        assert user.is_superuser
        assert user.is_staff
