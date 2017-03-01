//For Local Storage
(function()
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

})();
