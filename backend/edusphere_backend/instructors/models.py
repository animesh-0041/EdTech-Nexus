from django.db import models

class Instructor(models.Model):
    GENDER_CHOICES = [
        ('Male', 'Male'),
        ('Female', 'Female'),
        ('Other', 'Other')
    ]

    name = models.CharField(max_length=100)
    gender = models.CharField(max_length=10, choices=GENDER_CHOICES)
    date_of_birth = models.DateField()
    department = models.ForeignKey('Department', on_delete=models.SET_NULL, null=True)
    email = models.EmailField()
    contact_number = models.CharField(max_length=15)

class Department(models.Model):
    name = models.CharField(max_length=100)
    # ...other fields...

class Course(models.Model):
    course_code = models.CharField(max_length=10)
    instructor = models.ForeignKey(Instructor, on_delete=models.CASCADE)
    department = models.ForeignKey(Department, on_delete=models.CASCADE)
    # ...other fields...

# ...similarly define models for other entities...
