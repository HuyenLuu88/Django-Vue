from django.db import models

# Create your models here.
class Device(models.Model):
    name = models.CharField(max_length=50, verbose_name='Name', unique=True, blank=True, null=True)
    type = models.CharField(max_length=50, verbose_name='Type', blank=True, null=True)
    color = models.CharField(max_length=50, verbose_name='Color', blank=True, null=True)
    price = models.DecimalField(max_digits=8, verbose_name='price', decimal_places=2, blank=True, null=True)

    def __str__(self):
        return self.name
    
    class Meta:
        verbose_name = 'Device'
        verbose_name_plural = 'Devices'