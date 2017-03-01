(function (){
	var delete_element = document.getElementById('delete_button');
	var delete_modal = document.getElementById('container_modal');
	delete_element.addEventListener('click',function(){
		delete_modal.setAttribute('style','display:flex');
	})
})();