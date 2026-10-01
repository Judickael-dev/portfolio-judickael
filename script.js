// ========================================
// EMAILJS INITIALIZATION
// ========================================

emailjs.init({
    publicKey: "XdPlBfhOHsqZfzB1-"
});


// ========================================
// ELEMENTS
// ========================================

const form = document.getElementById("contact-form");

const button = document.getElementById("btn");

const buttonText = document.getElementById("btn-text");

const statusMessage = document.getElementById("form-status");


// ========================================
// SEND FORM
// ========================================

form.addEventListener("submit", function (event) {

    event.preventDefault();


    // -------------------------------
    // Loading state
    // -------------------------------

    button.disabled = true;

    button.classList.add("loading");

    buttonText.textContent = "Envoi en cours...";

    statusMessage.textContent = "";

    statusMessage.className = "";


    // -------------------------------
    // Send with EmailJS
    // -------------------------------

    emailjs.sendForm(
        "service_v0o5brr",
        "template_9kx5te8",
        form
    )

    .then(function (response) {

        console.log(
            "Message envoyé avec succès :",
            response.status,
            response.text
        );


        // Success message

        statusMessage.textContent =
            "✓ Votre message a été envoyé avec succès !";

        statusMessage.className = "success";


        // Empty form

        form.reset();

    })

    .catch(function (error) {

        console.error(
            "Erreur EmailJS :",
            error
        );


        statusMessage.textContent =
            "✕ Une erreur est survenue. Veuillez réessayer.";

        statusMessage.className = "error";

    })

    .finally(function () {

        // Restore button

        button.disabled = false;

        button.classList.remove("loading");

        buttonText.textContent =
            "Envoyer le message";

    });

});


document.addEventListener("DOMContentLoaded", function () {

    const links = document.querySelectorAll(".nav-link");

    links.forEach(link => {

        link.addEventListener("click", function (e) {

            e.preventDefault();

            const targetId = this.dataset.target;
            const target = document.getElementById(targetId);

            if (!target) return;

            const header = document.querySelector("header");
            const headerHeight = header ? header.offsetHeight : 0;

            const targetPosition =
                target.getBoundingClientRect().top +
                window.pageYOffset -
                headerHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: "smooth"
            });

        });

    });

});
