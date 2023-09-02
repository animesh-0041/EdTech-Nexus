# courses/urls.py
from django.urls import path
from .views import CourseCreateAPIView, CourseListAPIView

urlpatterns = [
    path('create/', CourseCreateAPIView.as_view(), name='course-create'),
    path('', CourseListAPIView.as_view(), name='course-list'),
]
