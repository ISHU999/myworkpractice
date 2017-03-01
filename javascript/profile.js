
var show =	document.getElementsByClassName('down-array')[0];
console.log(show)
for(var i=0 ; i<show.size ;i++)
	show[i].addEventListener('click', show_sublist);

function show_sublist(){
	console.log('called')
	var sublist = document.getElementsByClassName('sub-list-group');
	console.log(sublist);

	sublist[1].setAttribute('style', 'display:block');
	
}



