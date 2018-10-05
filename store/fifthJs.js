document.getElementById("password1Error").style.display="none";
document.getElementById("password2Error").style.display="none";
var name = window.location.href;
var name1=name.split("?");
var name2=name1[1].split("=");
var name3=name2[1];
console.log(name3);
document.getElementById("user").innerHTML="Welcome "+name3+" !!!";
var mydata={"name":name3};
$.ajax({
  type:"POST",
  dataType:"json",
  url:"/requpdate",
  contentType:"application/json;charset=utf-8",
  data:JSON.stringify(mydata),
  success:function(data){
    console.log(data);
    var details=JSON.parse(data.datastore);
    document.getElementById("name").value=details.fullname;
    document.getElementById("dateOfBirth").value=details.dobb;
    document.getElementById("mobile").value=details.mobile;
    /*if(details==true)
    {
      console.log("iam true");
    }
    else {
        console.log("iam false");
    }*/
  //  console.log(details);
  },
  error:function(e){
    console.log(e);
  }
})
function password1Function(){
	var x = document.getElementById("password1Error");
	if(document.getElementById("password").value==""){
		document.getElementById("password").style.borderColor = "red";
		x.style.display = "block";
	}
	else{
		document.getElementById("password").style.removeProperty('border');
		x.style.display = "none";
	}
}
function password2Function(){
	var x = document.getElementById("password2Error");
	if(document.getElementById("confirmPassword").value==""){
		document.getElementById("confirmPassword").style.borderColor = "red";
		x.style.display = "block";
	}
	else{
		document.getElementById("confirmPassword").style.removeProperty('border');
		x.style.display = "none";
	}
}
function myfunction(){
  var name=document.getElementById("name").value;
  var dob=document.getElementById("dateOfBirth").value;
  var mob=document.getElementById("mobile").value;
  var cake=document.getElementById("cake").value;
  var colour=document.getElementById("colours").value;
  var message=document.getElementById("message").value;
  var password=document.getElementById("password").value;
  var confirmPassword=document.getElementById("confirmPassword").value;
  if((password!=confirmPassword)||(password.length<4&&password.length>0)||(confirmPassword.length<4&&confirmPassword.length>0)){
    document.getElementById("password").style.borderColor = "red";
    document.getElementById("confirmPassword").style.borderColor = "red";
    return;
  }
  if(message=="")
  {
    document.getElementById("message").style.borderColor = "red";
    return;
  }
  if(password=="")
  {
    document.getElementById("password").style.borderColor = "red";
    return;
  }
  if(confirmPassword=="")
  {
    document.getElementById("confirmPassword").style.borderColor = "red";
    return;
  }
  var mydata={"name":name,"cake":cake,"colour":colour,"message":message,"password":password};
  $.ajax({
    type:"POST",
    dataType:"json",
    url:"/storeupdate",
    contentType:"application/json;charset=utf-8",
    data:JSON.stringify(mydata),
    success:function(data){
      console.log(data);
      var details=JSON.parse(data.datastore);
      if(details==true)
      {
        window.location.href="http://localhost:8000/home";
      }
      else {
          console.log("iam false");
      }
    //  console.log(details);
    },
    error:function(e){
      console.log(e);
    }
  })
}
