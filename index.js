function submit() {
    let username = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (username == "" || email == "" || message == "") {
        alert("Please fill out all fields.");
        return false;
    } else if (!email.endsWith("@gmail.com")) {
        alert("Email must end with @gmail.com");
        return false;
    } else {
        alert("Form submitted successfully.");
        return true;
    }
}