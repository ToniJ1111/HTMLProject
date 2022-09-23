// index.js

import Contact from "./contact.js";

// var number = 5;
// let name = "Toni";

// number = 12
// name = "Mars "

//Writing to doc
// document.writeln(name + number);
// alert("Hello World")

//DOM object cannot exist with 'form'; should be at top of doc 
const formInfo = document.getElementById("formInfo");

let hasJob = false;
if (hasJob) {
    //I have a job
    //changed document.writeln to showMessage
    showMessage("Thanks for visiting, I'm currently employed.");
} else {
    // I need a job
    showMessage("Please look around. I'm currently looking for a position");
}

let today = new Date();
let dayOfWeek = today.getDay();

// || = or, && = both need to be true
if (dayOfWeek === 0 || dayOfWeek === 6) {
    showMessage("OOO and will return all emails upon my return");
}

function showMessage(message) {
    formInfo.innerHTML = "<p>" + message + "</p>"

    //document.writeln("<p>" + message + "</p>"); replaced by line above
    //inserts line underneath
    //document.writeln("<hr/>")

    function clearMesage() {
        formInfo.innerHTML = "";
    }

}

const first = "first";

const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const contact = new Contact(contactForm);
    contact.send();
    //showMessage("Message Sent...Thanks! " + contact.fullName); replaced using line above
});

/*function sendMessage(){
   showMessage("Please wait, sending email.")
}*/

const experience = document.getElementsByClassName("experience");
for (let x = 0; x < experience.length; x++) {
    const item = experience[x];
    item.addEventListener("mouseenter", function (event) {
        event.target.style = "background-color:#D3D3D3;";
    });
    item.addEventListener("mouseleave", function (event) {
        event.target.style = "";
    });
}


