from django.db import models
import os


class Project(models.Model):
  title = models.CharField(max_length=255)
  description = models.TextField()
  date = models.DateField()
  client = models.CharField(max_length=255)
  image = models.ImageField(upload_to="pro_img/")
  location = models.CharField(max_length=255)

  def save(self, *args, **kwargs):
    # If the instance is new, save it to generate the primary key (ID)
    if not self.pk:
      saved_image = self.image
      self.image = None  # Temporarily set image to None
      super(Project, self).save(*args, **kwargs)
      self.image = saved_image

      # Ensure the image name is based on the instance ID and the correct directory
      self.image.name = f"{self.pk}{os.path.splitext(self.image.name)[1]}"
      super(Project, self).save(*args, **kwargs)

    else:
      self.image.name = f"pro_img/{self.pk}{os.path.splitext(self.image.name)[1]}"
      super(Project, self).save(*args, **kwargs)

  def __str__(self):
      return self.title


class Service(models.Model):
  title = models.CharField(max_length=255)
  description = models.TextField()
  image = models.ImageField(upload_to="service_img/")

  def save(self, *args, **kwargs):
    # If the instance is new, save it to generate the primary key (ID)
    if not self.pk:
      saved_image = self.image
      self.image = None  # Temporarily set image to None
      super(Service, self).save(*args, **kwargs)
      self.image = saved_image

      # Ensure the image name is based on the instance ID and the correct directory
      self.image.name = f"{self.pk}{os.path.splitext(self.image.name)[1]}"
      super(Service, self).save(*args, **kwargs)

    else:
      self.image.name = f"service_img/{self.pk}{os.path.splitext(self.image.name)[1]}"
      super(Service, self).save(*args, **kwargs)

  def __str__(self):
      return self.title
