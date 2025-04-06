
document.addEventListener("DOMContentLoaded", () => {
    const header = document.getElementById("header");
    const menuToggle = document.getElementById("menu-toggle");
    const nav = document.getElementById("nav");
    const homeText = document.querySelector(".home-text"); 
    

    // Funció per gestionar l'animació d'ampliació i desaparició
    window.addEventListener("scroll", () => {
        const scrollPosition = window.scrollY;  // La posició de l'scroll
        const homeSectionHeight = document.querySelector("#home").offsetHeight;  // Alçada de la secció 'home'
        
        // Determina el percentatge d'scroll dins de la secció 'home'
        const scrollPercentage = Math.min(scrollPosition / homeSectionHeight, 1);  // No més del 100%

        // Apliqueu el zoom i l'opacitat depenent de l'scroll
        homeText.style.transform = `scale(${1 + scrollPercentage * 2})`;  // Amplia el text (es fa més gran amb l'scroll)
        homeText.style.opacity = `${1 - scrollPercentage}`;  // Desapareix gradualment

        // Controlar l'efecte de la barra de navegació
        if (scrollPosition > 50) {
            //header.classList.add("shrink");
            
        } else {
            header.classList.remove("shrink");
        }
    });

    menuToggle.addEventListener("click", () => {
        nav.classList.toggle("active");
    });

    // Revisa si l'element és visible i afegeix la classe 'visible'
    const observerSection = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");  // Afegim la classe visible quan l'element és visible
                observer.unobserve(entry.target);  // Deixem d'observar aquest element després d'activar l'animació
                document.documentElement.style.overflowX = "hidden"
            }
        });
    }, { threshold: 0.01 });  // Reduïm el llindar de visibilitat al 10%

    const sectionTitles = document.querySelectorAll(".section-title");
    sectionTitles.forEach((title, index) => {
        observerSection.observe(title);
    });

    const cardsContainer = document.querySelector(".cards-container");
    if (cardsContainer) {
        observerSection.observe(cardsContainer);
    }

    const peopleContainer = document.querySelector(".people-container");
    if (peopleContainer) {
        observerSection.observe(peopleContainer);
    }

    const contactContainers = document.querySelectorAll(".center-container");
    contactContainers.forEach(container => {
        observerSection.observe(container);  
    });

    const propostes = document.querySelectorAll(".proposta");
    propostes.forEach(proposta => {
        observerSection.observe(proposta);  
    });

    const candidats = document.querySelectorAll(".candidat");
    candidats.forEach(candidat => {
        observerSection.observe(candidat);  
    });

    const defensemCard = document.querySelector(".defensem-card");
    if (defensemCard) {
        observerSection.observe(defensemCard);
    }

    const quiSomCard = document.querySelector(".qui-som-card");
    if (quiSomCard) {
        observerSection.observe(quiSomCard);
    }

    const sections = document.querySelectorAll("section");
    sections.forEach((section, index) => {
        if (index % 2 === 0) {
            section.style.backgroundColor = "var(--color-primary)";
        } else {
            section.style.backgroundColor = "var(--color-secondary)";
        }
    });
});
