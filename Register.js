function RegisterUser()
{
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var passwordConf = document.getElementById("passwordConf").value;
    console.log("test");

    if(password === passwordConf)
    {
        var user = {name:name, email:email, password:password};
        RegisterJSON(user);
    }
}