(function(){

function header_name()
{
    
  let url="http://localhost:30/myworkpractice/database/supervisor.json";

var xmlhttp = new XMLHttpRequest();

 xmlhttp.open("GET", url, true);
 xmlhttp.send(null);

xmlhttp.onload= function() {
    console.log(sessionStorage.userId);
    if (this.readyState == 4 && this.status == 200) {
    console.log(sessionStorage.userId);
        let myObj = JSON.parse(this.responseText);
       
        for(let i=0;i<myObj.supervisor.length;i++)
        
        {
            console.log(sessionStorage.userId);
          if(sessionStorage.userId==myObj.supervisor[i].empid)
          {
            let username=myObj.supervisor[i].name;
            let uname=document.getElementsByClassName('name')[0];
            uname.innerHTML=username;
              break;
            }
            

          }

}
};
}
 header_name();
})();