const errorColor = "#FF6863";

function SendEmail() {
    const customerName = document.getElementById('fname');
    const customerEmail = document.getElementById('email');
    const customerMessage = document.getElementById('message');
    var submitButton = document.getElementById('send');

    if (customerName.value == "") {
        customerName.style.backgroundColor = errorColor;            ;
    }
    else {
        customerName.style.backgroundColor = "white";
    }

    if (customerEmail.value == "" || !customerEmail.value.includes("@") || !customerEmail.value.includes(".")) {
        customerEmail.style.backgroundColor = errorColor; 
    }
    else {
        customerEmail.style.backgroundColor = "white";
    }

    if (customerMessage.value == "") {
        customerMessage.style.backgroundColor = errorColor; 
    }
    else {
        customerMessage.style.backgroundColor = "white";
    }

    if (customerName.value != "" && customerEmail.value != "" && customerMessage.value != "") {
        submitButton.value = "Sent!";
    }
}
