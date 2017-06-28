var app=angular.module("myapp",["ngRoute",'ngResource']);

app.config(function($routeProvider)
{
	$routeProvider
		/*.when("/usersPage",{
			templateUrl:"users.html",
			controller:"userPageControl"
		})*/
		.when("/productsPage",{
			templateUrl:"products.html",
			controller:"productcontroller"
		})
		.when("/customerReviewsPage",{
			templateUrl:"reviews.html",
			controller:"myControl"
		})
		.when("/customerBuyPage",{
			templateUrl:"buy.html",
			controller:"myControl"
		})
		.when("/confirmPage",{
			templateUrl:"confirm.html",
			controller:"myControl"
		})
		.when("/orderConfirmPage",{
			templateUrl:"orderConfirm.html",
			controller:"myControl"
		});
});