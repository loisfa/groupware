app.controller('meetupsController', ['$scope', '$resource',
function($scope, $resource) {
    var Meetup = $resource('api/meetups');
    // cf dans server.js app.use(...)

    Meetup.query(function (results) {
      $scope.meetups = results;
    })

    $scope.createMeetup = function() {
      var meetup = new Meetup();
      meetup.name = $scope.meetupName;
      meetup.$save(function (result) {
        console.log("ajouté");
        $scope.meetups.push(result);
        $scope.meetupName = '';
      });
    };
}]);
