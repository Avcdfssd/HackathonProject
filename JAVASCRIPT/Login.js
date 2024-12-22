
function checkLoginInfo(userType) {
    
    url = '../../PHP/user.php';
    if(userType == "doctor") {
        url = '../../PHP/doctor.php';
    }

    
    username = $('#username').val();
    password = $('#password').val();

    if(userType != 'users') {
        username = userType;

    } 
    
    $.ajax({
         
        url:url,
        method:'POST',
        data : {
            action:'login',
            username:username,
            password:password
        },

        success:(response)=>{
         
            if(response == "1" || userType != "users") {
                sessionStorage.setItem("login",true);
                sessionStorage.setItem('username',username);
                sessionStorage.setItem('userType',userType);
               
                window.location.href = '../../index.html'
               

             
            }
            else {
                alert("Incorrect username or password");
            }
          
            

        }

    });


}

