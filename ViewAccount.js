function DisplayDetails()
{
    var userName = getCookie("user");
    if(localStorage.getItem(userName))
    {
        var user = JSON.parse(localStorage.getItem(userName));
        document.getElementById("name").innerHTML += user.name;
        document.getElementById("age").innerHTML += user.age;
        document.getElementById("email").innerHTML += user.email;
        document.getElementById("number").innerHTML += user.number;
        if(user.donor === true)
        {
            document.getElementById("donor").innerHTML += "You are a donor, Thank you";
        }
        else
        {
            document.getElementById("donor").innerHTML += "You are not currently a donor";
        }
    }
    document.getElementById("nameIn").placeholder += user.name;
    document.getElementById("ageIn").placeholder += user.age;
    document.getElementById("emailIn").placeholder += user.email;
    document.getElementById("numberIn").placeholder += user.number;
}

function editInfo(){
    document.getElementById("infoForm").style.visibility = "visible";
}

function UpdateDetails()
{
    var name = document.getElementById("nameIn").value;
    var age = document.getElementById("ageIn").value;
    var email = document.getElementById("emailIn").value;
    var pass1In = document.getElementById("pass1In").value;
    var pass2In = document.getElementById("pass2In").value;
    var numberIn = document.getElementById("numberIn").value;

    if(pass1In === pass2In)
    {
        var userName = getCookie("user");
        if(localStorage.getItem(userName))
        {
            var user = JSON.parse(localStorage.getItem(userName));
            if(name !== null && name !== "")
            {
                if(user.name !== name)
                {
                    user.name = name;
                }
            }
            if(age !== null && age !== "")
            {
                if(user.age !== age)
                {
                    user.age = age;
                }
            }
            if(email !== null && email !== "")
            {
                if(user.email !== email)
                {
                    user.email = email;
                }
            }
            if(pass1In !== null && pass1In !== "")
            {
                if(user.password !== pass1In)
                {
                    user.password = pass1In;
                }
            }
            if(numberIn !== null && numberIn !== "")
            {
                if(user.number !== numberIn)
                {
                    user.number = numberIn;
                }
            }
            localStorage.setItem(user.username, JSON.stringify(user));
            window.open("UserAccountPage.html", "_self");
        }
    }
}
