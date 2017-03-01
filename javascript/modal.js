(function(){
	var xhr;
	function initRequest(){
		if (window.XMLHttpRequest){
			xhr=new XMLHttpRequest();
			}
			else if(window.ActiveXObject){
				xhr=new ActiveXObject("Microsoft.XMLHTTP");
			}
		}


	function load(){
					initRequest();
					let url="http://localhost:3000/supervisee";
					//var deleted_element= this.deleted_element;
					xhr.open("GET",url,true);
					xhr.setRequestHeader("Content-Type",'application/json');
					xhr.onreadystatechange=processResponse;
					xhr.send();

	}
	function processResponse(){
		if(xhr.readyState==4 && xhr.status==200){
		var response=xhr.responseText;
		var text=JSON.parse(response);
		console.log(text[0].name);
	}
	}
	var delete_modal_view=document.getElementById('container_modal');
	var delete_yes=document.getElementById('modal_delete_btn');
	var delete_no=document.getElementById('modal_delete_btn_deny');
	var supervisee_edit=document.getElementById('btn_supervisee_edit');
	var supervisee_modal_view=document.getElementById('container_modal_add');
	var supervisee_edit_save=document.getElementById('submit_image');
	delete_yes.addEventListener('click',function(){
		console.log('yes is working');
		load();

	})
	delete_no.addEventListener('click',function(){
			delete_modal_view.setAttribute("style","display:none");
	})
	supervisee_edit.addEventListener('click',function(){
		console.log("working");
		supervisee_modal_view.setAttribute('style', 'display:flex');
	})
	supervisee_edit_save.addEventListener('click',function(){
		console.log('display gone again');
		supervisee_modal_view.setAttribute('style','display:none');
	})
})();