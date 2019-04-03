function RegisterUser()
{
    var name = document.getElementById("name").value;
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var passwordConf = document.getElementById("passwordConf").value;
    var number = document.getElementById("number").value;
    var age = document.getElementById("age").value;
    var donor = false;
    var d = new Date();
    var uid = d.getTime();
    uid = uid/name.length;
    uid = Math.round(uid);

/*    var day = dob.getDate();
    var month = dob.getMonth();
    var year = dob.getFullYear();*/

    if((age >= 16) && (age <= 60))
    {
        if(password === passwordConf)
        {
            var user = {name:name, email:email, username:username ,password:password, uid:uid, donor:donor, number:number, age:age};
            for (var member in user)
            {
                if (user[member] == null)
                {
                    document.getElementById("error_lbl").innerText = "All fields must be complete to create a user";
                }
                else
                {
                    if(RegisterJSON(user) === false)
                    {
                        document.getElementById("error_lbl").innerText = "A user with this email already exists";
                    }
                }
            }
        }
        else
        {
            document.getElementById("error_lbl").innerText = "Passwords do not match";
        }
    }
    else
    {
        document.getElementById("error_lbl").innerText = "Must be over 16 to register and Must be under 60";
    }
}