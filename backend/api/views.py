from django.shortcuts import render
import json
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

# import the checker from the same package
from .simple_account_checker import check_credentials

def hello(request):
    return JsonResponse({"message": "Hello World"})

@csrf_exempt
def login(request, user_identifier):
    # robust split: accept "~email~password" or "email~password"
    parts = [p for p in user_identifier.split("~") if p]
    if len(parts) != 2:
        return JsonResponse({"error": "bad format, expected '~email~password' or 'email~password'"}, status=400)

    email, password = parts
    print(f"Username: {email}, Password: {password}")

    try:
        authenticated = check_credentials(email, password)
        if authenticated:
            print(f"User {email} authenticated successfully.")
        else:
            print(f"Authentication failed for user {email}.")
    except Exception as e:
        return JsonResponse({"error": "checker error", "details": str(e)}, status=500)

    return JsonResponse({"email": email, "authenticated": bool(authenticated)})



