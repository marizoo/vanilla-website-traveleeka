const iconToggle = document.querySelector("#nav-toggle");
const iconClose = document.querySelector("#nav-close");
const navMenu = document.querySelector("#nav-menu");
const navLinks = document.querySelectorAll(".nav__link");
const themeButton = document.getElementById("theme-icon");

// show Menu when "iconToggle" is clicked
iconToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
});

//  close menu when "iconCLose" is clicked
iconClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
});

// Close menu when any of the menu's links are clicked
function linkAction() {
    navMenu.classList.remove("show-menu");
}

navLinks.forEach((link) => link.addEventListener("click", linkAction));
themeButton.addEventListener("click", linkAction);

// ----------------------------------------------------- \\

/*==================== DARK LIGHT THEME ====================*/
// const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "bx-sun";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
    document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
    themeButton.classList.contains(iconTheme) ? "bx-moon" : "bx-sun";

// We validate if the user previously chose a topic
if (selectedTheme) {
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
        darkTheme
    );
    themeButton.classList[selectedIcon === "bx-moon" ? "add" : "remove"](
        iconTheme
    );
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    // We save the theme and the current icon that the user chose
    localStorage.setItem("selected-theme", getCurrentTheme());
    localStorage.setItem("selected-icon", getCurrentIcon());
});

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
    const header = document.getElementById("header");
    // when the scroll is greater than 50vh, add the scroll-header class to the header tag
    if (this.scrollY >= 50) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/*=============== SHOW SCROLL UP ===============*/
function scrollUp() {
    const scrollUp = document.getElementById("scroll-up");
    // When the scroll is higher than 350vh, add the 'show-scroll' class to the 'a' tag, with the 'scroll-top' class
    if (this.scrollY >= 350) scrollUp.classList.add("show-scroll");
    else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58;
        const sectionId = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document
                .querySelector(".nav__menu a[href*=" + sectionId + "]")
                .classList.add("active-link");
        } else {
            document
                .querySelector(".nav__menu a[href*=" + sectionId + "]")
                .classList.remove("active-link");
        }
    });
}
window.addEventListener("scroll", scrollActive);

/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
    origin: "top",
    distance: "30px",
    duration: 2000,
    reset: true,
});

sr.reveal(
    `.section__titles, .hero__data-desc,
    .trip__data-desc, trip__cards-card, .room__card-big, .room__card-small `,
    {
        interval: 200,
    }
);
