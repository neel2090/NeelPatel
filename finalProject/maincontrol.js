var app=angular.module("myapp");

app.controller("myControl",function($scope,$location,$locale)
{
	/*$scope.userPage=function()
	{
	$location.path("/usersPage");
	
	};*/
	$scope.date=Date.now();
		$scope.myFormat=$locale.DATETIME_FORMATS.fullDate;

	$scope.productPage=function()
	{
	$location.path("/productsPage");
	};
	$scope.reviewPage=function(customerReviews)
	{
		$location.path("/customerReviewsPage");
		$scope.review=customerReviews;
		$scope.splitreview=$scope.review.split(".");
	};
	$scope.buyPage=function(image,price,product,shipping,theReview,stock)
	{	
		$location.path("/customerBuyPage");
		$scope.productImg=image;
		$scope.itemPrice=price;
		$scope.info=product;
		$scope.shippingDetail=shipping;
		$scope.itemReview=theReview;
		$scope.splitItemReview=$scope.itemReview.split(".");
		$scope.inStock=stock;
	};
	$scope.confirmOrder=function(product,shipping)
	{
	$location.path("/confirmPage");
	};
	$scope.orderPay=function(product,price)
	{
		$location.path("/orderConfirmPage");
		var name=document.getElementById("cardName").value;
		if(name.match(/[0-9]/gi)){
			alert("Name can not contain numbers");
		}
		var cardNum=document.getElementById("cardNumber").value;
		if(cardNum.length<16||cardNum.length||cardNum.match(/[a-z]/gi>16)){
			alert("card number is wrong");
		}
		var cardCvv=document.getElementById("cardCvv").value;
		if(cardNum.Cvv<3||cardCvv.length>3||cardCvv.match(/[a-z]/gi)){
			alert("card CVV is wrong");
		}
		var zip=document.getElementById("zipCode").value;
		if(zip.length<6||zip.length>6||zip.match(/[a-z]/gi)){
			alert("zipCode is wrong");
		}
	};
	
});