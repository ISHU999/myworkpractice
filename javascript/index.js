(function(){
   
function on_load()  //to display the remembered username when the page loads.
{
    console.log("entering onload");
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
                  var checkbox=document.getElementById('customcheckbox');
                  checkbox.checked=true;
                   
                  }
        }
     
}
function remember_me()  //the remember me functionality (storing in localStorage)
{
  console.log("entering remember_me");
  checkbox=document.getElementById('customcheckbox');
  if(checkbox.checked==false)
  {
    localStorage.removeItem('username');

  } 
  else{
        input=document.getElementsByTagName('input');
        username=input[0].value;
        localStorage.setItem("username",username);
        console.log(localStorage.username);
      }
}
function validate(){    
console.log("entering validate");           //checking the credentials if they are valid or not.
var found = 0;
var passmatch = 0;

var userid = document.getElementById("uid");

var password = document.getElementById("psw");

let url="http://localhost:30/myworkpractice/database/supervisor.json";

var xmlhttp = new XMLHttpRequest();

xmlhttp.onload = function() {
    
    if (this.readyState == 4 && this.status == 200) {
        
        myObj = JSON.parse(this.responseText);
        console.log(myObj.supervisor.length);
       
        for(let i=0;i<myObj.supervisor.length;i++)
        
        {
          if(userid.value==myObj.supervisor[i].empid)
          {
            found=1;
            if(password.value==myObj.supervisor[i].password)
            {
              console.log('pass matxched');
             // var checkbox=document.getElementById('customcheckbox');
             // console.log(checkbox.checked);
                    remember_me();
                    console.log(checkbox.checked);
              passmatch=1;
              sessionStorage.setItem('userId',userid.value);
              window.location.href="../HTML/home.html";

              break;
            }
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
          
        };
         
    }

xmlhttp.open("GET", url, true);
xmlhttp.send();

}
on_load();
var login_image=document.getElementById('login_image');
login_image.addEventListener('click',validate);
})();
