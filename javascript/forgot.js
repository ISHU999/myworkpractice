(function (){

	var send=document.getElementById("send_password");
	console.log("ok");
	var mail;
	var xhr;

	function initRequest(){
		if(window.XMLHttpRequest){
			xhr=new XMLHttpRequest();
		}
		else if(window.ActiveXObject){
			xhr=new ActiveXObject("Microsoft.XMLHTTP");
		}
		console.log(xhr);
	}


	function load(){
		initRequest();
		let url="http://localhost:3000/supervisee";
		xhr.open("GET",url,true);
		xhr.onreadystatechange=processRequest;
		xhr.send(null);
	}

	function processRequest(){
		let username1=document.getElementById("username").value;
		if(xhr.readyState == 4 && xhr.status == 200){
			var response= xhr.responseText;
			var data=JSON.parse(response);
			console.log(username1+" from prqst");
			// element.innerHTML=data.main.temp+"&degF";

			var hasMatch =false;

			for (var index = 0; index < data.length; ++index) {

 			var user = data[index];

 			if(user.name == username1){
   			hasMatch = true;
   			mail=user.supervisorid;
   			console.log(mail);
   			break;
 			}
			}
			username="";
			//emailjs.send("gmail","new_password",{"email":mail});
			alert ("Password sent to your registered eMail address successfully!");
   	    }
	}


	function valid () {

		if(username==""){

			console.log("button pressed"+username);
			//alert ("Username field cannot be empty!");
			document.getElementById("username").focus();
			return false;

		}
		else{

			return true;

		}

	}


	send.addEventListener('click', function () {

		
	var username=document.getElementById("username").value;
		if(valid()){

			
        	console.log(username);
			//window.location = "index.html"; // Redirecting to login page
            
            load();

            return false;

		}
		else{

			//alert ("Wrong Credentials");
			return false;

		}

	});

})();