'use strict';

(function(){
	var werewolfApp = angular.module('werewolfApp',['ui.router'])
	werewolfApp.config(function($stateProvider, $urlRouterProvider){

		$urlRouterProvider.otherwise(function ($injector, $location) {
			return ("/form");
		});

		$stateProvider
		.state('form', {
		url:"/form",
		templateUrl: "views/form.html"
		})

		// .state('education', {
		// 	url: '/education',
		// 	templateUrl: 'templates/education.html'
		// })

		// .state('interests', {
		// 	url: '/interests',
		// 	templateUrl: 'templates/interests.html'
		// })
	});
	// setTimeout(function(){
	// 	var oldHash = window.location.hash
	// 	console.log('manually triggering a hash change event in a hacky way')
	// 	window.location.hash = '#asdf';
	// 	window.location.hash = oldHash;
	// },1000)

	
})();
