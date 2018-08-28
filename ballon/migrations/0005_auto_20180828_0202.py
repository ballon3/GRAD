# Generated by Django 2.1 on 2018-08-28 09:02

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('ballon', '0004_auto_20180828_0041'),
    ]

    operations = [
        migrations.AddField(
            model_name='main',
            name='address',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='ballon.Address'),
        ),
        migrations.AlterField(
            model_name='address',
            name='zip_code',
            field=models.FloatField(null=True, verbose_name=''),
        ),
        migrations.AlterField(
            model_name='main',
            name='image',
            field=models.ImageField(blank=True, upload_to=None, verbose_name=''),
        ),
        migrations.AlterField(
            model_name='project',
            name='image',
            field=models.ImageField(blank=True, upload_to=None, verbose_name=''),
        ),
    ]