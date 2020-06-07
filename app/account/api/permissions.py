from rest_framework import permissions


class ProfilePermission(permissions.BasePermission):

    def has_object_permission(self, request, view, obj):
        """
        新規作成/データの取得のみ許可
        """
        if request.method in permissions.SAFE_METHODS:
            return True
        return False
