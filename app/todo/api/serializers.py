from rest_framework import serializers
from app.models import Todo


class TodoSerializer(serializers.ModelSerializer):
    """Todo Serializer
    """
    class Meta:
        model = Todo
        exclude = ("id",)
