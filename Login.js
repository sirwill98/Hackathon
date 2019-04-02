function login()
{
    var name = document.getElementById("name");
    var pass = document.getElementById("password");
    if(checkJSON(name, pass))
    {
        setCookie("user", name, 7);
        window.open("index.html", "_self");
    }
    else
    {
        document.getElementById("errorMsg").innerHTML = "login invalid!";
    }
}
