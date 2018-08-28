from django.db import models


class Resume(models.Model):

    name = models.CharField(max_length=400, blank=True)
    main = models.ForeignKey('Main', on_delete=models.CASCADE, null=True)
    social = models.ManyToManyField('Social')
    education = models.ManyToManyField('Education')
    works = models.ManyToManyField('Work')
    projects = models.ManyToManyField("Project")
    testimonials = models.ManyToManyField("Testimonial")


    def __str__(self):
        return self.name
        
        

class Address(models.Model):

    street = models.CharField(max_length=800)
    city = models.CharField(max_length=800)
    state = models.CharField(max_length=800)  
    zip_code = models.FloatField((""), null=True)  
    

    class Meta:
        verbose_name = ("Address")

    def __str__(self):
        return self.city

    def get_absolute_url(self):
        return reverse("Address_detail", kwargs={"pk": self.pk})

class Main(models.Model):
    
    name = models.CharField(max_length=100)
    occupation = models.CharField(max_length=300)
    description = models.TextField()
    image = models.ImageField((""), upload_to=None, height_field=None, width_field=None, max_length=None, blank=True)
    bio = models.TextField()
    email = models.EmailField((""), max_length=254)  
    phone = models.CharField(max_length=100)
    address = models.ForeignKey('Address', on_delete=models.CASCADE, null=True)

    def __str__(self):
        return self.name

class Social(models.Model):
   
    name = models.CharField(max_length=800)   
    url = models.URLField((""), max_length=200)
    className = models.CharField(max_length=800)        

    class Meta:
        verbose_name = ("Social")
        verbose_name_plural = ("Socials")

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse("Social_detail", kwargs={"pk": self.pk})

class Education(models.Model):

    school = models.CharField(max_length=800)
    degree = models.CharField(max_length=800)
    graduted = models.CharField(max_length=800)
    description = models.CharField(max_length=800)

    class Meta:
        verbose_name = ("Education")

    def __str__(self):
        return self.school

    def get_absolute_url(self):
        return reverse("Education_detail", kwargs={"pk": self.pk})

class Work(models.Model):

    company = models.CharField(max_length=800)    
    title = models.CharField(max_length=800)    
    years = models.CharField(max_length=800)    
    description = models.CharField(max_length=800)    

    class Meta:
        verbose_name = ("Work")

    def __str__(self):
        return self.company

    def get_absolute_url(self):
        return reverse("Work_detail", kwargs={"pk": self.pk})

class Skill(models.Model):

    name = models.CharField(max_length=800)
    level = models.DecimalField((""), max_digits=5, decimal_places=2)

    class Meta:
        verbose_name = ("Skill")
        verbose_name_plural = ("Skills")

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse("Skill_detail", kwargs={"pk": self.pk})

class Project(models.Model):
       
    title = models.CharField(max_length=800)
    description = models.CharField(max_length=800)
    category = models.CharField(max_length=800)    
    tags = models.CharField(max_length=800)    
    image = models.ImageField((""), upload_to=None, height_field=None, width_field=None, max_length=None, blank=True)
    url = models.URLField((""), max_length=200)
    modal = models.CharField(max_length=800)    

    class Meta:
        verbose_name = ("Project")
        verbose_name_plural = ("Projects")

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse("Project_detail", kwargs={"pk": self.pk})

class Testimonial(models.Model):

    text = models.CharField(max_length=800)
    user = models.CharField(max_length=800)
    
    class Meta:
        verbose_name = ("Testimonial")
        verbose_name_plural = ("Testimonials")

    def __str__(self):
        return self.user

    def get_absolute_url(self):
        return reverse("Testimonial_detail", kwargs={"pk": self.pk})
