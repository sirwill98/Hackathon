"use strict";

var messages = [];
var responses = [
    {id: "0", user: "user2", message: "Hello! How can I help?"},
    {id: "1", user: "user2", message: "Don't worry all of our bone marrow transplants are done " +
            "under general anesthetic so you won't feel anything during the procedure. " +
            "You may be a little sore afterwards but some paracetamol will sort you right out."},
    {id: "2", user: "user2", message: "We will never sell or pass on your personal information " +
            "to third parties for their own marketing purposes."},
    {id:"3", user:"user2", message: "While your stem cells may be used to help a patient anywhere" +
            " in the world, the donations always take place in the UK."},
    {id:"4", user: "user2", message: "I'm sorry I don't quite know what you mean. The answer might be" +
            " in our FAQ section and if not you can try our website https://www.anthonynolan.org/ "}
];

function downloadMessages(){
    displayMessages();
}

function displayMessages(){
    var previousMessages = document.getElementById("previousMessages");

    while(previousMessages.firstChild){
        previousMessages.removeChild(previousMessages.firstChild);
    }

    for(var i = 0; i < messages.length; i++){
        var messageHTML;
        if(messages[i].user === 'user1'){
            messageHTML = "<span class='messageRight' >"+messages[i].user +"<br>"+ messages[i].message+"</span> <br> <br>";
        } else {
            messageHTML = "<span class='messageLeft' >"+messages[i].user +"<br>"+ messages[i].message+"</span> <br> <br>";
        }
        previousMessages.innerHTML = previousMessages.innerHTML + messageHTML;
    }
}

function selectResponse(message){
    var greetingResponse, privacyResponse, painResponse, locationResponse;

    console.log(message);

    greetingResponse = messages.length === 1;

    privacyResponse = contains(message, "cookie") ||
        contains(message, "data") ||
        contains(message, "privacy") ||
        contains(message, "information");

    painResponse = contains(message, "pain") ||
        contains(message, "hurt") ||
        contains(message, "sore") ||
        contains(message, "eternal suffering") ||
        contains(message, "uncomfortable");

    locationResponse = contains(message, "location") ||
        contains(message, "where");

    if(greetingResponse){
        messages.push(responses[0]);
        displayMessages();
    }

    if(privacyResponse){
        messages.push(responses[2]);
        displayMessages();
    }

    if(painResponse){
        messages.push(responses[1]);
        displayMessages();
    }

    if(locationResponse){
        messages.push(responses[3]);
        displayMessages();
    }

    if(!greetingResponse && !privacyResponse && !painResponse && !locationResponse){
        messages.push(responses[4]);
        displayMessages();
    }
}

function contains(message, key){
    return message.indexOf(key) !== -1;
}

function sendMessage(message){
    if(message !== ""){
        messages.push({user:"user1", message: message});
        selectResponse(message);
        displayMessages();
        document.getElementById("message").value = "";
    }
}

function initChat(){
    var input = document.getElementById("input");
    var messageBox = document.getElementById("message");
    messageBox.focus();
    document.getElementById("sendButton").addEventListener("click", function() {
        sendMessage(messageBox.value);
    });

    input.addEventListener("keyup", function (event) {
        if(event.keyCode === 13){
            event.preventDefault();
            sendMessage(messageBox.value);
        }
    });

    downloadMessages();

    setInterval(downloadMessages, 3000);
}

window.onload = initChat;