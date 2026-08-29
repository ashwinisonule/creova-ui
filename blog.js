const newsletterForm =
    document.querySelector(".newsletter-form");

const newsletterMessage =
    document.querySelector(".newsletter-message");


if (newsletterForm) {

    newsletterForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();

            newsletterMessage.textContent =
                "✓ Successfully subscribed!";

            newsletterForm.reset();

        }
    );

}


/* ================= MOBILE MENU ================= */

const mobileMenu =
    document.querySelector(".mobile-menu");

const nav =
    document.querySelector("nav");


if (mobileMenu) {

    mobileMenu.addEventListener(
        "click",
        function () {

            nav.classList.toggle("show");

        }
    );

}