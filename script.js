// ========================================
// EMAILJS INITIALIZATION
// ========================================

emailjs.init({
    publicKey: "XdPlBfhOHsqZfzB1-"
});


// ========================================
// DOM ELEMENTS
// ========================================

const form = document.getElementById("contact-form");
const button = document.getElementById("btn");
const buttonText = document.getElementById("btn-text");
const loader = document.getElementById("loader");
const statusMessage = document.getElementById("form-status");


// ========================================
// CHECK FORM
// ========================================

if (!form) {

    console.error("❌ Le formulaire #contact-form est introuvable.");

} else {

    // ========================================
    // SEND FORM
    // ========================================

    form.addEventListener("submit", async function (event) {

        event.preventDefault();

        // ----------------------------------------
        // Loading
        // ----------------------------------------

        button.disabled = true;
        button.classList.add("loading");

        buttonText.textContent = "Envoi en cours...";

        statusMessage.textContent = "";
        statusMessage.className = "";

        try {

            // ----------------------------------------
            // SEND EMAIL
            // ----------------------------------------

            const response = await emailjs.sendForm(
                "service_kzwk34p",
                "template_9kx5te8",
                form
            );

            // ----------------------------------------
            // SUCCESS
            // ----------------------------------------

            console.log("EmailJS SUCCESS :", response);

            statusMessage.textContent =
                "✓ Votre message a été envoyé avec succès !";

            statusMessage.className = "success";

            // Vider le formulaire
            form.reset();

        } catch (error) {

            // ----------------------------------------
            // ERROR
            // ----------------------------------------

            console.error("❌ EMAILJS ERROR :", error);

            console.error("Status :", error.status);
            console.error("Text :", error.text);

            // Afficher la vraie erreur
            statusMessage.textContent =
                "✕ Erreur EmailJS : " +
                (error.text || "Veuillez vérifier votre configuration.");

            statusMessage.className = "error";

        } finally {

            // ----------------------------------------
            // RESTORE BUTTON
            // ----------------------------------------

            button.disabled = false;

            button.classList.remove("loading");

            buttonText.textContent =
                "Envoyer le message";
        }

    });
}


// ========================================
// NAVIGATION
// ========================================

document.addEventListener("DOMContentLoaded", function () {

    const links = document.querySelectorAll(".nav-link");

    links.forEach(function (link) {

        link.addEventListener("click", function (event) {

            event.preventDefault();

            const targetId = this.dataset.target;

            const target =
                document.getElementById(targetId);

            if (!target) {
                console.warn(
                    "Section introuvable :",
                    targetId
                );

                return;
            }

            const header =
                document.querySelector("header");

            const headerHeight =
                header ? header.offsetHeight : 0;

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
