var app = angular.module("myApp",[]);

app.controller("ctrl", function($scope){
    $scope.users = [];
    $scope.add = function(){
        var add = {
            id : $scope.IDs, 
            firstname: $scope.firstName, 
            lastname:$scope.lastName, 
            emailid:$scope.email,
            paswd:$scope.pass,
        }
        $scope.users.push(add);
        $scope.IDs = "";
        $scope.firstName = "";
        $scope.lastName = "";
        $scope.email = "";
        $scope.pass = "";
        $scope.repass = "";
        $scope.shownew = false;
    }
    $scope.remove = function(){
        $scope.users.splice($scope.IDs-1,1);
        $scope.showedit = false;
    }
    $scope.test = function(){
        if ($scope.pass != $scope.repass) {
            return true;
        } 
        else {
            return false;
        }
    }
    $scope.check = function(id){
            var i = 0;
            var ids = 0;
            for( i=0;i <= $scope.users.length; i++ ){
                ids = i+1;
            };
            if (id == 'new'){
            $scope.shownew = true;
            $scope.showedit = false;
            $scope.IDs = ids;
            $scope.firstName = '';
            $scope.lastName = '';
            $scope.email = '';
            $scope.paswd = '';
        }
        else{
            $scope.showedit = true;
            $scope.shownew = false;
            $scope.IDs  = $scope.users[id-1].id;
            $scope.firstName = $scope.users[id-1].firstname;
            $scope.lastName = $scope.users[id-1].lastname;
            $scope.email = $scope.users[id-1].emailid;
            $scope.pass = $scope.users[id-1].paswd;
            
        }
    }
    $scope.edit = function(){
        $scope.users.splice($scope.IDs-1,1);
        var add = {
            id : $scope.IDs, 
            firstname: $scope.firstName, 
            lastname:$scope.lastName, 
            emailid:$scope.email
        }
        $scope.users.push(add);
        $scope.showedit = false;
    }
})