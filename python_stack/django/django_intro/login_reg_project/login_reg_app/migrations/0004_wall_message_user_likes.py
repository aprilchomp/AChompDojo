# Generated by Django 2.2 on 2020-04-26 03:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('login_reg_app', '0003_comment'),
    ]

    operations = [
        migrations.AddField(
            model_name='wall_message',
            name='user_likes',
            field=models.ManyToManyField(related_name='liked_posts', to='login_reg_app.User'),
        ),
    ]
