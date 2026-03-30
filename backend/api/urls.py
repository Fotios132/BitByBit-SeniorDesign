from django.urls import path
from .views import hello
from . import views
from .views import send_order_email

urlpatterns = [
    path('helper/', hello, ),
    path('com.gamestart/v1/home/userauthentication/login/<str:user_identifier>', views.login, name='login'),
    path("com.gamestart/v1/home/userauthentication/register/<str:user_info>",views.register, name="register",),
    path("com.gamestart/v1/order/send", send_order_email),
]

