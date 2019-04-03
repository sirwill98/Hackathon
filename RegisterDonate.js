function ContinueToStep2()
{
    //Continue to step 2
    window.open("RegisterDonateStep2.html", "_self");

}

function ContinueToStep3()
{
    //Continue to step 3
    window.open("RegisterDonateStep3.html", "_self");

}

function ContinueToStep4()
{
    //Continue to step 3
    window.open("RegisterDonateStep4.html", "_self");

}
function ContinueToStep5()
{
    //Continue to step 3
    window.open("RegisterDonateStep5.html", "_self");

}
function ContinueToStep6()
{
    //Continue to step 3
    window.open("RegisterDonateStep6.html", "_self");

}
function ContinueToStep7()
{
    //Continue to step 3
    window.open("RegisterDonateStep7.html", "_self");

}
function ContinueToStep8()
{
    //Continue to step 3
    window.open("RegisterDonateStep8.html", "_self");

}
function ContinueToHome()
{
    //Continue to step 3
    window.open("index.html", "_self");

}

function removeElement(elementId) {
    // Removes an element from the document
    var element = document.getElementById(elementId);
    element.parentNode.removeChild(element);
}

function DonateAgeYes()
{
    removeElement("Age");
    document.getElementById("AgeSuccess").style.visibility = "visible";
    document.getElementById("LocationLabel").style.visibility = "visible";
    document.getElementById("Location").style.visibility = "visible";
}

function DonateAgeNo()
{
    document.getElementById("Age").style.visibility = "hidden";
    document.getElementById("AgeFailure").style.visibility = "visible";
}

function DonateLocationYes()
{
    removeElement("Location");
    document.getElementById("LocationSuccess").style.visibility = "visible";
    document.getElementById("AttributesLabel").style.visibility = "visible";
    document.getElementById("Attributes").style.visibility = "visible";
    document.getElementById("Continue").style.visibility = "visible";
}

function DonateLocationNo()
{
    document.getElementById("Location").style.visibility = "hidden";
    document.getElementById("LocationFailure").style.visibility = "visible";
}

function SubmitAttributes()
{

}

function HealthOK()
{
    removeElement("Health");
    document.getElementById("Healthy").style.visibility = "visible";
    document.getElementById("DrugsLabel").style.visibility = "visible";
    document.getElementById("Drugs").style.visibility = "visible";
}

function HealthNotOK()
{
    document.getElementById("Health").style.visibility = "hidden";
    document.getElementById("NotHealthy").style.visibility = "visible";

}

function DrugsYes()
{
    document.getElementById("Drugs").style.visibility = "hidden";
    document.getElementById("TakenDrugs").style.visibility = "visible";
}

function DrugsNo()
{
    removeElement("Drugs");
    document.getElementById("NoDrugs").style.visibility = "visible";
    document.getElementById("MedicalConditionsLabel").style.visibility = "visible";
    document.getElementById("MedicalConditions").style.visibility = "visible";
}

function MedicalConditionsYes()
{
    document.getElementById("MedicalConditionsLabel").style.visibility = "hidden";
    document.getElementById("MedicalConditions").style.visibility = "hidden";
    document.getElementById("ConditionsNotOK").style.visibility = "visible";
}

function MedicalConditionsNo()
{
    removeElement("MedicalConditions");
    document.getElementById("ConditionsOK").style.visibility = "visible";
    document.getElementById("ContinueToStep3").style.visibility = "visible";
}