window.angular.module('ngff.controllers.players', [])
    .controller('PlayersController', ['$scope', '$location', 'Global', 'NFL', 'Players',
        function ($scope, $location, Global, NFL, Players) {
            $scope.global = Global;
             
            $scope.positions = NFL.positions;
            $scope.nflteams = NFL.teams;
            $scope.limitct = 10;
            
            $scope.create = function () {
                var players = new Players({
                    name: this.players.name,
                    pos: this.players.pos,
                    num: this.players.num,
                    team: this.players.team
                });
                
                players.$save(function (response) {
                    // $location.path("players/" + response._id);
                    $location.path("players/");
                });
                 
                this.players.name = "";
                this.players.pos = "";
                this.players.num = "";
                this.players.team = "";
            };

            $scope.find = function (query) {
                Players.query(query, function (players) {
                    $scope.players = players;
                })
            }
        }]);