var app = angular.module("myapp");

app.controller("reviewformcontroller",function($scope){

	$scope.review1={};
	$scope.addReview=function()
	{
		$scope.myProduct.reviews.push($scope.review1);
		$scope.review1={};
	}
	$scope.myProduct=
	{
		reviews:[
		
		]
	};
});