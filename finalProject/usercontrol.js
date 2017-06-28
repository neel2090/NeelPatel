var app=angular.module("myapp");

app.controller("userPageControl",function ($scope,$resource) 
{
	return 
	{
		getuser:function(){
		$resource('/finalProject/files/:id', {id:'@id'}).get({id:'users.json'});
		}
	};
});