var app = angular.module("mainApp", []);

app.controller("CRUDController", function($scope){

	$scope.EmpList = [];
	
	$scope.AddData = function(){
		var emp = {
			Id:$scope.EmpList.length + 1,
			Name:$scope.Name,
			Salary:$scope.Salary,
			Phone:$scope.Phone
		};

		$scope.EmpList.push(emp);
		ClearModel();
	};

	$scope.DeleteData = function(emp){
		var index = $scope.EmpList.indexOf(emp);
		$scope.EmpList.splice(index,1);
	}

	$scope.BindSelectedData = function(emp){
		$scope.Id=emp.Id;
		$scope.Name=emp.Name;
		$scope.Salary=emp.Salary;
		$scope.Phone=emp.Phone
	};

	$scope.UpdateData = function(){
		$.grep($scope.EmpList, function(e){
			if(e.Id == $scope.Id)
			{
				e.Name = $scope.Name;
				e.Salary = $scope.Salary;
				e.Phone = $scope.Phone;
			}
		});

	};

	function ClearModel(){
		$scope.ID = '';
		$scope.Name='';
		$scope.Salary='';
		$scope.Phone='';
	};
});
