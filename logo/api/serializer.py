from .models import Project
from .models import Service
from  rest_framework import serializers


class ProjectSerializer(serializers.ModelSerializer):
  class Meta:
    model = Project
    fields = ["id", "title", "description", "date", "client", "image", "location"]


class ServiceSerializer(serializers.ModelSerializer):
  class Meta:
    model = Service
    fields = ["id", "title", "description", "image"]
