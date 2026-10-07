// Registration Form

const registrationForm = document.getElementById("registrationForm");

if (registrationForm) {

    registrationForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.getElementById("name").value;
        const eventName = document.getElementById("event").value;

        const registrationMessage =
            document.getElementById("registrationMessage");

        registrationMessage.textContent =
            "Thank you, " + name +
            "! You have successfully registered for " +
            eventName + ".";

        registrationMessage.style.color = "green";

        registrationForm.reset();
    });
}


// Contact Form

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const contactMessage =
            document.getElementById("contactMessage");

        contactMessage.textContent =
            "Thank you! Your message has been sent successfully.";

        contactMessage.style.color = "green";

        contactForm.reset();
    });
}