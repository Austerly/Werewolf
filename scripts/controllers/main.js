'use strict';

angular.module('werewolfApp').controller('MainCtrl',
 function($scope){
	//Everything happens here:
	$scope.test = "Hello World";
	$scope.scender = "cows";
	$scope.gameTitleInput;
	$scope.gameTitle = "What game are we playing today?";
	$scope.totalCards = 0;
	$scope.currentCard;
	// $scope.sorter = 'name';
	// $.getJSON('https://s3.amazonaws.com/intuiplan_company_files/production/files/public/FriendData.json', function(myJsonDataFromServer){
	// 	$scope.friends = myJsonDataFromServer.results;
	// 	$scope.$apply(function(){
	// 		$scope.friends = my.results;
	// 	});
	// });
		});