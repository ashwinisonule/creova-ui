/* ================= PORTFOLIO FILTER ================= */

const filterButtons =
    document.querySelectorAll(".filter-btn");

const projectCards =
    document.querySelectorAll(".project-card");


filterButtons.forEach(button => {

    button.addEventListener("click", function () {

        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        this.classList.add("active");

        const filter =
            this.getAttribute("data-filter");


        projectCards.forEach(card => {

            const category =
                card.getAttribute("data-category");


            if (filter === "all" || category === filter) {

                card.classList.remove("hide");

            } else {

                card.classList.add("hide");

            }

        });

    });

});


/* ================= SUBSCRIBE ================= */

const subscribeForm =
    document.querySelector(".subscribe-form");

const subscribeMessage =
    document.querySelector(".subscribe-message");


if (subscribeForm) {

    subscribeForm.addEventListener("submit", function (event) {

        event.preventDefault();

        subscribeMessage.textContent =
            "✓ Successfully subscribed!";

        subscribeForm.reset();

    });

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