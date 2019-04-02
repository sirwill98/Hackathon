function login()
{
    var name = document.getElementById("name").value;
    var pass = document.getElementById("password").value;
    console.log("5");
    var users2 = usersCreate();
    for(var i = 0; i < users2.length; i++)
    {
        if(users2[i].name === name && users2[i].password === pass)
        {
            setCookie("user", name, 7);
            window.open("index.html", "_self");
        }
    }
}
