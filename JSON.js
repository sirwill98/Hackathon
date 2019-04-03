/**
 * @return {boolean}
 */
function RegisterJSON(user)
{
    if(localStorage.getItem("user.username") != null)
    {
        return false;
    }
    else
    {
        localStorage.setItem(user.username, JSON.stringify(user));
        window.open("login.html", "_self");
    }
}

