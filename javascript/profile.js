
var show =	document.getElementById('show');
show.addEventListener('click', show_sublist);

function show_sublist(){
	console.log('called')
	var sublist = document.getElementsByClassName('sub-list-group');
	console.log(sublist);

	sublist[0].setAttribute('style', 'display:block');
	
}



