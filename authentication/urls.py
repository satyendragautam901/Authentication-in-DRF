"""
URL configuration for authentication project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path,include
from rest_framework.authtoken.views import obtain_auth_token
from tokenauth.GenerateCustomToken import CustomToken



urlpatterns = [
    path('admin/', admin.site.urls),
    path('basic-auth/', include('basicauth.urls')),
    path('session-auth/', include('sessionauth.urls')),
    # path('auth/', include('rest_framework.urls')), #this is basically used to Basic and Session auth

    # generate token using api end points
    path('api-token-auth/', obtain_auth_token), # by hitting this url endpoint with username and password token generated'
    path('generate-token/', CustomToken.as_view()), # this is custom token generator 

    path('token-auth/', include('tokenauth.urls')), # this api end points for token authentication practise
]
