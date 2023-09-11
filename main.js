function sendMail() {
    console.log(3);
    var name = document.getElementById("form_name").value;
    var email = document.getElementById("form_email").value;
    var message = document.getElementById("get_text").value;

    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
        alert("Please fill in all required fields.");
    }
    else {
        var params = {
            name: name,
            email: email,
            message: message

        };
        const service_id = "service_53bmwad";
        const template_id = "template_1yskd2f";
        console.log(4);
        emailjs.send(service_id, template_id, params)
            .then(res => {
                console.log(5);
                name = "";
                email = "";
                message = "";
                console.log(6);
                console.log(res);
                alert("Your message sent successfully!");
            })
            .catch(err => {
                console.log("oops");
                console.error("Error sending email:", err);
                alert("There was an error sending your message. Please try again later.");
            });
    }

}