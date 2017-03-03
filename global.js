var app = (function(){
	//var myObj
	var required_data;
	var count=1;
	function initRequest(){
		var xhr;
		if (window.XMLHttpRequest) {
			xhr=new XMLHttpRequest();
		}
		else{
			xhr=new ActiveXObject("Microsoft.XMLHTTP");
		}
		return xhr;
	}
	var xhr;
	// function type_identifier(type,url,data){
	// 	xhr= (typeof xhr==='undefined')?initRequest():xhr;
	// 	var url="http://localhost:3000/supervisee"+url;
		
	// 	xhr.open(type,url,true);
	// 	xhr.setRequestHeader("Content-Type",'application/json');
	// 	xhr.send(data);
	// 	xhr.onreadystatechange = function(response) {
 //    		if (xhr.readyState == 4 && xhr.status == 200) {	
 //    			//console.log(JSON.parse(xhr.responseText));	
	// 			myObj=JSON.parse(xhr.responseText);
					
	// 		}
	// 	};

		
	
	function ajax_request(type,url,data,callback){
		 var xhr= (typeof xhr==='undefined')?initRequest():xhr;
		//var xhr = new XMLHttpRequest();
		var url="http://localhost:3000/"+url;
		xhr.open(type,url,true);
		//console.log(myObj)
		xhr.setRequestHeader("Content-Type",'application/json');
		
		data=JSON.stringify(data);
		//console.log(data);
		xhr.send(data);
		//if(type==="GET"){
		xhr.onreadystatechange = (function(xhr,callback) {
			return function(){
				if (xhr.readyState == 4 && xhr.status == 200) {	
	    			//console.log(JSON.parse(xhr.responseText));	
					if(callback) {
						callback(xhr);
					}
				
				}
			}
    		
		})(xhr,callback);

	//}
}
	//console.log("Hi")
	function getObject(url,Func){
			//if(object_type==="supervisor"){
				ajax_request("GET",url,null,function(xhr){
			required_data=JSON.parse(xhr.responseText);
			console.log(required_data);
			Func(required_data);
		//	console.log(++count)
		return required_data;
	});
		
	}
	function changes(){
		console.log(required_data);

	}
	//changes();
	/*ajax_request("GET","",null,function(xhr){
		//myObj=JSON.parse(xhr.responseText);
		console.log(myObj);
		console.log(++count);
	});*/
	// function deleteContent(){
	// 	 	myObj.supervisorid="55";
	// 	 	console.log(myObj.supervisorid);
	// 	 	console.log(++count);
	// 	 	ajax_request("PUT","/4564",myObj,function getModifiedData(xhr) {
	// 			//console.log('get function xhr',xhr);
	// 			console.log(++count);
	// 			ajax_request("GET","/4564",null);
	// 			console.log(++count);
	// 		});
	// 	 	//ajax_request("GET","/4564",null);
	// 	 	console.log(myObj);

	// 	 }
	// function getModifiedData() {
	// 	console.log('get func');
	// }
	// 	 var button2 = document.getElementById("button2");
	// 	button2.addEventListener('click',function(e){
	// 	e.preventDefault();
	// 	deleteContent();
	// 	console.log(++count);
	// });	
	//console.log(myObj);
	//getObject("supervisee",changes);
	//console.log(myObj);
	
	return {
		changes : changes,
		getObject :getObject
	}

})();
