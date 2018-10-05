var name = window.location.href;
var name1=name.split("?");
var name2=name1[1].split("=");
var name3=name2[1];
document.getElementById("name").innerHTML="Welcome "+name3+" !!!";
var event=1;
function generate_table() {
	if(event==1){
		event++;
    var data={"name":name3};
		$.ajax({
			type: 'POST',
			dataType: 'json',
      data:JSON.stringify(data),
			contentType:'application/json',
			url: "dateOfBirth",
			success: function(data){
        var details=JSON.parse(data.datastore);
        console.log(details);
				myfunction(details);
			},
			error: function(xhr, textStatus, errorThrown){
				alert('request failed'+errorThrown);
			}
		});
		function myfunction(data){
			var body = document.getElementsByTagName("body")[0];
			var table = document.createElement("table");
			var tableBody = document.createElement("tbody");
			for (var i = -1; i < data.length ; i++) {
				var today=new Date();
				var month=today.getMonth()+1;
				var date=today.getDate();
				if(i!=-1){
					if(data[i].fullname==name3){
						continue;
					}
				}
				var row = document.createElement("tr");
				for (var j = 0; j < 3; j++) {
					var cell = document.createElement("td");
					var cellText;
					var button=document.createElement("input");
					button.type="button";
					button.value="SEND";
					button.setAttribute("id","button/"+i);
					button.addEventListener("click",sendButton);
					if(j==0){
						if(i==-1){
							cellText = document.createTextNode("Name");
						}
						else{
							cellText = document.createTextNode(data[i].fullname);
						}
					}
					else{
						if(i==-1){
							cellText = document.createTextNode("D.O.B");
						}
						else{
							cellText = document.createTextNode(data[i].dob);
						}
					}
					if(j==2){
						if(i==-1){
							cellText =document.createTextNode("Wish here!!!");
						}
						else{
							cellText = document.createElement("input");
							cellText.type="text";
							cellText.maxLength="100";
							cellText.placeholder="Write a wish here...";
							cellText.size="60";
							cellText.setAttribute("id","input/"+i);
						}
					}
					cell.appendChild(cellText);
					if(i==-1){
						cell.align="center";
					}
					if(j==2&&i!=-1){
						cell.appendChild(button);
					}
					cell.height="30px;";
					row.appendChild(cell);

				}
				tableBody.appendChild(row);
			}
			table.appendChild(tableBody);
			body.appendChild(table);
			table.setAttribute("border", "1");
			table.setAttribute("align","center");
			table.style.background="skyblue";

			function sendButton(){
				var buttonId=this.id.split("/");
				var inputId="input/"+buttonId[1];
				var wishInputMessage=document.getElementById(inputId).value;
				var wishInputName=data[buttonId[1]].fullname;
				console.log(wishInputName);
				var wish={"wishedto":wishInputName,"wishing":wishInputMessage,"wishedby":name3};
				console.log(wish);
				$.ajax({
					type: 'POST',
					dataType: 'json',
					contentType:'application/json;charset=utf-8',
					url: "/updateWish",
					data:JSON.stringify(wish),
					success: function(response){
            var details=JSON.parse(data.datastore);
            console.log(details);
    				alert("Saved your wish successfully!!!");
					},
					error: function(xhr, textStatus, errorThrown){

						alert("Saved your wish successfully!!!");
					}
				});
			}
		}
	}
}

function reloadPage(){
	window.location.href="http://localhost:8000/fourthPage.html?name="+name3;
}
function firstPage(){
	alert("You will be logged out!!!");
	window.location.href="http://localhost:8000/home";
}
function fifthPage(){
	window.location.href="http://localhost:8000/fifthPage.html?name="+name3;
}
function thirdPage(){
	window.location.href="http://localhost:8000/thirdpage.html?name="+name3;
}
