function login()
{
    var name = document.getElementById("name").value;
    var pass = document.getElementById("password").value;
    if(localStorage.getItem(name))
    {
        var user = JSON.parse(localStorage.getItem(name));
        if(user.password === pass)
        {
            setCookie("user", name, 7);
            window.open("index.html", "_self");
        }
    }
}
