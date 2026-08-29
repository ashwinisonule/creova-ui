/* =========================================
   CREOVA CONTACT PAGE JAVASCRIPT
========================================= */


/* ================= CONTACT FORM ================= */

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const service = document.getElementById("service").value;
        const message = document.getElementById("message").value.trim();


        /* ================= VALIDATION ================= */

        if (
            name === "" ||
            email === "" ||
            subject === "" ||
            service === "" ||
            message === ""
        ) {

            formMessage.textContent =
                "Please fill in all required fields.";

            formMessage.style.background = "#fff1f1";
            formMessage.style.color = "#d9534f";
            formMessage.style.borderLeftColor = "#d9534f";

            formMessage.classList.add("show");

            return;
        }


        /* ================= EMAIL VALIDATION ================= */

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {

            formMessage.textContent =
                "Please enter a valid email address.";

            formMessage.style.background = "#fff1f1";
            formMessage.style.color = "#d9534f";
            formMessage.style.borderLeftColor = "#d9534f";

            formMessage.classList.add("show");

            return;
        }


        /* ================= SUCCESS ================= */

        const submittedData = {

            name: name,

            email: email,

            phone: phone,

            subject: subject,

            service: service,

            message: message,

            date: new Date().toLocaleString()

        };


        /* Save message locally */

        let messages =
            JSON.parse(
                localStorage.getItem("creovaMessages")
            ) || [];


        messages.push(submittedData);


        localStorage.setItem(
            "creovaMessages",
            JSON.stringify(messages)
        );


        /* ================= SUCCESS MESSAGE ================= */

        formMessage.textContent =
            "✓ Message submitted successfully! We'll get back to you soon.";

        formMessage.style.background = "#eafaf6";
        formMessage.style.color = "#008b77";
        formMessage.style.borderLeftColor = "#00b89c";

        formMessage.classList.add("show");


        /* ================= RESET FORM ================= */

        contactForm.reset();


        /* ================= BUTTON CHANGE ================= */

        const submitButton =
            contactForm.querySelector(".submit-btn");

        const originalText =
            submitButton.innerHTML;


        submitButton.innerHTML =
            'MESSAGE SENT ✓';


        submitButton.style.background =
            "#30465b";


        /* Restore button */

        setTimeout(function () {

            submitButton.innerHTML =
                originalText;

            submitButton.style.background =
                "#00b89c";

        }, 3000);


        /* Hide success message */

        setTimeout(function () {

            formMessage.classList.remove("show");

        }, 6000);

    });

}


/* ================= FOOTER SUBSCRIBE ================= */

const subscribeForm =
    document.querySelector(".subscribe-form");

const subscribeMessage =
    document.querySelector(".subscribe-message");


if (subscribeForm) {

    subscribeForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();

            const input =
                subscribeForm.querySelector("input");

            const email =
                input.value.trim();


            if (email === "") {

                subscribeMessage.textContent =
                    "Please enter your email.";

                return;

            }


            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


            if (!emailPattern.test(email)) {

                subscribeMessage.textContent =
                    "Please enter a valid email.";

                return;

            }


            let subscribers =
                JSON.parse(
                    localStorage.getItem("creovaSubscribers")
                ) || [];


            if (!subscribers.includes(email)) {

                subscribers.push(email);

                localStorage.setItem(
                    "creovaSubscribers",
                    JSON.stringify(subscribers)
                );

            }


            subscribeMessage.textContent =
                "✓ Successfully subscribed!";

            input.value = "";


            setTimeout(function () {

                subscribeMessage.textContent = "";

            }, 4000);

        }
    );

}


/* ================= MOBILE MENU ================= */

const mobileMenu =
    document.querySelector(".mobile-menu");

const nav =
    document.querySelector("nav");


if (mobileMenu && nav) {

    mobileMenu.addEventListener(
        "click",
        function () {

            nav.classList.toggle("show");

        }
    );

}


/* ================= ACTIVE NAVIGATION ================= */

const navLinks =
    document.querySelectorAll("nav a");


navLinks.forEach(function (link) {

    link.addEventListener(
        "click",
        function () {

            navLinks.forEach(function (item) {

                item.classList.remove("active");

            });


            this.classList.add("active");

        }
    );

});