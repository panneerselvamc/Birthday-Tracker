from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from django.conf.urls import url
from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static
from views import home,retrive,second,requrl,thirdpage,wdata,fourthpage,dob,updatewish,fifthpage,dupdate,storeupdate

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^fourthPage', fourthpage),
    url(r'^dateOfBirth',dob,name="dob"),
    url(r'^requpdate',dupdate,name="dupdate"),
    url(r'^storeupdate',storeupdate,name="storeupdate"),
    url(r'^updateWish',updatewish,name="updatewish"),
    url(r'^get1',retrive,name="retrive"),
    url(r'^data', wdata,name="wdata"),
    url(r'^second', second),
    url(r'^thirdpage', thirdpage),
    url(r'^req', requrl,name="requrl"),
    url(r'^home', home),
    url(r'^fifthPage', fifthpage),
]
urlpatterns+=staticfiles_urlpatterns()

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
