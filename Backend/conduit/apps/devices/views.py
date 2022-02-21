from django.shortcuts import render
from rest_framework.generics import RetrieveUpdateAPIView
from rest_framework import serializers, status, viewsets
from rest_framework.exceptions import NotFound
from rest_framework.generics import RetrieveAPIView
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import generics
import logging

from .models import Device
from .serializers import DeviceSerializer

logger = logging.getLogger(__name__)


class AddDeviceAPIView(APIView):
    # Allow any user (authenticated or not) to hit this endpoint.
    permission_classes = (AllowAny,)
    serializer_class = DeviceSerializer

    def post(self, request):
        device = request.data.get('device', {})

        # The create serializer, validate serializer, save serializer pattern
        # below is common and you will see it a lot throughout this course and
        # your own work later on. Get familiar with it.

        serializer = self.serializer_class(data=device)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)

class GetDeviceListView(generics.ListCreateAPIView):
    permission_classes = (AllowAny,)
    queryset = Device.objects.all()
    serializer_class = DeviceSerializer

    def list(self, request):
        # Note the use of `get_queryset()` instead of `self.queryset`
        queryset = self.get_queryset()
        serializer = DeviceSerializer(queryset, many=True)
        return Response(serializer.data)
class GetDeviceView(RetrieveAPIView):
    permission_classes = (AllowAny,)
    serializer_class = DeviceSerializer
    queryset = Device.objects.all()

    def retrieve(self, request, id, *args, **kwargs):
        try:
            device = Device.objects.get(id=id)
        except device.DoesNotExist:
            raise NotFound('A device with this id does not exist.')

        serializer = self.serializer_class(device, context={
            'request': request
        })

        return Response(serializer.data, status=status.HTTP_200_OK)
    def delete(self, request, id):
        try:
            device = Device.objects.get(id=id)
            device.delete()        
            queryset = self.get_queryset()    
        except device.DoesNotExist:
            raise NotFound('A device with this id does not exist.')

        serializer = DeviceSerializer(queryset, many=True)
        return Response(serializer.data)
    