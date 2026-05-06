<script>
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let subject = document.getElementById("subject").value.trim();
    let message = document.getElementById("message").value.trim();
    let formMessage = document.getElementById("formMessage");

    if(name === "" || email === "" || subject === "" || message === ""){
        formMessage.style.color = "red";
        formMessage.textContent = "Please fill in all fields.";
        return;
    }

    if(!email.includes("@")){
        formMessage.style.color = "red";
        formMessage.textContent = "Please enter a valid email.";
        return;
    }
	

    formMessage.style.color = "lightgreen";
    formMessage.textContent = "Message sent successfully!";

    document.getElementById("contactForm").reset();
});
</script>