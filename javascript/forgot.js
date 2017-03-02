(function (){

	var send=document.getElementById("send_password");
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
		let url="http://localhost:3000/supervisor";
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

			var hasMatch =false;

			for (var index = 0; index < data.length; ++index) {

 			var user = data[index];

 			if(user.empid == username1){
   			hasMatch = true;
   			mail=user.email;
   			console.log(mail);
   			break;
 			}
			}
			console.log(hasMatch);
			document.getElementById("username").value="";
			if(hasMatch){

				var text="";
                var len = 6;
                charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
                for (var i = 0; i < len; i++) {
                    text += charset.charAt(Math.floor((Math.random() * charset.length)));
                }
                console.log("random password :"+text);
			emailjs.send("gmail","password",{"email":mail, "name":user.name, "message":"<b>"+text+"</b>"});
			redirect();
			alert ("Password sent to your registered eMail address successfully!");
			
			}
			else{
				alert("Wrong Credentials!");
			}
   	    }
	}

	function redirect(){
		var timecount = 5;
		var text=document.getElementById("recovery");
  			text.innerHTML="You will be redirected to login page in "+timecount+" seconds" ;
  			text.setAttribute("style","color: #fff");
			setInterval(function(){
    		timecount--;
  			
  			console.log('inside redirect')
  			text.innerHTML="You will be redirected to login page in "+timecount+" seconds" ;
  			text.setAttribute("style","color: #fff");
    		if (timecount == 1) {
       			 window.location = 'index.html'; 
    		}},1000);
	}
	function valid (username) {

		if(username==""){

			console.log("Null value");
			document.getElementById("username").focus();
			return false;

		}
		else{

			return true;

		}

	}


	send.addEventListener('click', function () {

		
	var username=document.getElementById("username").value;
		if(valid(username)){

			
        	console.log(username);
            
            load();

       

		}
		return false;

	});
	

})();