var name = window.location.href;
var name1=name.split("?");
var name2=name1[1].split("=");
var name3=name2[1];
console.log(name3);
document.getElementById("user").innerHTML="Welcome "+name3+" !!!";
var event=1;
function showWishes(){
	if(event==1){
		event++;
    var data={"name":name3};
		$.ajax({
			type: 'POST',
			dataType: 'json',
			contentType:'application/json;charset=utf-8',
      data:JSON.stringify(data),
			url: "/data",
			success: function(data, textStatus ){
				console.log(data);
        var details=JSON.parse(data.datastore);
        console.log(details);
				myfunction(details);
				return data;
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
				var row = document.createElement("tr");
				for (var j = 0; j < 2; j++) {
					var cell = document.createElement("td");
					var cellText;
					var button=document.createElement("input");
					button.type="button";
					button.value="SEND";
					button.setAttribute("id","button/"+i);
					//button.addEventListener("click",sendButton);
					if(j==0){
						if(i==-1){
							cellText = document.createTextNode("Wisher");
						}
						else{
							cellText = document.createTextNode(data[i].wishedby);
						}
					}
					else{
						if(i==-1){
							cellText = document.createTextNode("Wish");
						}
						else{
							cellText = document.createTextNode(data[i].wishing);
						}
					}
					if(j==2){
						if(i==-1){
							cellText = document.createTextNode("Reply");
						}
						else{
							cellText = document.createElement("input");
							cellText.type="text";
							cellText.maxLength="100";
							cellText.placeholder="Leave a reply here...";
							cellText.size="80";
							cellText.setAttribute("id","input/"+i);
						}
					}
					cell.appendChild(cellText);
					if(j==2&&i!=-1){
						cell.appendChild(button);
					}
					cell.height="30px;";
          cell.width="200px;";
					if(i==-1){
						cell.align="center";
					}
					row.appendChild(cell);

				}
				tableBody.appendChild(row);
			}
			table.appendChild(tableBody);
			body.appendChild(table);
			table.setAttribute("border", "1");
			table.setAttribute("align","center");
			table.style.background="skyblue";
		}
	}
}
function nextPage(){
	window.location.href="http://localhost:8000/fourthPage.html?name="+name3;
}
function firstPage(){
	alert("You will be logged out!!!");
	window.location.href="http://localhost:8000/home";
}
function thirdPage(){
	window.location.href="http://localhost:8000/thirdpage.html?name="+name3;
}
function fifthPage(){
	window.location.href="http://localhost:8000/fifthPage.html?name="+name3;
}
