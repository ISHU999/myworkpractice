(function (){
	var send=document.getElementById("send_password");
	send.addEventListener('click', function () {
		var username=document.getElementById("username").value;
		if(true/*valid(username)*/){
			alert ("Login successfully");
			//window.location = "success.html"; // Redirecting to other page.
			console.log("success");
			return false;
		}
		else{
			alert ("Wrong Credentials");
			return false;
		}
	});

})();