(function(angular){
	var serviceUrl = 'http://localhost:1337/rest/v1';
	
	//main app module
	var mtgApp = angular.module('mtgRanking', ['ngResource', 'ngRoute']);
	
	//routing config
	mtgApp.config(function($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl : 'matches.html'
			})
			.when('/matches', {
				templateUrl : 'matches.html'
			})
			.when('/players', {
				templateUrl : 'players.html',
				controller : 'MtgPlayerController'
			});
	});
	
	//player view controller
	mtgApp.controller("MtgPlayerController", function($scope, $resource){
		
		var mtgRankingPlayers = $resource(serviceUrl + '/players/:playerId', {playerId: "@id"}, {});
		$scope.players = mtgRankingPlayers.query();
		
		$scope.submit = function(){
			$scope.messages = undefined;
			var player = new mtgRankingPlayers({
					firstname: $scope.form.firstname,
					lastname: $scope.form.lastname
			});
			player.$save({}, function(value, responseHeaders){
				if(value.exists){
					$scope.messages = "player already exists";
				}else if(value.added){
					$scope.players = mtgRankingPlayers.query();
				}
			});
		};
		// match view controller
	}).controller("MtgMatchController", function($scope, $resource){
		$scope.parseTimeStamp = function(timestamp){
			return new Date(timestamp).toLocaleString();
		};
		
		var mtgRankingMatches = $resource(serviceUrl + '/matches/:matchId', {matchId: "@id"}, {});
		$scope.matches = mtgRankingMatches.query();
	})
		// navigation bar controller
	.controller("NavController", function($scope, $location){
		$scope.isActive = function(viewLocation){
			return viewLocation === $location.path();
		};
	});
})(angular);