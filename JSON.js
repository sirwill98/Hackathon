function RegisterJSON(user)
{
    if(localStorage.getItem("user.name"))
    {

    }
    else
    {
        localStorage.setItem(user.name, JSON.stringify(user));
        window.open("login.html", "_self");
    }
}

