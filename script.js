var app=angular.module("myApp",[]);
app.controller("myController",function($scope){
    $scope.tasks=[
        {name:"Attend Class"},
        {name:"Complete Assignment"},
        {name:'Study for CIE-I'}
    ];
    $scope.newTaskName='';
    $scope.editingTask=null;
    $scope.editedTaskName='';
    $scope.tasklen=$scope.tasks.length;
    $scope.addTask=function(){
        if($scope.newTaskName)
        {
            $scope.tasks.push({name:$scope.newTaskName});
            $scope.newTaskName="";
            $scope.tasklen=$scope.tasks.length;
            
        }
    };
  
    $scope.deleteTask=function(task){
        var index=$scope.tasks.indexOf(task);
        if(index!=-1)
        {
            $scope.tasks.splice(index,1);
            $scope.tasklen=$scope.tasks.length;
        }
    };

});