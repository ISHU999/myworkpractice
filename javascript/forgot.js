(function (){
	var send=document.getElementById("send_password");

	function valid (username) {
		if(username==""){
			alert ("Username field cannot be empty!");
		}
		else{
			return true;
		}
	}

	send.addEventListener('click', function () {
		var username=document.getElementById("username").value;
		if(valid(username)){
			alert ("Password sent to your registered eMail address successfully!");
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