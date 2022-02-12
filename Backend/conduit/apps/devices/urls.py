from django.urls import path, include
from rest_framework.routers import DefaultRouter

from .views import *

urlpatterns = [
    path('devices', DeviceAPIView.as_view()),
    path('device/add', AddDeviceAPIView.as_view())
]