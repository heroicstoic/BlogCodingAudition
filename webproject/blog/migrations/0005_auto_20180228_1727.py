# Generated by Django 2.0.2 on 2018-02-28 17:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0004_auto_20180228_1726'),
    ]

    operations = [
        migrations.AlterField(
            model_name='blog',
            name='datePublished',
            field=models.DateTimeField(auto_now=True, help_text='Date blog published'),
        ),
    ]
