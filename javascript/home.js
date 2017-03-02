
(function(){

/* Initialize XHR Object */
	var xhr;

	function initRequest(){

		if(window.XMLHttpRequest)
		{
			xhr=new XMLHttpRequest();
		}
		else if(window.ActiveXObject)
		{
			xhr=new ActiveXObject("Microsoft.XMLHTTP");
		}
	}

/* Make Ajax Call */

	function load(){
		initRequest();

		let url = "../database/supervisee.json";

		xhr.open("GET", url, true);
		xhr.setRequestHeader('Content-Type', 
		    		'application/json');
		xhr.onreadystatechange=processResponse;
		xhr.send(null);
	}

/* Call Back fucntion */
	function processResponse(){
var division="";
		if(xhr.readyState==4 && xhr.status==200)
		{
			var element = document.getElementById("placeholder");
			var response=xhr.responseText;
			var text=JSON.parse(response);
			console.log(text.supervisee[0].name);
			
			for(let i=0;i<text.supervisee.length;i++)
			{
				if(i%2==0)
				{
					division+="<div class='supervisee_details skill-item-Even'><div class='user_details'>"+"image"+"</div><div class='user_details'>"+text.supervisee[i].empid+"</div><div class='user_details'>"+text.supervisee[i].name+"</div><div class='user_details'>"+text.supervisee[i].role+"</div><div class='user_details'><a href='#'>Edit</a> &nbsp <a href='#'>Delete</a></div></div>";
				}
				else
				{
					division+="<div class='supervisee_details skill-item-Odd'><div class='user_details'>"+"image"+"</div><div class='user_details'>"+text.supervisee[i].empid+"</div><div class='user_details'>"+text.supervisee[i].name+"</div><div class='user_details'>"+text.supervisee[i].role+"</div><div class='user_details'><a href='#'>Edit</a> &nbsp <a href='#'>Delete</a></div></div>";
				}

			}
			element.innerHTML=division;
		}
		
	}

	
		
		load();
		console.log("hi");

	


})();
