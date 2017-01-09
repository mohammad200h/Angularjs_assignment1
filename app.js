(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {

  $scope.Lunch_elements = " ";
  $scope.message = " ";
  //$scope.test_1 = " ";// SplitLunchElements(array)
  //$scope.test_2 = 0; // Count_Lunch_elements(array)

  $scope.CheckIfTooMuch = function () {
    var No_Lunch_Elements=Count_Lunch_elements($scope.Lunch_elements);
    var message = "LOOL ";

    if (No_Lunch_Elements <= 3){
      message = "enjoy!";
    }
    else{
      message = "Too much!";
    }

    $scope.message = message;
  //  $scope.test_1 = SplitLunchElements($scope.Lunch_elements);
  //  $scope.test_2 = Count_Lunch_elements($scope.Lunch_elements);
  };


}
    function Count_Lunch_elements(array) {
      var LunchElements= SplitLunchElements(array);
      var LengthOfLunchElements= LunchElements.length;

      return LengthOfLunchElements;
    }

    function SplitLunchElements(array){
      var Lunch_elements = array;
      var arrayOfElements = Lunch_elements.split(",");

      return arrayOfElements;
    }


})();
