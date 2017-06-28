app.factory("productsservice",function($resource){
	return{
		getp:function(){
			return $resource('/finalProject/files/:id', {id:'@id'}).get({id:'products.json'});
		}

	}
	
});