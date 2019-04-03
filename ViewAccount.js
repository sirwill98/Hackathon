function DisplayDetails()
{
    var userName = getCookie("user");
    if(localStorage.getItem(userName))
    {
        var user = JSON.parse(localStorage.getItem(userName));
        document.getElementById("name").innerHTML = user.name;
        document.getElementById("age").innerHTML = user.age;
        document.getElementById("email").innerHTML = user.email;
        document.getElementById("number").innerHTML = user.number;
        if(user.donor === true)
        {
            document.getElementById("donor").innerHTML = "You are a donor, Thank you";
        }
        else
        {
            document.getElementById("donor").innerHTML = "You are not currently a donor";
        }
    }
}