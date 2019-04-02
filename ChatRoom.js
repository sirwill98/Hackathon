"use strict";

var messages = [{user: "user1", message:"Hello"}, {user:"user2", message:"Hello back"}];

function downloadMessages(){
    displayMessages();
}

function displayMessages(){
    var previousMessages = document.getElementById("previousMessages");

    while(previousMessages.firstChild){
        previousMessages.removeChild(previousMessages.firstChild);
    }

    for(var i = 0; i < messages.length; i++){
        if(messages[i].user === 'user1'){
            var messageHTML = "<span class='messageRight' >"+messages[i].user +"<br>"+ messages[i].message+"</span> <br> <br>";
        } else {
            var messageHTML = "<span class='messageLeft' >"+messages[i].user +"<br>"+ messages[i].message+"</span> <br> <br>";
        }
        previousMessages.innerHTML = previousMessages.innerHTML + messageHTML;
    }
}

function sendMessage(message){
    if(message !== ""){
        messages.push({user:"user1", message: message});
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