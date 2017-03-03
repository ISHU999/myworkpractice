(function(){

function header_name()
{
    
  let url="http://localhost:3000/supervisor";

var xmlhttp = new XMLHttpRequest();

 xmlhttp.open("GET", url, true);
 xmlhttp.send(null);

xmlhttp.onreadystatechange= function() {
    if (this.readyState == 4 && this.status == 200) {
        let myObj = JSON.parse(this.responseText);
       
        for(let i=0;i<myObj.length;i++)
        
        {
          if(sessionStorage.userID==myObj[i].id)
          {
            let username=myObj[i].name;
            let uname=document.getElementsByClassName('name')[0];
            uname.innerHTML=username;
              break;
            }
            
          }

}
};
}
 header_name();
 let dropdown=document.getElementById("dropdown");
 let dropdowncontent=document.getElementById("dropdown-content");
 dropdown.addEventListener("click",function () {
   dropdowncontent.classList.toggle("show");
   console.log('1');
 });



    
  

}

)();