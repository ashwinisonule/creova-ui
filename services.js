const subscribeForm =
    document.querySelector(".subscribe-form");

const subscribeMessage =
    document.querySelector(".subscribe-message");


if (subscribeForm) {

    subscribeForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();

            subscribeMessage.textContent =
                "✓ Successfully subscribed!";

            subscribeForm.reset();

        }
    );

}