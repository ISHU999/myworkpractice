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
      console.log(sublist_items.childNodes[0]);
      for(var x =0; x<sublist_items.childNodes.length ; x++){
            var it = sublist_items.childNodes[x].childNodes;
           // console.log(it);
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
                    while(node){
                    list_items.push(node.nextElementSibling);
                    node = node.nextElementSibling;
                }
                    console.log(list_items);
                   // console.log(my_list.length);
                    for (var i = 0; i < 5; i ++) {
                        list_items[i].addEventListener('click', setRating);
                        list_items[i].myParam = i;
                         console.log(i);
                        //
                    }
                } else {
                    console.log("im outside");
                    console.log(my_list);
                    for (var i = 0; i < 5; i ++) {
                        list_items[i].removeEventListener('click', setRating);

                    }

                }
            });
        }
    }

    function setRating(event) {
        var i = event.target.myParam;
        total = i;
        console.log('hello');
        if (list_items[i].getAttribute('src') == source2) {
            for (var j = 0; j <= i; j ++) {
                list_items[j].setAttribute('src', source1);
            }

        } else {
            for (var k = i; k < 5; k ++) {
                total = list_items[i].getAttribute('data-value');
            
                list_items[k].setAttribute('src', source2);

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

        for (var i = 0; i < 1   ; i++) {

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
          //  console.log(mainlist)

            container += '<div class="sub-list-group">';

            for (var k = 0; k < subskill.length; k++) {

                var subname = subskill[k].name;
                var sublevel = subskill[k].level;
                console.log('i='+k)
                var idchk = j+'0'+k;
                container +=
                    '<div class="sub-list-element">' +
                    
                    '<div class="checkbox"><input type="radio" name="rememberme" value="" aria-label="checkbox" id="customcheckbox'+idchk+'"><label for="customcheckbox'+idchk+'"></label></div>' +
                    '<div class="sub-skill-item">' + subname + '</div>' +
                      // '<div style="display:flex">'+
                            '<img src="images/star_filled.png" alt="Stars" class="rating-star" />' +
                            '<img src="images/star_nonfilled.png" alt="Stars" class="rating-star" />' +
                            '<img src="images/star_nonfilled.png" alt="Stars" class="rating-star" />' +
                            '<img src="images/star_nonfilled.png" alt="Stars" class="rating-star" />' +
                            '<img src="images/star_nonfilled.png" alt="Stars" class="rating-star" />' +
                       // '</div>'
                    '</div>'
            }
            container += '</div>';
            //console.log(container)
            mainlist.innerHTML = container;
            skill_list.appendChild(mainlist);
        

        }
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
          
            for (var i = 0; i < show.length; i++){
                show[i].addEventListener('click', show_sublist);
                rating(show[i]);


                 
            }
            
            
        }

        }
    

    var l = document.getElementById('load');
    l.addEventListener('click', load);



    //Display dropdown on click
    var previous=null;
    function show_sublist() {
    
        if(previous ){
            previous.setAttribute('style', 'display:none')
            previous.previousSibling.childNodes[0].innerHTML='&#9660;';
            // console.log(previous)
            // console.log(previous.previousSibling)
            // console.log(event.currentTarget)
            // console.log(previous.nextSibling)
           
        }
            if(previous!=event.currentTarget.nextSibling){
                previous=event.currentTarget.nextSibling; 
                event.currentTarget.childNodes[0].innerHTML='&#x25B2;';       
                previous.setAttribute('style', 'display:block')
            }else{
               previous=null; 
            }

        
        }

})();
