function sendMessage() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value;

    if (!name || !email || !subject || !message) {
        document.getElementById("msg-status").style.color = "red";
        document.getElementById("msg-status").innerHTML = "Please fill all fields.";
        return;
    }

    // For now just show success message
    document.getElementById("msg-status").style.color = "green";
    document.getElementById("msg-status").innerHTML = "Message sent successfully!";
}
