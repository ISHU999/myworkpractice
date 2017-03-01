(function (){

	var send=document.getElementById("send_password");

	function valid (username) {

		if(username==""){

			//alert ("Username field cannot be empty!");
			document.getElementById("username").focus();

		}
		else{

			return true;

		}

	}


	send.addEventListener('click', function () {

		var username=document.getElementById("username").value;
		if(valid(username)){

			alert ("Password sent to your registered eMail address successfully!");
			window.location = "index.html"; // Redirecting to login page
        	console.log("Mail sent");
            /*var email = "bharat.kapoor1010@gmail.com";
            var subject = ('My permanent subject line');
            var body = ('My permanent body contents');
            document.write('<a href="mailto:' + email + '?subject=' +subject+ '&body=' +body+ '">' + 'Click here to send email as well' + '<'+'/a>');*/
			return false;

		}
		else{

			//alert ("Wrong Credentials");
			return false;

		}

	});

})();