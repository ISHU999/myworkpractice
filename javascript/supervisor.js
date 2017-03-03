(function() {
    /* Initialize XHR Object */
    var xhr;
    //sessionStorage.userid="1234";
    function initRequest() {
        if (window.XMLHttpRequest) {
            xhr = new XMLHttpRequest();
        } else if (window.ActiveXObject) {
            xhr = new ActiveXObject("Microsoft.XMLHTTP");
        }

    }

    function load_supervisor(){
        initRequest();

        let url = "http://localhost:3000/supervisor";
        xhr.open("GET", url, true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.onreadystatechange = function(){
            if (xhr.readyState == 4 && xhr.status == 200) {
           var response1 = JSON.parse(xhr.responseText);
            console.log(response1);
            render_supervisor_division(response1);
        }
            
        };
        xhr.send(null);

    }

    function render_supervisor_division(renderData)
    {
        var super_details='';
        for (let i = 0; i < renderData.length; i++) {
            if(renderData[i].id===sessionStorage.userID)
            {
               
                
                    super_details += "<p id='profile_name'>"+renderData[i].name+"</p>"+
                    "<p class='profile_detail'>"+renderData[i].id+"</p>" +
                    "<p class='profile_detail'>"+renderData[i].email+"</p>"+
                    "<p class='profile_detail'>"+renderData[i].role+"</p>"+
                    "<p class='profile_detail'>"+renderData[i].address+" </p>"+
                    "<br>"       
            }
             document.getElementById("profile_details").innerHTML = super_details;
    }
}

    load_supervisor();

})();