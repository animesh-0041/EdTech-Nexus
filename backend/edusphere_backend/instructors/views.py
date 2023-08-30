# instructors/views.py
from rest_framework import generics
from .models import Instructor
from .serializers import InstructorSerializer

class InstructorListCreateView(generics.ListCreateAPIView):
    queryset = Instructor.objects.all()
    serializer_class = InstructorSerializer
