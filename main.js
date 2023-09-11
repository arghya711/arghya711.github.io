function sendMail(){
    console.log(3);
    var params = {
        name : document.getElementById("form_name").value,
        email : document.getElementById("form_email").value,
        message : document.getElementById("get_text").value

    };
    const service_id  = "service_53bmwad";
    const template_id = "template_1yskd2f";
    console.log(4);
    emailjs.send(service_id, template_id, params)
    .then(res => {
        console.log(5);
        document.getElementById("form_name").value = "";
        document.getElementById("form_email").value = "";
        document.getElementById("get_text").value = "";
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