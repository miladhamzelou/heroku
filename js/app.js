var app=angular.module('myApp', []);

app.controller('get', ['$scope','$interval', '$timeout', function ($scope,$interval, $timeout) {	

localStorage.setItem("number1","00000000");
localStorage.setItem("number2","00000000000");
localStorage.setItem("showNumber",false);
localStorage.setItem("startAnimation",false);



	$interval(function(){
		$scope.number1 = localStorage.getItem("number1");
		$scope.number2 = localStorage.getItem("number2");


		$scope.startAnimation = localStorage.getItem("startAnimation");

		if(localStorage.getItem("showNumber")== "true"){
			$scope.number = $scope.number2;	
		}else{
			$scope.number = undefined;
		}	

		
	}, 10);

	$scope.number = undefined;

	$interval(function(){
		if($scope.startAnimation == "true")
			letsRoll($scope.number);		
	}, 100);

	function getRandNumbe () {
		return Math.floor((Math.random() * 9) + 0);
	}

  	function letsRoll(number) {	
  		var array =[];

  		 if(!angular.isUndefined(number)){
  		   array =  (""+number).split("");
  		 }  		
		  document.getElementById("roll1").innerHTML = array[0] ? array[0] : getRandNumbe();
		  document.getElementById("roll2").innerHTML = array[1] ? array[1] : getRandNumbe();
		  document.getElementById("roll3").innerHTML = array[2] ? array[2] : getRandNumbe();
		  document.getElementById("roll4").innerHTML = array[3] ? array[3] : getRandNumbe();
		  document.getElementById("roll5").innerHTML = array[4] ? array[4] : getRandNumbe();
		  document.getElementById("roll6").innerHTML = array[5] ? array[5] : getRandNumbe();
		  document.getElementById("roll7").innerHTML = array[6] ? array[6] : getRandNumbe();
		  document.getElementById("roll8").innerHTML = array[7] ? array[7] : getRandNumbe();
		  document.getElementById("roll9").innerHTML = array[8] ? array[8] : getRandNumbe();
		  document.getElementById("roll10").innerHTML = array[9] ? array[9] : getRandNumbe();
		  document.getElementById("roll11").innerHTML = array[10] ? array[10] : getRandNumbe();
	}



}]);

app.controller('post', ['$scope', function ($scope) {
	$scope.getNumber1 = function  (number1) {
		localStorage.setItem("number1",number1);
	}
	$scope.getNumber2 = function  (number2) {
		if(localStorage.getItem("startAnimation")== "true")
		if(number2 == undefined || number2== "")
		 	localStorage.setItem("number2","00000000000");
		else
			localStorage.setItem("number2",number2);
	}


	$scope.send= function  () {
		localStorage.setItem("showNumber",true);
	var num = document.getElementById("number2").value;
	if(num != '')
		localStorage.setItem("number2",num);
	else
		localStorage.setItem("number2","00000000000");
	};

	
	$scope.startAnimation= function () {		
		localStorage.setItem("number2","00000000000");
		localStorage.setItem("showNumber",false);
		localStorage.setItem("startAnimation",true);
	}

	$scope.reset= function () {		
		localStorage.setItem("number2","00000000000");
		localStorage.setItem("number1","00000000");
		localStorage.setItem("showNumber",true);
		localStorage.setItem("startAnimation",true);
	}
}]);