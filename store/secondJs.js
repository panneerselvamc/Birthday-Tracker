//var name2="";
/*function getBase64Image(img) {
  var canvas = document.createElement("canvas");
  canvas.width = img.width;
  canvas.height = img.height;
  var ctx = canvas.getContext("2d");
  ctx.drawImage(img, 0, 0);
  var dataURL = canvas.toDataURL("image/png");
  return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
}*/
document.getElementById("mobileError").style.display="none";
document.getElementById("nameError").style.display="none";
document.getElementById("password1Error").style.display="none";
//document.getElementById("password2Error").style.display= "none";
function namefunction(){
	var x = document.getElementById("nameError");
	if(document.getElementById("name").value==""){
		document.getElementById("name").style.borderColor = "red";
		x.style.display = "block";
	}
	else{
		document.getElementById("name").style.removeProperty('border');
		x.style.display = "none";
	}
}
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
function mobilefunction(){
	var x = document.getElementById("mobileError");
	if(/^([0-9]{10})$/.test(document.getElementById("mobile").value)==false){
		document.getElementById("mobile").style.borderColor = "red";
		x.style.display = "block";
	}
	else{
		document.getElementById("mobile").style.removeProperty('border');
		x.style.display = "none";
	}
}
function myfunction(){
  console.log("my js page");
  var name=document.getElementById("name").value;
  var dob=document.getElementById("dateOfBirth").value;
  var mob=document.getElementById("mobile").value;
  var cake=document.getElementById("cake").value;
  var color=document.getElementById("colours").value;
  var msg=document.getElementById("message").value;
  var password=document.getElementById("password").value;
  var rpassword=document.getElementById("confirmPassword").value;
	var file=document.getElementById("fileupload").files[0].name;
	var files=document.getElementById("fileupload").value;
	//svar base64 = getBase64Image(document.getElementById("fileupload"));
	//console.log(base64);
	console.log(files);
  if(name==""){
    alert("Enter your name");
    return;
  }
	if(mob==""){
    alert("Enter your mobilenumber");
		document.getElementById("mobile").style.borderColor = "red";
    return;
  }
  if((password!=rpassword)||(password=="")){
    alert("Check the password and repeat password");
    return;
  }
  var mydata={"name":name,"dob":dob,"mob":mob,"cake":cake,"color":color,"msg":msg,"password":password,"file":file};
  $.ajax({
    type:"POST",
    dataType:"json",
    url:"/requrl",
    contentType:"application/json;charset=utf-8",
    data:JSON.stringify(mydata),
    success:function(data){
      console.log(data);
      var details=JSON.parse(data.datastore);
      if(details==true)
      {
        console.log("iam true");
        window.location="http://localhost:8000/thirdpage.html?name="+name;
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
