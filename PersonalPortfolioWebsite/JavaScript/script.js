/* =============== Toggle Icon Navigation =============== */
let menuIcon = document.querySelector("#menu-icon");
navigationBar = document.querySelector(".navigation");
menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("fa-xmark");
    navigationBar.classList.toggle("active");
});

/* =============== Scroll Sections active link =============== */
let sections = document.querySelectorAll("section"),
navLinks = document.querySelectorAll("header nav a");


window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");
        
        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove("active");
                document.querySelector("header nav a[href*=" + id + "]").classList.add("active");
            });
        };
    });
    
    
    /* =============== Sticky Navigation =============== */
    let header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY);

    /* ===============  Closing The Navigation Link In Scrolling =============== */
    menuIcon.classList.remove("fa-xmark");
    navigationBar.classList.remove("active");
};

/* =============== Scroll Reveal =============== */
ScrollReveal({ 
    reset: true,
    distance: "80px",
    duration: 2000,
    delay: 200 
});

ScrollReveal().reveal('.home-content, .heading', { 
    origin: 'top' 
});

ScrollReveal().reveal('.home-image, .services-container, .portfolio-box, .contact form', { 
    origin: 'bottom' 
});

ScrollReveal().reveal('.home-content h1, .about-image', { 
    origin: 'left'
});

ScrollReveal().reveal('.home-content p, .about-content', { 
    origin: 'right'
});

/* =============== Typed js =============== */
let typed = new Typed(".multiple-text", {
    strings: ["YouTuber", "Blogger", "FrontEnd Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});