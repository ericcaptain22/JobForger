# Generated by Django 5.1.6 on 2025-03-01 16:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('jobs', '0002_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='jobpost',
            name='id',
            field=models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
    ]
