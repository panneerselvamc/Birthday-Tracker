# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.shortcuts import get_object_or_404, render
from django.shortcuts import render_to_response
from django.views.decorators.csrf import csrf_exempt,csrf_protect
from django.forms.models import model_to_dict
from django.http import JsonResponse
from rest_framework.decorators import api_view
from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.response import Response
from rest_framework import permissions
from blog.models import Profile
from blog.models import Wish
import json
import datetime
now = datetime.datetime.now()
@api_view(['POST'])
def updatewish(request):
    getName=json.loads(request.body)
    wto= getName["wishedto"]
    wing= getName["wishing"]
    wby= getName["wishedby"]
    new_object = Wish()
    new_object.wishedto=wto
    new_object.wishing=wing
    new_object.wishedby=wby
    new_object.save()
    #new_object=list(Profile.objects.filter(db=926).values())
    #v = json.dumps(new_object)
    #print v
    return Response({"datastore":"Saved Sucessfully"})
@api_view(['POST'])
def dob(request):
    getName=json.loads(request.body)
    name= getName["name"]
    d= now.day
    y=now.year
    m=now.month
    a="-"
    ts=str(y)
    if m==1 or m==2 or m==3 or m==4 or m==5 or m==6 or m==7 or m==8 or m==9:
        a2=str(0)+str(m)
    else:
        a2=str(m)
    if d==1 or d==2 or d==3 or d==4 or d==5 or d==6 or d==7 or d==8 or d==9:
        a1=str(0)+str(d)
    else:
        a1=str(d)
    a3=str(y)
    st=a3+a+a2+a+a1
    ts=a2+a1
    dbint=int(ts)
    new_object=list(Profile.objects.filter(db=dbint).values())
    v = json.dumps(new_object)
    return Response({"datastore":v})
@api_view(['POST'])
def dupdate(request):
    getName=json.loads(request.body)
    name=getName["name"]
    new_object=Profile.objects.get(fullname=name)
    comment=Comment(new_object.fullname,new_object.dob,new_object.mobile,new_object.favcake,new_object.favcolor,new_object.about,new_object.password,new_object.db,new_object.dobb)
    s = json.dumps(comment.__dict__)
    return Response({"datastore":s})
@api_view(['POST'])
def storeupdate(request):
    getName=json.loads(request.body)
    name=getName["name"]
    colour=getName["colour"]
    cake=getName["cake"]
    password=getName["password"]
    message=getName["message"]
    object=Profile.objects.get(fullname=name)
    object.colour=colour
    object.cake=cake
    object.password=password
    object.message=message
    object.save()
    return Response({"datastore":True})
@api_view(['POST'])
def wdata(request):
    getName=json.loads(request.body)
    name= getName["name"]
    new_object=list(Wish.objects.filter(wishedto=name).values())
    v = json.dumps(new_object)
    return Response({"datastore":v})
def second(request):
    return render(request,'second.html')
def fourthpage(request):
    return render(request,'fourthPage.html')
@api_view(['POST'])
def requrl(request):
    getData=request.body
    getName=json.loads(getData)
    name=getName["name"]
    dob=getName["dob"]
    mob=getName["mob"]
    cake=getName["cake"]
    color=getName["color"]
    msg=getName["msg"]
    password=getName["password"]
    file=getName["file"]
    a,b,c=dob.split("-")
    x=b+c
    intt=int(x)
    ob = myfunc(str(a)+"-"+str(b))
    var= ob(c)
    new_object = Profile()
    new_object.fullname = name
    new_object.dob=dob
    new_object.mobile=mob
    new_object.favcake=cake
    new_object.favcolor=color
    new_object.about=msg
    new_object.password=password
    new_object.image=file
    new_object.dobb=var
    new_object.db=intt
    new_object.save()
    return Response({"datastore":True})
def myfunc(n):
    x,y=n.split("-")
    return lambda a : str(a)+"-"+str(y)+"-"+str(x)
@api_view(['POST'])
def retrive(request):
    getData=request.body
    print getData
    getName=json.loads(getData)
    name=getName["name"]
    password=getName["password"]
    print "iam first page"
    try:
        new_object=Profile.objects.get(fullname=name,password=password)
        comment=Comment(new_object.fullname,new_object.dob,new_object.mobile,new_object.favcake,new_object.favcolor,new_object.about,new_object.password,new_object.db,new_object.dobb)
        s = json.dumps(comment.__dict__)
        #print len(s)
        datacheck=True
    except:
        datacheck=False
    return Response({"datacheck":datacheck})
class Comment(object):
    def __init__(self, fullname, dob, mobile,favcake,favcolor,about,password,db,dobb):
        self.fullname = fullname
        self.dob = dob
        self.mobile = mobile
        self.favcake = favcake
        self.favcolor = favcolor
        self.about = about
        self.password = password
        self.db = db
        self.dobb = dobb
def home(request):
    return render(request,'home.html')
def thirdpage(request):
    return render(request,'thirdpage.html')
def fifthpage(request):
    return render(request,'fifthpage.html')
