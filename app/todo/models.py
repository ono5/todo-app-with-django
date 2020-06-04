from django.db import models
from account.models import User


class Todo(models.Model):
    """Todo Model
    """
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=50)
    content = models.CharField(max_length=255)

    def __str__(self):
        return self.title
