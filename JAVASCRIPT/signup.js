
function checkLoginInfo() {

    username = $('#username').val();
    password = $('#password').val();
    email = $('#email').val();
    phone = $('#phone').val();

    $.ajax({
         
        url:'../../PHP/user.php',
        method:'POST',
        data : {
            action:'register',
            username:username,
            password:password,
            email:email,
            phone:phone

        },

        success:(response)=>{

           alert(response);
        }

    });


}

