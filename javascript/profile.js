(function(){
	   	var	source1= "../images/star_filled.png";
   var	source2 = "../images/star_nonfilled.png";
	var show =	document.getElementById('show');
show.addEventListener('click', show_sublist);

function show_sublist(){
	console.log('called')
	var sublist = document.getElementsByClassName('sub-list-group');
	console.log(sublist[0]);

	//sublist[1].setAttribute('style', 'display:block');
	sublist[0].className+=('show');	
}
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
})();


