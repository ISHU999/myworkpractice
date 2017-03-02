//For Local Storage
function remember_me()
{
var checkbox=document.getElementById('customcheckbox');
input=document.getElementsByTagName('input');
username=input[0].value;
var input;
var username;
console.log(username);
  if (typeof(Storage) !== "undefined")
   {
	if( username=="" && window.localStorage.length!=0)
	           {
	           	console.log('1');
	         
	           	 input[0].value=localStorage.username;
	           	 checkbox.checked=true
              	//input[0].innerHTML=localStorage.username;
              }
        checkbox.addEventListener('change',function()
        {
	     if(checkbox.checked==true)
		   {
             input=document.getElementsByTagName('input');
              username=input[0].value;
              localStorage.setItem("username",username);
              console.log(localStorage.username);
		   }
		   else
		   {
		   	localStorage.removeItem('username');
		   }
		  
        })
    }

}
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
              remember_me();
        			passmatch=1;
        			window.location.href="../HTML/home.html";
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
remember_me();
login_image.addEventListener('click',validate);
