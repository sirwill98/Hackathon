"use strict";

var userId = "";
var recipientId = "";
var messages = [];

function downloadMessages(){
    displayMessages();
}

function displayMessages(){
    var previousMessages = document.getElementById("previousMessages");

    while(previousMessages.firstChild){
        previousMessages.removeChild(previousMessages.firstChild);
    }

    for(var i = 0; i < messages.length; i++){
        var message = JSON.parse(messages[i]);
        var messageHTML = "<span class='message'>"+message.sender +"<br>"+ message.message+"</span> <br> <br>";
        previousMessages.innerHTML = previousMessages.innerHTML + messageHTML;
    }
}

function sendMessage(message){
    if(message !== ""){
        var date = new Date();
        var m = {id: date.getTime() + Math.random(), sender:userId, recipient: recipientId, message:message};
        messages.push(JSON.stringify(m));

        // ajax nonsense

        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState === 4 && this.status === 200) {
                console.log("ITS WORKINNGGGGG");
            }
        };
        xhttp.open("POST", "chatServer.php", true);
        xhttp.send("test");

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

function setUserID(id){
    if(id === "user1"){
        userId = "user1";
        recipientId = "user2";
    } else {
        userId = "user2";
        recipientId = "user1";
    }
}


window.onload = initChat;