var myApp=angular.module("myApp",[]);
myApp.controller("MayTinh",function ($scope) {
	$scope.ketqua='Kết quả là: ';

	$scope.Tinh=function () {
	var so1=parseInt($scope.so1);
	var so2=parseInt($scope.so2);

	var pheptoan=$scope.pheptoan;
	
	if(pheptoan=='+'){
		$scope.ketqua='Kết quả là: '+ (so1+so2);
	}else if(pheptoan=='-'){
		$scope.ketqua='Kết quả là: '+ (so1-so2);
	}else if(pheptoan=='*'){
		$scope.ketqua='Kết quả là: '+ (so1*so2);
	}else
	{
		$scope.ketqua='Kết quả là: '+ (so1/so2);
	}
	};
});
myApp.directive("ngFormlogin",function () {
	return{

		templateUrl: 'templates/login.html'
	};
});
myApp.controller("LoginController",function ($scope) {
	$scope.checkLogin=function () {
	 var user=$scope.username;
	 var pass=$scope.password;
	 alert('Username: '+user+'-Password: '+pass);	
	};
});
myApp.directive("loginform",function () {
	return{
		restrict:"",
		template: '<strong>Working Restrict<strong>'
	};
});
//-----
myApp.controller("MessageController",function ($scope) {
	$scope.showMessage=function () {
		alert("Hello Vu Phan");
	}
});

myApp.directive("message",function () {
	return function (scope,element,attrs) {
		element.bind('mouseenter',function () {
			//$scope nay co tac dung doi voi showMessage vi no nam trong Controller MessageController
			scope.showMessage();
		});
	}
})
//derective restrict co tac dung voi A:atribute,c:class,e:element