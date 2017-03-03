(function(){
	
	app.getObject("supervisee",function(data){
		console.log(data);
		console.log(data[2].address);
	});
})();