function validate(){
var found = 0;
var passmatch = 0;

var userid = document.getElementById("uid");

var password = document.getElementById("psw");

let url="http://localhost:3000/supervisor";

var xmlhttp = new XMLHttpRequest();

xmlhttp.onreadystatechange = function() {
    
    if (this.readyState == 4 && this.status == 200) {
        
        myObj = JSON.parse(this.responseText);
       
        for(let i=0;i<myObj.length;i++)
        
        {
        	if(userid.value==myObj[i].empid)
        	{
        		found=1;
        		if(password.value==myObj[i].password)
        		{
        			passmatch=1;
        			window.location.assign("../HTML/home.html");
        			break;
        		}
        		

        	}
        	
        	if(found==1 && passmatch!=1)
        	{
        		window.alert("Invalid Credentials");
        	}
        	else{
        			if(found!=1)

        				window.alert("username not found");
        		}

        }
       		
      // statements
        };
         
    }

xmlhttp.open("GET", url, true);
xmlhttp.send();

}

login_image.addEventListener('click',validate);