document.getElementById("nameError").style.display="none";
document.getElementById("password1Error").style.display="none";
//document.getElementById("validationError").style.display="none";
function nameFunction(){
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
function myfunction(){
  console.log("my js page");
  var name=document.getElementById("name").value;
  var password=document.getElementById("password").value;
  var mydata={"name":name,"password":password};
  if(name==""){
		document.getElementById("name").style.borderColor = "red";
		document.getElementById("nameError").style.display= "block";
		return;
	}
	if(password==""){
		document.getElementById("password").style.borderColor = "red";
		document.getElementById("password1Error").style.display= "block";
		return;
	}
  $.ajax({
    type:"POST",
    dataType:"json",
    url:"/get1",
    contentType:"application/json;charset=utf-8",
    data:JSON.stringify(mydata),
    success:function(data){
      console.log(data);
      var details=JSON.parse(data.datacheck);
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
