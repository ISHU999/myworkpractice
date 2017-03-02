


(function() {
        /* Initialize XHR Object */
        var xhr;
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
            let url = "../database/supervisee.json";         
            xhr.open("GET", url, true);
            xhr.setRequestHeader('Content-Type','application/json');
            xhr.onreadystatechange = processResponse;
            xhr.send(null);
        }
        /* Call Back fucntion */
        var supervisee_list = "";
         var response ;
        function processResponse() {
            var division = "";
            if (xhr.readyState == 4 && xhr.status == 200) {
                var element = document.getElementById("placeholder");
                response = JSON.parse(xhr.responseText);
                console.log(response.supervisee[0].name);
                division=render_division(response.supervisee)
                element.innerHTML = division;
            }
        }
        function render_division(renderData){
            var containerData='';
            for (let i = 0; i < renderData.length; i++) {
                if (i % 2 == 0) {
                    containerData += "<div class='supervisee_details skill-item-Even'><div class='user_details'>" + "image" + "</div><div class='user_details'>" + renderData[i].empid + "</div><div class='user_details'>" + renderData[i].name + "</div><div class='user_details'>" + renderData[i].role + "</div></div>";
                } else {
                    containerData += "<div class='supervisee_details skill-item-Odd'><div class='user_details'>" + "image" + "</div><div class='user_details'>" + renderData[i].empid + "</div><div class='user_details'>" + renderData[i].name + "</div><div class='user_details'>" + renderData[i].role + "</div></div>";
                }
            }
            return containerData;
        }
            load();
             var search_bar = document.getElementById("search_bar");
            var searchField;
            search_bar.addEventListener("keyup", function() {
                searchField = search_bar.value.toLowerCase();
                var placeholder=document.getElementById('placeholder');
                var newArray=[];
                response.supervisee.forEach(function(item, index){
                    if(item.name.toLowerCase().indexOf(searchField)>-1){
                        newArray.push(item);
                    } 
                })
                if(newArray.length>0){
                    placeholder.innerHTML=render_division(newArray);
                    newArray=null;
                }
            });      
        })();

