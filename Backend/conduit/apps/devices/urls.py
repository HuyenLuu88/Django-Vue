from django.urls import path, include

from .views import *

urlpatterns = [
    path('deviceList/', GetDeviceListView.as_view()),
    path('device/add', AddDeviceAPIView.as_view()),
    path('device/<int:id>/', GetDeviceView.as_view())
]