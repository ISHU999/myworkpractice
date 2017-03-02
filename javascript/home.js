(function() {
    /* Initialize XHR Object */
    var xhr;

    function initRequest() {
        if (window.XMLHttpRequest) {
            xhr = new XMLHttpRequest();
        } else if (window.ActiveXObject) {
            xhr = new ActiveXObject("Microsoft.XMLHTTP");
        }
<<<<<<< HEAD
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
        /* Make Ajax Call */
        function load() {
            initRequest();
=======
    }
    /* Make Ajax Call */
    function load() {
        initRequest();

        //let url = "../database/supervisee.json";
        let url = "http://localhost:3000/supervisee";
        xhr.open("GET", url, true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.onreadystatechange = processResponse;
        xhr.send(null);
    }
    /* Call Back fucntion */
    var supervisee_list = "";
    var response;
>>>>>>> 8a3fa258988d7ca5da14335d371020854a4dd713

    function processResponse() {
        var division = "";
        if (xhr.readyState == 4 && xhr.status == 200) {
            response = JSON.parse(xhr.responseText);
            render_division(response);
        }
    }

    function render_division(renderData) {
        var containerData = '';
        containerData = "<div class='supervisee_title'><div class='user_details'>" +
            "" + "</div><div class='user_details' id='empid'>" +
            "EMP ID" + "</div><div class='user_details' id='empname'>" +
            "EMP NAME" + "</div><div class='user_details' id='role'>" +
            "ROLE" + "</div><div class='user_details'>" + "ACTION" + "</div></div>"
        for (let i = 0; i < renderData.length; i++) {
            if (i % 2 == 0) {
                containerData += "<div class='supervisee_details supervisee_even'><div class='user_details'>" + "image" +
                    "</div><div class='user_details'>" + renderData[i].empid +
                    "</div><div class='user_details'>" + renderData[i].name +
                    "</div><div class='user_details'>" + renderData[i].role +
                    "</div><div class='user_details'><a href='javascript:void(0)' class='icon_edit'><i class='fa fa-pencil' aria-hidden='true'></i></a> &nbsp <a href='javascript:void(0)' class='icon_delete'><i class='fa fa-trash' aria-hidden='true'></i></a></div> </div>";
            } else {
                containerData += "<div class='supervisee_details supervisee_odd'><div class='user_details'>" + "image" +
                    "</div><div class='user_details'>" + renderData[i].empid +
                    "</div><div class='user_details'>" + renderData[i].name +
                    "</div><div class='user_details'>" + renderData[i].role +
                    "</div><div class='user_details'><a href='javascript:void(0)' class='icon_edit'><i class='fa fa-pencil' aria-hidden='true'></i></a> &nbsp <a href='javascript:void(0)' class='icon_delete'><i class='fa fa-trash' aria-hidden='true'></i></a></div> </div>";
            }
        }
        document.getElementById("super_list").innerHTML = containerData;
        registerEvent();
    }
    load();
    var search_bar = document.getElementById("search_bar");
    var searchField;
    search_bar.addEventListener("keyup", function() {
        searchField = search_bar.value.toLowerCase();
        var newArray = [];
        //response.supervisee.forEach(function(item, index){
        response.forEach(function(item, index) {
            if (item.name.toLowerCase().indexOf(searchField) > -1) {
                newArray.push(item);
            }
        })
        if (newArray.length > 0) {
            render_division(newArray);
            newArray = null;
        } else {
            document.getElementById("super_list").innerHTML = '<h4>No results found</h4>'
        }
<<<<<<< HEAD
        header_name();
           load();
            var search_bar = document.getElementById("search_bar");
            var searchField;
            search_bar.addEventListener("keyup", function() {
                searchField = search_bar.value.toLowerCase();
                var super_list=document.getElementById("super_list");
                var newArray=[];
                //response.supervisee.forEach(function(item, index){
                response.forEach(function(item, index){
                    if(item.name.toLowerCase().indexOf(searchField)>-1){
                        newArray.push(item);
                    } 
                })
                if(newArray.length>0){
                    super_list.innerHTML=render_division(newArray);
                    newArray=null;
                }
            });    

=======
    });
    search_bar.addEventListener("search", function() {
        render_division(response);
    });

    function sorting(responseData, property) {
        responseData.sort(function(curr, next) {
            return curr[property] > next[property];
        });
        if (responseData.length > 0) {
            render_division(responseData);
        }
    }

    function registerEvent() {
        var empid = document.getElementById('empid');
        var empname = document.getElementById('empname');
        var role = document.getElementById('role');
        empid.addEventListener("click", function() {
            sorting(response, 'empid');
        });
        empname.addEventListener("click", function() {
            sorting(response, 'name');
        });
        role.addEventListener("click", function() {
            sorting(response, 'role');

        });
    }
    sessionStorage.empid = '127474';
>>>>>>> 8a3fa258988d7ca5da14335d371020854a4dd713
})();
