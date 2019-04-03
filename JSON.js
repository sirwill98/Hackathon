function RegisterJSON(user)
{
    if(localStorage.getItem("user.username") != null)
    {
        document.getElementById("error_lbl").innerText = "this user already exists"
    }
    else
    {
        localStorage.setItem(user.username, JSON.stringify(user));
        window.open("login.html", "_self");
    }
}

