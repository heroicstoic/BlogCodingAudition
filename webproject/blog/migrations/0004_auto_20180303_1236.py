# Generated by Django 2.0.2 on 2018-03-03 18:36

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0003_auto_20180302_2212'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='blog',
            options={'ordering': ['-datePublished', 'title', 'content', 'op']},
        ),
    ]
