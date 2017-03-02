(function(){

function header_name()
{
    
  let url="http://localhost:3000/supervisor";

var xmlhttp = new XMLHttpRequest();

 xmlhttp.open("GET", url, true);
 xmlhttp.send(null);

xmlhttp.onreadystatechange= function() {
    console.log(sessionStorage.userID);
    if (this.readyState == 4 && this.status == 200) {
    console.log(sessionStorage.userID);
        let myObj = JSON.parse(this.responseText);
       
        for(let i=0;i<myObj.length;i++)
        
        {
            console.log(sessionStorage.userID);
          if(sessionStorage.userID==myObj[i].empid)
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
})();