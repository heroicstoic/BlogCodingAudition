# Generated by Django 2.0.2 on 2018-03-02 22:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0002_auto_20180302_2027'),
    ]

    operations = [
        migrations.AlterField(
            model_name='blog',
            name='title',
            field=models.CharField(help_text='Title of the blog', max_length=256),
        ),
    ]
