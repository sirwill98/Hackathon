"use strict";

var coll = document.getElementsByClassName("infoCollapsible");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight){
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}

Notification.requestPermission(function(status) {
    console.log('Notification permission status:', status);
});

function displayNotification() {
    if (Notification.permission === 'granted') {
        navigator.serviceWorker.register('empty.js');
        navigator.serviceWorker.ready.then(function (reg) {
            reg.showNotification('Hello world!');
        });
    }
}

setInterval(displayNotification, 3000);