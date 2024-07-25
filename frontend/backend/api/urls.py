from django.urls import path
from . import views

urlpatterns = [
  path('api/project/', views.project_list),
  path('api/project/<int:pk>/', views.project_detail),
  path('api/service/', views.service_list),
  path('api/service/<int:pk>/', views.service_detail)
]
