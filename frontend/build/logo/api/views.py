from django.shortcuts import render, get_object_or_404
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from .models import Project, Service
from .serializer import ProjectSerializer, ServiceSerializer

# for projects
@api_view(['GET', 'POST'])
def project_list(request):
  if request.method == 'GET':
    projects = Project.objects.all()
    serializer = ProjectSerializer(projects, many=True)
    return Response(serializer.data)

@api_view(["GET"])
def project_detail(request, pk):
    project = get_object_or_404(Project, id=pk)
    if request.method == 'GET':
        serializer = ProjectSerializer(project)
        return Response(serializer.data)

# for services
@api_view(['GET', 'POST'])
def service_list(request):
  if request.method == 'GET':
    services = Service.objects.all()
    serializer = ServiceSerializer(services, many=True)
    return Response(serializer.data)

@api_view(["GET"])
def service_detail(request, pk):
    service = get_object_or_404(Service, id=pk)
    if request.method == 'GET':
        serializer = ServiceSerializer(service)
        return Response(serializer.data)
