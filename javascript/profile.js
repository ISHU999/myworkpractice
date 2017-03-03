(function() {




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

        for (var j = 0; j < skill.length; j++) {
            var mainlist = document.createElement('li');
            var pskillname = skill[j].name;
            var container = '';
            container += '<div class="list-element"><span class="down-arrow">&#9660;</span><div class="skill-item">' + pskillname + '</div><div class="skill-level">Beginner</div></div>';
            //subskills
            var subskill = skill[j].subskills;
            console.log(mainlist)

            container += '<div class="sub-list-group">';

            for (var k = 0; k < subskill.length; k++) {

                var subname = subskill[k].name;
                var sublevel = subskill[k].level;

                container +=
                    '<div class="sub-list-element">' +
                    '<div class="checkbox"><input type="checkbox" name="remember me" value="" aria-label="checkbox" id="customcheckbox"><label for="customcheckbox"></label></div>' +
                    '<div class="sub-skill-item">' + subname + '</div>' +
                    '<img src="images/star_filled.png" alt="Stars" class="rating-star" />' +
                    '<img src="images/star_nonfilled.png" alt="Stars" class="rating-star" />' +
                    '<img src="images/star_nonfilled.png" alt="Stars" class="rating-star" />' +
                    '<img src="images/star_nonfilled.png" alt="Stars" class="rating-star" />' +
                    '<img src="images/star_nonfilled.png" alt="Stars" class="rating-star" />' +
                    '</div>'
            }
            container += '</div>';
            console.log(container)
            mainlist.innerHTML = container;
            skill_list.appendChild(mainlist);
        }
    }

    // Function for stars
    function rating() {

        var sub_items = document.getElementsByClassName('rating-star');

        for (var i = 1; i < sub_items.length; i++) {
            setRating(sub_items[i]);
        }
    }

    function setRating(items) {

        items.addEventListener('click', function() {

            if (items.getAttribute('src') == source1) {
                items.setAttribute('src', source2);
            } else {
                items.setAttribute('src', source1);
            }
        });
    }
    rating();



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
            console.log(show.length)
            for (var i = 0; i < show.length; i++)
                show[i].addEventListener('click', show_sublist);

        }
    }

    var l = document.getElementById('load');
    l.addEventListener('click', load);

    var source1 = "images/star_filled.png";
    var source2 = "images/star_nonfilled.png";


    //Display dropdown on click
    var previous = null;

    function show_sublist() {

        if (previous) {
            previous.setAttribute('style', 'display:none')
            previous.previousSibling.childNodes[0].innerHTML = '&#9660;';
            console.log(previous)
            console.log(previous.previousSibling)
            console.log(event.currentTarget)
            console.log(previous.nextSibling)

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
