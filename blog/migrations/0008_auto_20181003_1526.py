# -*- coding: utf-8 -*-
# Generated by Django 1.11.15 on 2018-10-03 09:56
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0007_profile_image'),
    ]

    operations = [
        migrations.AddField(
            model_name='profile',
            name='dobb',
            field=models.CharField(default=-2025, max_length=200),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='profile',
            name='image',
            field=models.FileField(blank=True, upload_to='images'),
        ),
    ]
