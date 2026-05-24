// Smooth scroll untuk link navigasi
const anchors = document.querySelectorAll('a[href^="#"]');
anchors.forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const href = this.getAttribute("href");
        if (href) {
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            }
        }
    });
});

// Add active state to navigation
window.addEventListener("scroll", () => {
    let current = "";
    const sections = document.querySelectorAll("section[id]");

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 100) {
            current = section.getAttribute("id") || "";
        }
    });

    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach((link) => {
        link.classList.remove("text-primary");
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("text-primary");
            link.classList.add("active");
        }
    });

    // Update Bottom Nav
    const bottomLinks = document.querySelectorAll(".bottom-nav-link");
    bottomLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });
});
