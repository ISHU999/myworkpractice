(function(){
	var modal_view= document.getElementById('container_modal');
	var delete_yes= document.getElementById('modal_delete_btn');
	var delete_no= document.getElementById('modal_delete_btn_deny');

	delete_yes.addEventListener('click',function(){
		console.log('yes is working');
        modal_view.setAttribute("style","display:none");
        

	})
	delete_no.addEventListener('click',function(){
			modal_view.setAttribute("style","display:none");
	})
})();