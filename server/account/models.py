from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    nickname = models.CharField(max_length=30)
    level = models.IntegerField(default=1)
    exp = models.IntegerField(default=0)
    consecutive_access = models.IntegerField(default=1)
    learned_lc = models.ManyToManyField('klass.Lc', related_name='learned_user')
    learned_kw = models.ManyToManyField('klass.kw', related_name='learned_user')


class TestResult(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    score = models.IntegerField()
    test_at = models.DateField(auto_now_add=True)


class AccessDate(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    access_at = models.DateField(auto_now_add=True)


class Recent_learned_lc(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    lc = models.ForeignKey('klass.Lc', on_delete=models.CASCADE)
    learned_at = models.DateField(auto_now_add=True)

# class Acheivement(models.Model):
#     title = models.CharField(max_length=100)
#     content = models.TextField()
#     image_on = models.TextField()
#     image_off = models.TextField()
#     achieved = models.ManyToManyField(User, related_name='achieved')
