from django.db import models

# Create your models here.
class Book(models.Model):
    title = models.CharField(max_length=40)
    autor = models.CharField(max_length=100)
    release_year = models.IntegerField()

    def __srt__(self):
        return self.title

# {"title" : "You Don’t Know JS: Scope & Closures", "autor" : "Kyle Simpson", "release_year": 2014}