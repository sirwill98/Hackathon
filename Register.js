function RegisterUser()
{
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var passwordConf = document.getElementById("passwordConf").value;
    var number = document.getElementById("number").value;
    var donor = false;
    var d = new Date();
    var uid = d.getTime();
    uid = uid/name.length;
    uid = Math.round(uid);

    if(password === passwordConf)
    {
        var user = {name:name, email:email, password:password, uid:uid, donor:donor, number:number};
        RegisterJSON(user);
    }
}