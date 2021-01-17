var app = angular.module('myApp', []);
app.controller('loginCtrl', function($scope){
    $scope.details = [ { id:0, userid: 'root', pass : 'root', dob :'root', gen:'root', emailid:'root'}];

    $scope.login = function(idx){ // login -- signin, fpassd -- fpass, signup -- signup
        if (idx == 'login'){
            try {
                $scope.check = {userid : $scope.login_txt, pass : $scope.login_pass};
                for (var i = 0;i<= $scope.details.length;i++){
                if($scope.details[i].userid ==  $scope.check.userid && $scope.details[i].pass ==  $scope.check.pass){
                    $scope.show_login = false;
                    $scope.show_change = true;
                    alert("You have Successfully Login");
                    $scope.change_txt = $scope.details[i].userid;
                    $scope.change_dob = $scope.details[i].dob;
                    $scope.change_gender = $scope.details[i].gen;
                    $scope.change_email = $scope.details[i].emailid;
                    $scope.change_chk = false;
                    break;
                } else {
                    erre = true;
                    continue;
                }
            } 
            } catch (error) {
                alert(error);
            }
        } else if (idx == 'fpass'){
            try {
                $scope.check = {userid : $scope.fpass_txt, dob : $scope.fpass_dob};
                for (var i = 0;i<= $scope.details.length;i++){
                    if($scope.details[i].userid ==  $scope.check.userid && $scope.details[i].dob ==  $scope.check.dob){
                        $scope.fpass_pass = $scope.details[i].pass; 
                        break;
                    } else {
                        continue;
                    }
            }   
            } catch (err) {
                alert(err);
            }   
        } else if(idx == 'signup'){
            var signup_add = {
                userid : $scope.signup_txt, 
                dob : $scope.signup_dob, 
                gen : $scope.signup_gender, 
                emailid : $scope.signup_email, 
                pass : $scope.signup_pass
            }
            $scope.details.push(signup_add);
            $scope.signup_txt = '', 
            $scope.signup_dob = '', 
            $scope.signup_gender = '', 
            $scope.signup_email = '', 
            $scope.signup_pass = '',
            $scope.signup_repass = ''
        }
        else if(idx == 'change'){
            var change_add = {
                userid : $scope.change_txt, 
                dob : $scope.change_dob, 
                gen : $scope.change_gender, 
                emailid : $scope.change_email, 
                pass : $scope.change_pass
            }
            $scope.details.push(change_add);
            $scope.change_txt = '', 
            $scope.change_dob = '', 
            $scope.change_gender = '', 
            $scope.change_email = '', 
            $scope.change_pass = '',
            $scope.change_repass = ''
        }
    };
    $scope.exit = function(id){
        $scope.login_txt = '';
        $scope.login_pass = '';
        if (id == 'login'){
            $scope.show_loginbtn = true;
            $scope.show_login = false;
            $scope.show_signup = false;
            $scope.show_fpass = false;
            $scope.show_change = false;
            $scope.login_txt = '';
            $scope.login_pass = ''
        } else if (id == 'fpass'){
            $scope.show_loginbtn = false;
            $scope.show_login = true;
            $scope.show_signup = false;
            $scope.show_fpass = false;
            $scope.show_change = false;
        } else{ 
            $scope.show_loginbtn = false;
            $scope.show_login = true;
            $scope.show_signup = false;
            $scope.show_fpass = false;
            $scope.show_change = false;
        }
    };
    $scope.fpass_page = function(){ // fpassd btn finc
        $scope.show_loginbtn = false;
        $scope.show_login = false;
        $scope.show_signup = false;
        $scope.show_fpass = true;
    };
    $scope.signup_page = function(){ // Signin btn finc
        $scope.show_loginbtn = false;
        $scope.show_login = false;
        $scope.show_signup = true;
        $scope.show_fpass = false;
    };
    $scope.test = function(pass,repass){
        if (pass != repass) {
            return true;
        } 
        else {
            return false;
        }
    }
});