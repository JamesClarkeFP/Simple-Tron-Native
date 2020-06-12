from rest_framework import serializers
from tron.models import AvailableTeam
from tron.models import BoardState

class AvailableTeamSerializer(serializers.ModelSerializer):
	class Meta:
		model = AvailableTeam
		fields = ['id', 'team']

class BoardStateSerializer(serializers.ModelSerializer):
	class Meta:
		model = BoardState
		fields = ['id', 'board']