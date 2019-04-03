function RegisterJSON(user)
{
    if(localStorage.getItem("user.email"))
    {

    }
    else
    {
        localStorage.setItem(user.name, JSON.stringify(user));
        window.open("login.html", "_self");
    }
}

