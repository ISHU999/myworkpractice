(function() {
    /* Initialize XHR Object */
    var xhr;
    var supervisee_list = "";
    var response;
    var search_bar = document.getElementById("search_bar");
    var searchField;

    function initRequest() {
        if (window.XMLHttpRequest) {
            xhr = new XMLHttpRequest();
        } else if (window.ActiveXObject) {
            xhr = new ActiveXObject("Microsoft.XMLHTTP");
        }
    }
    /* Make Ajax Call */
    function load() {
        initRequest();
        let url = "http://localhost:3000/supervisee";
        xhr.open("GET", url, true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.onreadystatechange = processResponse;
        xhr.send(null);
    }
    /* Call Back fucntion */
    function processResponse() {
        var division = "";
        if (xhr.readyState == 4 && xhr.status == 200) {
            response = JSON.parse(xhr.responseText);
            sorting(response, 'name');
            render_division(response);
        }
    }
    /*Rendering the complete list of supervisees*/
    function render_division(renderData) {
        var containerData1 = '';
        containerData1 = "<div class='supervisee_title'><div class='user_details'>" +
            "" + "</div><div class='user_details' id='empid'>" +
            "EMP ID" + "</div><div class='user_details' id='empname'>" +
            "EMP NAME" + "</div><div class='user_details' id='role'>" +
            "ROLE" + "</div><div class='user_details'>" + "ACTION" + "</div></div>"
        document.getElementById("super_list_header").innerHTML = containerData1;
        var containerData = '';
        for (let i = 0; i < renderData.length; i++) {
            if (i % 2 == 0) {
                containerData += "<div class='supervisee_details supervisee_even'><div class='user_details'>" + "image" +
                    "</div><div class='user_details'>" + renderData[i].id +
                    "</div><div class='user_details'>" + renderData[i].name +
                    "</div><div class='user_details'>" + renderData[i].role +
                    "</div><div class='user_details'><a href='javascript:void(0)' class='icon_edit' ><i class='fa fa-pencil' aria-hidden='true'></i></a> &nbsp <a href='javascript:void(0)' class='icon_delete' data-emp='" + renderData[i].id + "'><i class='fa fa-trash' aria-hidden='true'></i></a></div> </div>";
            } else {
                containerData += "<div class='supervisee_details supervisee_odd'><div class='user_details'>" + "image" +
                    "</div><div class='user_details'>" + renderData[i].id +
                    "</div><div class='user_details'>" + renderData[i].name +
                    "</div><div class='user_details'>" + renderData[i].role +
                    "</div><div class='user_details'><a href='javascript:void(0)' class='icon_edit'><i class='fa fa-pencil' aria-hidden='true'></i></a> &nbsp <a href='javascript:void(0)' class='icon_delete' data-emp='" + renderData[i].id + "'><i class='fa fa-trash' aria-hidden='true'></i></a></div> </div>";
            }
        }
        document.getElementById("super_list").innerHTML = containerData;
        registerEvent();
        registerDeleteEvent();
    }
    load();
    /*Adding Event Listener to the Search Bar*/
    search_bar.addEventListener("keyup", function() {
        searchField = search_bar.value.toLowerCase();
        var newArray = [];
        //response.supervisee.forEach(function(item, index){
        response.forEach(function(item, index) {
            if (item.name.toLowerCase().indexOf(searchField) > -1) {
                newArray.push(item);
            }
        });
        if (newArray.length > 0) {
            render_division(newArray);
            newArray = null;
        } else {
            document.getElementById("super_list").innerHTML = '<h4>No results found</h4>'
        }

    });
    /*Adding event listener to search bar for the cross button*/
    search_bar.addEventListener("search", function() {
        render_division(response);
    });
    /*Function to sort data according to the properties */
    function sorting(responseData, property) {
        responseData.sort(function(curr, next) {
            if (curr[property] < next[property])
                return -1;
            else if (curr[property] > next[property])
                return 1;
            else
                return 0;
        });
        if (responseData.length > 0) {
            render_division(responseData);
        }
    }
    /*Adding Event Listeners to Headers of the Supervisee List*/
    function registerEvent() {
        var empid = document.getElementById('empid');
        var empname = document.getElementById('empname');
        var role = document.getElementById('role');
        empid.addEventListener("click", function() {
            sorting(response, 'id');
        });
        empname.addEventListener("click", function() {
            sorting(response, 'name');
        });
        role.addEventListener("click", function() {
            sorting(response, 'role');

        });
    }
    /*Function to Delete respective supervisee details*/
    function registerDeleteEvent() {
        var del = document.getElementsByClassName('icon_delete');
        for (var i = 0; i < del.length; i++) {
            del[i].addEventListener('click', function(event) {
                var empid = this.getAttribute('data-emp');
                let url = "http://localhost:3000/supervisee/" + empid;
                xhr.open("DELETE", url, true);
                xhr.setRequestHeader('Content-Type', 'application/json');
                xhr.onreadystatechange = function() {
                    if (xhr.readyState == 4 && xhr.status == 200) {
                        load();
                    }
                };
                xhr.send(null);
            });
        }
    }
})();
