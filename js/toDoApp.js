var toDoApp = angular.module('toDoApp', []);

toDoApp.controller('toDoCtrl', function($scope) {
	$scope.saved = localStorage.getItem('toDoList');
	$scope.toDoList = (localStorage.getItem('toDoList')!=null) ? JSON.parse($scope.saved): [];
	if(localStorage.getItem('toDoList') == null)localStorage.setItem('toDoList', JSON.stringify($scope.toDoList));

	
    

    $scope.toDoAdd = function() {
    	$scope.toDoList.push({text:$scope.toDoInput,done:false});
        $scope.toDoInput = "";
		localStorage.setItem('toDoList', JSON.stringify($scope.toDoList));
   };

    $scope.remove = function() {
        var oldList = $scope.toDoList;
        localStorage.removeItem('toDoList');
        $scope.toDoList = [];
        angular.forEach(oldList, function(x) {
            if (!x.done) $scope.toDoList.push({text:x.text,done:x.done});
        });
        localStorage.setItem('toDoList', JSON.stringify($scope.toDoList));
    };
    
});