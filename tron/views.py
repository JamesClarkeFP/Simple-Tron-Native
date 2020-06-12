from django.shortcuts import render

from tron.models import AvailableTeam
from tron.serializers import AvailableTeamSerializer
from tron.models import BoardState
from tron.serializers import BoardStateSerializer
from rest_framework import generics

class AvailableTeamList(generics.ListCreateAPIView):
	queryset = AvailableTeam.objects.all()
	serializer_class = AvailableTeamSerializer

class AvailableTeamDetail(generics.RetrieveUpdateDestroyAPIView):
	queryset = AvailableTeam.objects.all()
	serializer_class = AvailableTeamSerializer

class BoardStateList(generics.ListCreateAPIView):
	queryset = BoardState.objects.all()
	serializer_class = BoardStateSerializer

class BoardStateDetail(generics.RetrieveUpdateDestroyAPIView):
	queryset = BoardState.objects.all()
	serializer_class = BoardStateSerializer