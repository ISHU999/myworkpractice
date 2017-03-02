(function(){
 var  source1= "../images/star_filled.png";
 var  source2 = "../images/star_nonfilled.png";
 var show = document.getElementById('show');
 show.addEventListener('click', show_sublist);

//Display dropdown on click
function show_sublist(){

 var sublist = document.getElementsByClassName('sub-list-group');
 console.log(sublist.length);

 sublist[0].setAttribute('style', 'display:block');

}


// Dynamically populate data

function populate(json){

  var primary = document.getElementById("primary-list");
  var secondary = document.getElementById("secondary-list");


  for(var i = 0 ; i < 1; i++ ){
    var pskills = json[i].PrimarySkills;
    var sskills = json[i].SecondaySkills;

    for(var j = 0 ; j <1 ; j++){
     
     var p = pskills[i];
   
     var pskillname = Object.keys(p)[0];

 console.log(pskillname)

  var psubskill = Object.keys(p)
console.log(psubskill)
    // for(var k = 0; k<)


  
    }


  }

}


// Function for stars
function rating(){

  var sub_items = document.getElementsByClassName('rating-star');

  for(var i = 1 ;i<sub_items.length; i++){
    setRating(sub_items[i]);
  }
}
function setRating(items){

 items.addEventListener('click', function(){

  if(items.getAttribute('src') == source1){
   items.setAttribute('src', source2);
 }
 else{
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
  let url = "http://localhost:3000/competancy";         
  xhr.open("GET", url, true);
  xhr.setRequestHeader('Content-Type','application/json');
  xhr.onreadystatechange = processResponse;
  xhr.send(null);
}

function processResponse() {
  var division = "";
  if (xhr.readyState == 4 && xhr.status == 200) {
    var json = JSON.parse(xhr.responseText);

    populate(json);
  }
}

var l = document.getElementById('load');
l.addEventListener('click', load);

})();


