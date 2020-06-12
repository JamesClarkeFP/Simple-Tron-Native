from django.db import models
from jsonfield import JSONField
# Create your models here.
class AvailableTeam(models.Model):
	team = models.CharField(max_length=100, blank=False)

class BoardState(models.Model):
    board = JSONField()