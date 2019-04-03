function DisplayDetails()
{
    var userName = getCookie("user");
    if(localStorage.getItem(userName))
    {
        var user = JSON.parse(localStorage.getItem(userName));
        document.getElementById("name").innerText = user.name;
        document.getElementById("email").innerText = user.email;
        document.getElementById("number").innerText = user.number;
        if(user.donor === true)
        {
            document.getElementById("donor").innerText = "You are a donor, Thank you";
        }
        else
        {
            document.getElementById("donor").innerText = "You are not currently a donor";
        }
    }
}