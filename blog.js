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




// ================= MOBILE MENU =================

const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const nav = document.querySelector(".nav-container nav");

if (mobileMenuBtn && nav) {

    mobileMenuBtn.addEventListener("click", function () {

        nav.classList.toggle("active");

        const icon = mobileMenuBtn.querySelector("i");

        if (nav.classList.contains("active")) {
            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");
        } else {
            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");
        }

    });

    nav.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", function () {

            nav.classList.remove("active");

            const icon = mobileMenuBtn.querySelector("i");

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        });

    });

}