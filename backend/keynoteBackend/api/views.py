from rest_framework import viewsets
from .models import UserProfile
from .serializers import UserProfileSerializer
from django.http import JsonResponse
from django.contrib.auth import authenticate

class UserProfileViewSet(viewsets.ModelViewSet):
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer

def login_view(request):
    if request.method == 'POST':
        email = request.POST.get('email')
        password = request.POST.get('password')

        user = authenticate(request, username=email, password=password)

        if user is not None:
            return JsonResponse({'message': 'Login successful'})
        else:
            return JsonResponse({'message': 'Wrong credentials'}, status=401)

    return JsonResponse({'message': 'Method not allowed'}, status=405)