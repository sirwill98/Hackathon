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
    else
    {
        document.getElementById("error_msg").innerText = "no account found, you can register using the link below";
    }
}
