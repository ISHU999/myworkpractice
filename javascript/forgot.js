(function() {

    var send = document.getElementById("send_password"); //Getting the send password button
    var xhr;

    function initRequest() { //Making connection different browser compatible
        if (window.XMLHttpRequest) {
            xhr = new XMLHttpRequest(); //for chrome
        } else if (window.ActiveXObject) {
            xhr = new ActiveXObject("Microsoft.XMLHTTP"); //for IE
        }
        console.log(xhr);
    }


    function load() {
        initRequest();
        var url = "http://localhost:3000/supervisor"; //Connecting to the JSON server
        xhr.open("GET", url, true);
        xhr.onreadystatechange = processRequest;
        xhr.send(null);
    }

    function processRequest() {
        var userid = document.getElementById("username").value; //Getting the username entered by the user
        if (xhr.readyState == 4 && xhr.status == 200) { //Checking if the connection is open or not
            var response = xhr.responseText; //Getting String data from db
            var data = JSON.parse(response); //Converting string data to JSON data
            var mail;
            var hasMatch = false; //Flag to see if the username exists or not

            for (var index = 0; index < data.length; ++index) {

                var user = data[index];

                if (user.id == userid) {
                    hasMatch = true;
                    mail = user.email; //Getting the emailID of the user
                    console.log(mail);
                    break;
                }
            }
            console.log(hasMatch);
            document.getElementById("username").value = ""; //Clearing the username field
            if (hasMatch) {

                var new_password = ""; //Declaring a new password
                var length = 6; //Declaring the length of the password
                var charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"; //Declaring the character set used to generate the new password
                for (var i = 0; i < length; i++) {
                    new_password += charset.charAt(Math.floor((Math.random() * charset.length))); //Randomly generating a new password using the defined character set
                }
                

                // var password = user.password;
                // response = response.replace(password, new_password);
                // console.log("Paswword has not been changed on the server though!");
                emailjs.send("gmail","password",{"email":mail, "name":user.name, "message":"<b>"+new_password+"</b>"}); //Sending the new password through emailJS to the specified emailID
                redirect(); 
                alert("Password sent to your registered eMail address successfully!");

            } else {
                alert("Wrong Credentials!");
            }
        }
    }

    function redirect() { //To redirect the user to the login page once the password has been sent
        var timecount = 5; //Setting 5 seconds timer for redirecting
        var message = document.getElementById("recovery"); //Changing the recovery division to a display message
        message.innerHTML = "You will be redirected to login page in " + timecount + " seconds"; //Changing the recovery division to a display message
        message.setAttribute("style", "color: #fff");
        setInterval(function() { //Changing the recovery division to a display message
            timecount--;
            message.innerHTML = "You will be redirected to login page in " + timecount + " seconds";
            message.setAttribute("style", "color: #fff");
            if (timecount == 1) {
                window.location = 'index.html'; //Counting
            }
        }, 1000);
    }

    function valid(userid) { //To check if the username field is not left null

        if (userid == "") {

            console.log("Null value");
            document.getElementById("username").focus();
            return false;

        } else {

            return true;

        }

    }


    send.addEventListener('click', function() {


        var userid = document.getElementById("username").value; //Getting the username entered by the user
        if (valid(userid)) {


            console.log(userid);

            load();



        }
        return false;

    });


})();
