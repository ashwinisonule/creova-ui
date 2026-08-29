/* ================= BACK TO TOP ================= */

const backTop = document.getElementById("backTop");

window.addEventListener("scroll", function () {

    if (window.scrollY > 400) {
        backTop.style.display = "block";
    } else {
        backTop.style.display = "none";
    }

});


backTop.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* ================= SUBSCRIBE ================= */

const subscribeForm =
    document.querySelector(".subscribe-form");

const subscribeMessage =
    document.querySelector(".subscribe-message");


subscribeForm.addEventListener("submit", function (event) {

    event.preventDefault();

    subscribeMessage.textContent =
        "✓ Successfully subscribed!";

    subscribeForm.reset();

});


const searchIcon = document.getElementById("searchIcon");
const searchOverlay = document.getElementById("searchOverlay");
const closeSearch = document.getElementById("closeSearch");
const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");


/* SEARCH DATA */

const pages = [

    {
        title: "Home",
        keywords: "home creative creova",
        url: "index.html"
    },

    {
        title: "Portfolio",
        keywords: "portfolio projects work design",
        url: "portfolio.html"
    },

    {
        title: "Blog",
        keywords: "blog articles news",
        url: "blog.html"
    },

    {
        title: "About Us",
        keywords: "about team company creova",
        url: "about.html"
    },

    {
        title: "Services",
        keywords: "services design development branding",
        url: "services.html"
    },

    {
        title: "Contact",
        keywords: "contact location email phone",
        url: "contact.html"
    },

    {
        title: "Creative Process",
        keywords: "creative process idea execution",
        url: "blog-strategy.html"
    },

    {
        title: "Content Marketing",
        keywords: "marketing content digital marketing",
        url: "blog-marketing.html"
    },

    {
        title: "Collaboration",
        keywords: "collaboration team creative",
        url: "blog-creative.html"
    },

    {
        title: "Digital Experiences",
        keywords: "digital experience design development",
        url: "read-article.html"
    }

];


/* OPEN SEARCH */

searchIcon.addEventListener("click", function () {

    searchOverlay.classList.add("active");

    setTimeout(function () {
        searchInput.focus();
    }, 200);

});


/* CLOSE SEARCH */

closeSearch.addEventListener("click", function () {

    searchOverlay.classList.remove("active");

    searchInput.value = "";

    searchResults.innerHTML = "";

});


/* SEARCH */

searchInput.addEventListener("input", function () {

    const value = searchInput.value
        .toLowerCase()
        .trim();

    searchResults.innerHTML = "";


    if (value === "") {
        return;
    }


    const results = pages.filter(function (page) {

        return (
            page.title.toLowerCase().includes(value) ||
            page.keywords.toLowerCase().includes(value)
        );

    });


    if (results.length === 0) {

        searchResults.innerHTML = `
            <div class="no-result">
                No results found for "${value}"
            </div>
        `;

        return;

    }


    results.forEach(function (page) {

        const result = document.createElement("a");

        result.href = page.url;

        result.className = "search-result";

        result.innerHTML = `
            ${page.title}
            <i class="fa-solid fa-arrow-right"
               style="float:right;">
            </i>
        `;

        searchResults.appendChild(result);

    });

});


/* ESC KEY */

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        searchOverlay.classList.remove("active");

    }

});
