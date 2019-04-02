function RegisterUser()
{
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var passwordConf = document.getElementById("passwordConf");

    if(password === passwordConf)
    {
        var user = {name:name, email:email, password:password};
        RegisterJSON(user);
    }
}