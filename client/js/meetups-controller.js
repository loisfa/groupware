app.controller('meetupsController', ['$scope', '$resource',
function($scope, $resource) {
    var Meetup = $resource('api/meetups');
    // cf dans server.js app.use(...)

    Meetup.query(function (results) {
      $scope.meetups = results;

    $scope.createMeetup = function() {
      var meetup = new Meetup();
      meetup.name = $scope.meetupName;
      meetup.$save(function (result) {
        console.log("ajouté");
        $scope.meetups.push(result);
        $scope.meetupName = '';
      });
    };
  })

  randomColor = function()  {
    var randomNumber = Math.random();
    var hslColor = "hsl("+randomNumber* 360+", 100%, 30%)";
    return hslColor;
  }

  $scope.contacts = [];
  $scope.contacts.push({name: 'Bobby', id: 'contact1', color: randomColor()});
  $scope.contacts.push({name: 'Franky', id: 'contact2', color: randomColor()});
  $scope.contacts.push({name: 'Joe', id: 'contact3', color: randomColor()});
  $scope.contacts.push({name: 'Chuck', id: 'contact4', color: randomColor()});


}]);
