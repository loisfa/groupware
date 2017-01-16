
console.log("failure 2");

app.controller('meetupsController', ['$scope', '$resource',
function($scope, $resource) {
    $scope.meetups = [
      {name: "loisfa"},
      {name: "loisfa 2"}
    ];

    $scope.createMeetup = function() {
        if ($scope.meetupName!='') {
        $scope.meetups.push({name: $scope.meetupName});
        $scope.meetupName ='';
      }
    };
}]);
