# ...existing code...
from django.shortcuts import render

# Create your views here.
from django.http import JsonResponse
from GameStart_B.simple_account_checker import check_credentials

def hello(request):
    return JsonResponse({"message": "Hello World"})

def login(request, user_identifier):
    # accept "~bob@gmail.com~bob123" or "bob@gmail.com~bob123"
    parts = [p for p in user_identifier.split("~") if p]  # removes empty strings
    if len(parts) != 2:
        return JsonResponse({"error": "bad format, expected '~email~password' or 'email~password'"}, status=400)

    email, password = parts
    authenticated = check_credentials(email, password)
    # prints like "~bob@gmail.com~bob123"
    print(f"~{email}~{password}")
    return JsonResponse({"email": email, "authenticated": authenticated})
# ...existing code...



