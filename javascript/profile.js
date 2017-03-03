(function() {

    var source1 = "images/star_filled.png";
    var source2 = "images/star_nonfilled.png";
    var list_items = [];
    var subskillObj = {
        "name": "",
        "level": "1"
    };
    var subskills = [];

    function rating(sublist) {
        var sublist_items = sublist.nextElementSibling;
        console.log(sublist_items.childNodes);
        for (var x = 0; x < sublist_items.childNodes.length; x++) {
            var it = sublist_items.childNodes[x].childNodes;
            console.log(it);
            console.log(it[0].childNodes[0]);
            it[0].childNodes[0].addEventListener('change', function(event) {
                if (this.checked) {
                    console.log('hi')
                    var node = this.parentNode.nextElementSibling;
                    console.log(node);
                    list_items = [];
                    subskillObj.name = "";
                    // .level = ;
                    subskills.push(subskillObj);
                    console.log(node.nextElementSibling);
                    list_items.push(node.nextElementSibling);

                    my_list = list_items[0].childNodes;
                    console.log(my_list.length);
                    for (var i = 0; i < my_list.length; i++) {
                        my_list[i].addEventListener('click', setRating);
                        my_list[i].myParam = i;
                        console.log(i);
                        //
                    }
                } else {
                    console.log("im outside");
                    console.log(my_list);
                    for (var i = 0; i < my_list.length; i++) {
                        my_list[i].removeEventListener('click', setRating);

                    }

                }
            });
        }
    }

    function setRating(event) {
        var i = event.target.myParam;
        total = i;
        var len = my_list.length;
        console.log('hello');
        if (my_list[i].getAttribute('src') == source2) {
            for (var j = 0; j <= i; j++) {
                my_list[j].setAttribute('src', source1);
            }

        } else {
            for (var k = i; k < len; k++) {
                total = my_list[i].getAttribute('data-value');

                my_list[k].setAttribute('src', source2);

            }


        }
        console.log(total);
    }



    // Dynamically populate data

    function populate(json) {
        var scroll = document.getElementsByClassName('scroll');
        scroll[0].setAttribute('style', 'height:90%');
        scroll[1].setAttribute('style', 'height:90%');
        console.log(json.length)

        for (var i = 0; i < 1; i++) {

            //pskills
            var pskill = json[i].primaryskill;
            var sskill = json[i].secondaryskill;

            var primarylist = document.getElementById('primary-list');
            var secondarylist = document.getElementById('secondary-list');


            populate_skills(pskill, primarylist);
            populate_skills(sskill, secondarylist);





        }

    }


    function populate_skills(skill, skill_list) {
        var list = document.createElement('li');
        for (var j = 0; j < skill.length; j++) {

            var pskillname = skill[j].name;
            list.innerHTML += '<div class="list-element"><span class="down-arrow">&#9660;</span><div class="skill-item">' + pskillname + '</div><div class="skill-level">Beginner</div></div>';
            //subskills
            var subskill = skill[j].subskills;

            for (var k = 0; k < subskill.length; k++) {

                var subname = subskill[k].name;
                var sublevel = subskill[k].level;

                list.innerHTML += '<div class="sub-list-group">' +
                    '<div class="sub-list-element">' +
                    '<div class="checkbox"><input type="checkbox" name="remember me" value="" aria-label="checkbox" id="customcheckbox"><label for="customcheckbox"></label></div>' +
                    '<div class="sub-skill-item">' + subname + '</div>' +
                    '<div class="sub-skill-item">' +
                    '<img src="images/star_filled.png" alt="Stars" class="rating-star" />' +
                    '<img src="images/star_nonfilled.png" alt="Stars" class="rating-star" />' +
                    '<img src="images/star_nonfilled.png" alt="Stars" class="rating-star" />' +
                    '<img src="images/star_nonfilled.png" alt="Stars" class="rating-star" />' +
                    '<img src="images/star_nonfilled.png" alt="Stars" class="rating-star" />' +
                    '</div>' +
                    '</div>' +
                    '<div class="sub-list-element">' +
                    '<div class="checkbox"><input type="checkbox" name="remember me" value="" aria-label="checkbox" id="customcheckbox1"><label for="customcheckbox1"></label></div>' +
                    '<div class="sub-skill-item">Session Storage</div>' +
                    '<div class="sub-skill-item">' +
                    '<img src="images/star_filled.png" alt="Stars" class="rating-star" />' +
                    '<img src="images/star_nonfilled.png" alt="Stars" class="rating-star" />' +
                    '<img src="images/star_nonfilled.png" alt="Stars" class="rating-star" />' +
                    '<img src="images/star_nonfilled.png" alt="Stars" class="rating-star" />' +
                    '<img src="images/star_nonfilled.png" alt="Stars" class="rating-star" />' +
                    '</div>' +
                    '</div>' +
                    '</div>'

            }

        }
        skill_list.appendChild(list);
    }







    // ajaz call

    var xhr;

    function initRequest() {

        if (window.XMLHttpRequest) {
            xhr = new XMLHttpRequest();
        } else if (window.ActiveXObject) {
            xhr = new ActiveXObject("Microsoft.XMLHTTP");
        }
    }

    function load() {
        initRequest();
        let url = "http://localhost:3000/supervisee";
        xhr.open("GET", url, true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.onreadystatechange = processResponse;
        xhr.send(null);
    }

    function processResponse() {
        var division = "";
        if (xhr.readyState == 4 && xhr.status == 200) {
            var json = JSON.parse(xhr.responseText);

            populate(json);


            var show = document.getElementsByClassName('list-element');
            // console.log(show.length);
            //  console.log(show);

            for (var i = 0; i < show.length; i++) {
                show[i].addEventListener('click', show_sublist);
                rating(show[i]);


            }

        }

    }


    var l = document.getElementById('load');
    l.addEventListener('click', load);



    //Display dropdown on click
    var previous = null;

    function show_sublist() {

        if (previous) {
            previous.setAttribute('style', 'display:none')
            previous.previousSibling.childNodes[0].innerHTML = '&#9660;';
            // console.log(previous)
            // console.log(previous.previousSibling)
            // console.log(event.currentTarget)
            // console.log(previous.nextSibling)

        }
        if (previous != event.currentTarget.nextSibling) {
            previous = event.currentTarget.nextSibling;
            event.currentTarget.childNodes[0].innerHTML = '&#x25B2;';
            previous.setAttribute('style', 'display:block')
        } else {
            previous = null;
        }


    }

})();
(function() {

    var source1 = "images/star_filled.png";
    var source2 = "images/star_nonfilled.png";
    var list_items = [];
    var subskillObj = {
        "name": "",
        "level": "1"
    };
    var subskills = [];

    function rating(sublist) {
        var sublist_items = sublist.nextElementSibling;
        console.log(sublist_items.childNodes);
        for (var x = 0; x < sublist_items.childNodes.length; x++) {
            var it = sublist_items.childNodes[x].childNodes;
            console.log(it);
            console.log(it[0].childNodes[0]);
            it[0].childNodes[0].addEventListener('change', function(event) {
                if (this.checked) {
                    console.log('hi')
                    var node = this.parentNode.nextElementSibling;
                    console.log(node);
                    list_items = [];
                    subskillObj.name = "";
                    // .level = ;
                    subskills.push(subskillObj);
                    console.log(node.nextElementSibling);
                    list_items.push(node.nextElementSibling);

                    my_list = list_items[0].childNodes;
                    console.log(my_list.length);
                    for (var i = 0; i < my_list.length; i++) {
                        my_list[i].addEventListener('click', setRating);
                        my_list[i].myParam = i;
                        console.log(i);
                        //
                    }
                } else {
                    console.log("im outside");
                    console.log(my_list);
                    for (var i = 0; i < my_list.length; i++) {
                        my_list[i].removeEventListener('click', setRating);

                    }

                }
            });
        }
    }

    function setRating(event) {
        var i = event.target.myParam;
        total = i;
        var len = my_list.length;
        console.log('hello');
        if (my_list[i].getAttribute('src') == source2) {
            for (var j = 0; j <= i; j++) {
                my_list[j].setAttribute('src', source1);
            }

        } else {
            for (var k = i; k < len; k++) {
                total = my_list[i].getAttribute('data-value');

                my_list[k].setAttribute('src', source2);

            }


        }
        console.log(total);
    }



    // Dynamically populate data

    function populate(json) {
        var scroll = document.getElementsByClassName('scroll');
        scroll[0].setAttribute('style', 'height:90%');
        scroll[1].setAttribute('style', 'height:90%');
        console.log(json.length)

        for (var i = 0; i < 1; i++) {

            //pskills
            var pskill = json[i].primaryskill;
            var sskill = json[i].secondaryskill;

            var primarylist = document.getElementById('primary-list');
            var secondarylist = document.getElementById('secondary-list');


            populate_skills(pskill, primarylist);
            populate_skills(sskill, secondarylist);





        }

    }


    function populate_skills(skill, skill_list) {
        var list = document.createElement('li');
        for (var j = 0; j < skill.length; j++) {

            var pskillname = skill[j].name;
            list.innerHTML += '<div class="list-element"><span class="down-arrow">&#9660;</span><div class="skill-item">' + pskillname + '</div><div class="skill-level">Beginner</div></div>';
            //subskills
            var subskill = skill[j].subskills;

            for (var k = 0; k < subskill.length; k++) {

                var subname = subskill[k].name;
                var sublevel = subskill[k].level;

                list.innerHTML += '<div class="sub-list-group">' +
                    '<div class="sub-list-element">' +
                    '<div class="checkbox"><input type="checkbox" name="remember me" value="" aria-label="checkbox" id="customcheckbox"><label for="customcheckbox"></label></div>' +
                    '<div class="sub-skill-item">' + subname + '</div>' +
                    '<div class="sub-skill-item">' +
                    '<img src="images/star_filled.png" alt="Stars" class="rating-star" />' +
                    '<img src="images/star_nonfilled.png" alt="Stars" class="rating-star" />' +
                    '<img src="images/star_nonfilled.png" alt="Stars" class="rating-star" />' +
                    '<img src="images/star_nonfilled.png" alt="Stars" class="rating-star" />' +
                    '<img src="images/star_nonfilled.png" alt="Stars" class="rating-star" />' +
                    '</div>' +
                    '</div>' +
                    '<div class="sub-list-element">' +
                    '<div class="checkbox"><input type="checkbox" name="remember me" value="" aria-label="checkbox" id="customcheckbox1"><label for="customcheckbox1"></label></div>' +
                    '<div class="sub-skill-item">Session Storage</div>' +
                    '<div class="sub-skill-item">' +
                    '<img src="images/star_filled.png" alt="Stars" class="rating-star" />' +
                    '<img src="images/star_nonfilled.png" alt="Stars" class="rating-star" />' +
                    '<img src="images/star_nonfilled.png" alt="Stars" class="rating-star" />' +
                    '<img src="images/star_nonfilled.png" alt="Stars" class="rating-star" />' +
                    '<img src="images/star_nonfilled.png" alt="Stars" class="rating-star" />' +
                    '</div>' +
                    '</div>' +
                    '</div>'

            }

        }
        skill_list.appendChild(list);
    }







    // ajaz call

    var xhr;

    function initRequest() {

        if (window.XMLHttpRequest) {
            xhr = new XMLHttpRequest();
        } else if (window.ActiveXObject) {
            xhr = new ActiveXObject("Microsoft.XMLHTTP");
        }
    }

    function load() {
        initRequest();
        let url = "http://localhost:3000/supervisee";
        xhr.open("GET", url, true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.onreadystatechange = processResponse;
        xhr.send(null);
    }

    function processResponse() {
        var division = "";
        if (xhr.readyState == 4 && xhr.status == 200) {
            var json = JSON.parse(xhr.responseText);

            populate(json);


            var show = document.getElementsByClassName('list-element');
            // console.log(show.length);
            //  console.log(show);

            for (var i = 0; i < show.length; i++) {
                show[i].addEventListener('click', show_sublist);
                rating(show[i]);


            }

        }

    }


    var l = document.getElementById('load');
    l.addEventListener('click', load);



    //Display dropdown on click
    var previous = null;

    function show_sublist() {

        if (previous) {
            previous.setAttribute('style', 'display:none')
            previous.previousSibling.childNodes[0].innerHTML = '&#9660;';
            // console.log(previous)
            // console.log(previous.previousSibling)
            // console.log(event.currentTarget)
            // console.log(previous.nextSibling)

        }
        if (previous != event.currentTarget.nextSibling) {
            previous = event.currentTarget.nextSibling;
            event.currentTarget.childNodes[0].innerHTML = '&#x25B2;';
            previous.setAttribute('style', 'display:block')
        } else {
            previous = null;
        }


    }

})();
