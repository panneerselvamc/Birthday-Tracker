# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from PIL import Image
from django.db import models

# Create your models here.
class Profile(models.Model):
    fullname = models.CharField(max_length=200)
    dob = models.CharField(max_length=200)
    mobile = models.CharField(max_length=200)
    favcake=models.CharField(max_length=200)
    favcolor=models.CharField(max_length=200)
    about=models.CharField(max_length=200)
    password=models.CharField(max_length=200)
    db=models.CharField(max_length=200)
    image=models.FileField(upload_to='images',blank=True)
    dobb=models.CharField(max_length=200)
class Wish(models.Model):
    wishedto = models.CharField(max_length=200)
    wishedby = models.CharField(max_length=200)
    wishing = models.CharField(max_length=200)
