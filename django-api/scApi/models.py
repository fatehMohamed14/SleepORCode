from django.db import models

class Article(models.Model):
    title = models.CharField(max_length=100)
    description = models.CharField(max_length=500)
    author = models.CharField(max_length=500)
    content = models.CharField(max_length=500)
    publishedAt = models.DateField(null = True, blank= True)
    url = models.URLField()
    urlToImage = models.FileField(blank= False, null= False)

    def __str__(self):
        return self.title

