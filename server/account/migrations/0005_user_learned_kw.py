# Generated by Django 3.1.7 on 2021-03-31 04:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('klass', '0001_initial'),
        ('account', '0004_remove_user_learned_kw'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='learned_kw',
            field=models.ManyToManyField(related_name='learned_user', to='klass.Kw'),
        ),
    ]
