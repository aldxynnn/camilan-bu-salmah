/*==========================================
 CAMILAN BU SALMAH
 script.js
 Vanilla JavaScript
==========================================*/

"use strict";

/*==========================================
 LOADING SCREEN
==========================================*/

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    loader.style.opacity = "0";

    setTimeout(() => {

        loader.style.display = "none";

    }, 500);

});


/*==========================================
 STICKY NAVBAR SHADOW
==========================================*/

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.classList.add("sticky");

    } else {

        header.classList.remove("sticky");

    }

});


/*==========================================
 HAMBURGER MENU
==========================================*/

const hamburger = document.getElementById("hamburger");

const nav = document.getElementById("navMenu");

hamburger.addEventListener("click", () => {

    nav.classList.toggle("active");

    hamburger.classList.toggle("active");

});


/*==========================================
 CLOSE MENU AFTER CLICK
==========================================*/

document.querySelectorAll("#navMenu a").forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");

        hamburger.classList.remove("active");

    });

});


/*==========================================
 ACTIVE MENU
==========================================*/

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("#navMenu a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


/*==========================================
 PRODUCT FILTER
==========================================*/

const filterButtons = document.querySelectorAll(".filter-buttons button");

const products = document.querySelectorAll(".product-card");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => btn.classList.remove("active"));

        button.classList.add("active");

        const filter = button.dataset.filter;

        products.forEach(product => {

            if (filter === "all") {

                product.style.display = "block";

                return;

            }

            if (product.dataset.category === filter) {

                product.style.display = "block";

            } else {

                product.style.display = "none";

            }

        });

    });

});


/*==========================================
 LIGHTBOX GALLERY
==========================================*/

const galleryItems = document.querySelectorAll(".gallery-item");

const lightbox = document.getElementById("lightbox");

const lightboxImage = document.getElementById("lightboxImage");

const closeLightbox = document.getElementById("closeLightbox");

galleryItems.forEach(image => {

    image.addEventListener("click", () => {

        lightbox.style.display = "flex";

        lightboxImage.src = image.src;

    });

});

closeLightbox.addEventListener("click", () => {

    lightbox.style.display = "none";

});

lightbox.addEventListener("click", e => {

    if (e.target === lightbox) {

        lightbox.style.display = "none";

    }

});


/*==========================================
 FAQ ACCORDION
==========================================*/

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    item.querySelector(".faq-question").addEventListener("click", () => {

        faqItems.forEach(i => {

            if (i !== item) {

                i.classList.remove("active");

            }

        });

        item.classList.toggle("active");

    });

});


/*==========================================
 TESTIMONIAL SLIDER
==========================================*/

const testimonials = document.querySelectorAll(".testimonial");

let testimonialIndex = 0;

function showTestimonial(index) {

    testimonials.forEach(item => {

        item.classList.remove("active");

    });

    testimonials[index].classList.add("active");

}

setInterval(() => {

    testimonialIndex++;

    if (testimonialIndex >= testimonials.length) {

        testimonialIndex = 0;

    }

    showTestimonial(testimonialIndex);

}, 5000);

showTestimonial(testimonialIndex);


/*==========================================
 SCROLL REVEAL
==========================================*/

const revealElements = document.querySelectorAll(

".section,.stat-card,.feature-card,.product-card,.gallery-item,.contact-card,.custom-box"

);

function reveal() {

    revealElements.forEach(element => {

        const windowHeight = window.innerHeight;

        const revealTop = element.getBoundingClientRect().top;

        const revealPoint = 120;

        if (revealTop < windowHeight - revealPoint) {

            element.classList.add("active");

        }

    });

}

window.addEventListener("scroll", reveal);

reveal();


/*==========================================
 BACK TO TOP
==========================================*/

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        backToTop.style.display = "flex";

    } else {

        backToTop.style.display = "none";

    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/*==========================================
 SCROLL PROGRESS BAR
==========================================*/

const progressBar = document.getElementById("progressBar");

window.addEventListener("scroll", () => {

    const totalHeight =

        document.documentElement.scrollHeight -

        document.documentElement.clientHeight;

    const progress =

        (window.pageYOffset / totalHeight) * 100;

    progressBar.style.width = progress + "%";

});


/*==========================================
 SMOOTH SCROLL
==========================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(

            this.getAttribute("href")

        );

        if (!target) return;

        window.scrollTo({

            top: target.offsetTop - 80,

            behavior: "smooth"

        });

    });

});


/*==========================================
 LAZY LOADING
==========================================*/

const lazyImages = document.querySelectorAll("img");

const imageObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        const img = entry.target;

        if (img.dataset.src) {

            img.src = img.dataset.src;

        }

        imageObserver.unobserve(img);

    });

});

lazyImages.forEach(img => {

    imageObserver.observe(img);

});


/*==========================================
 FLOATING WHATSAPP EFFECT
==========================================*/

const waButton = document.querySelector(".floating-wa");

window.addEventListener("scroll", () => {

    if (window.scrollY > 250) {

        waButton.style.opacity = "1";

        waButton.style.transform = "scale(1)";

    } else {

        waButton.style.opacity = ".9";

    }

});


/*==========================================
 PARALLAX HERO IMAGE
==========================================*/

const heroImage = document.querySelector(".hero-image img");

window.addEventListener("scroll", () => {

    if (!heroImage) return;

    heroImage.style.transform =

        "translateY(" + window.scrollY * 0.08 + "px)";

});


/*==========================================
 BUTTON RIPPLE EFFECT
==========================================*/

document.querySelectorAll(".btn-primary").forEach(button => {

    button.addEventListener("click", function (e) {

        const circle = document.createElement("span");

        const diameter = Math.max(

            this.clientWidth,

            this.clientHeight

        );

        circle.style.width =

        circle.style.height = diameter + "px";

        circle.style.left =

        e.offsetX - diameter / 2 + "px";

        circle.style.top =

        e.offsetY - diameter / 2 + "px";

        circle.classList.add("ripple");

        const ripple = this.querySelector(".ripple");

        if (ripple) {

            ripple.remove();

        }

        this.appendChild(circle);

    });

});


/*==========================================
 CURRENT YEAR
==========================================*/

const year = document.getElementById("year");

if (year) {

    year.textContent = new Date().getFullYear();

}


/*==========================================
 PREVENT DOUBLE TAP IMAGE DRAG
==========================================*/

document.querySelectorAll("img").forEach(img => {

    img.setAttribute("draggable", "false");

});


/*==========================================
 CONSOLE MESSAGE
==========================================*/

console.log("%cCamilan Bu Salmah",

"font-size:24px;color:#C97A2B;font-weight:bold;");

console.log("%cWebsite dibuat menggunakan HTML5 + CSS3 + Vanilla JavaScript",

"color:#4F7C52;font-size:14px;");