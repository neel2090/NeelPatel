var app=angular.module("myapp");

app.controller("productcontroller",function($scope,$resource,productsservice)
{
	productsservice.getp().$promise.then(function(product)
	{
		$scope.product=product;
		console.log(product);
	}, function(response)
	   {
	   		console.log();
	   });
});