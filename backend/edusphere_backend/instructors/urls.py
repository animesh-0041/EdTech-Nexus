# instructors/urls.py
from django.urls import path
from .views import InstructorListCreateView

urlpatterns = [
    path('instructors/', InstructorListCreateView.as_view(), name='instructor-list-create'),
    # ...other URLs...
]
