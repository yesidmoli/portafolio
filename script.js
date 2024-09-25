document.addEventListener("DOMContentLoaded", function () {

    const nameTextSection = document.querySelector(".name-text");


    // var typed = new Typed("#typed-name", {
    //     strings: ["Yesid Molina Becerra"],  // Aquí pones tu nombre
    //     typeSpeed: 80,   // Velocidad en milisegundos
    //     startDelay: 500,  // Tiempo antes de empezar a escribir
    //     backSpeed: 5,    // Velocidad al borrar (si lo configuras)
    //     showCursor: false, // Mostrar el cursor de escritura
    //     loop: false,
    //     onComplete: function () {

    //         // Después de que termine de escribir, espera 2 segundos y luego oculta
    //         setTimeout(function () {
    //             nameTextSection.classList.add("fade-out");;
    //         }, 2000); 



    // Mostrar el contenedor con la animación
    let content = document.getElementById("section-info");
    content.style.animation = "slideIn 4s forwards"; // Iniciar animación
    content.style.opacity = 1; // Hacer visible

    let header = document.querySelector(".header");
    header.style.animation = "slideHeader 4s ease"; // Iniciar animación
    header.style.opacity = 1;

    let image = document.querySelector(".main-container__img");
    image.style.animation = "slideImage 4s forwards"; // Iniciar animación
    image.style.opacity = 1;
    //     }   

    // });

});

const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

hamburger.addEventListener("click", function () {
    menu.classList.toggle("show"); // Alternar la clase 'show' para mostrar/ocultar el menú
    document.body.classList.toggle("menu-open");

    // Cambiar clase activa para el botón
    hamburger.classList.toggle("active");

    // Evitar el desplazamiento del cuerpo
});

document.addEventListener("scroll", function () {
    const button = document.querySelector('.butt');
    const rect = button.getBoundingClientRect();

    // Verificar si el botón está en la vista
    if (rect.top < window.innerHeight && rect.bottom > 0) {
        button.classList.add('scrolled'); // Añadir clase al hacer scroll
    } else {
        button.classList.remove('scrolled'); // Quitar clase si no está en la vista
    }


});


//script para cambio de idioma 

const translations = {
    es: {
        name: " ¡Hola! soy Yesid Molina",
        title: "Desarrollador <br> <span>Full Stack</span> apasionado por crear soluciones <span>Innovadoras.</span>",
        description: "He adquirido experiencia en la creación de API REST con Django y en el desarrollo de interfaces modernas con React. Me apasiona aprender y aplicar nuevas tecnologías para encontrar soluciones innovadoras. Además de mis habilidades técnicas, tengo una inclinación hacia el emprendimiento y la creatividad, lo que me impulsa a identificar oportunidades de mejora y optimización en cada proceso o solución que se presente para abordar.",
        projects: "Explora mis proyectos",
        phrase: "Aprender y Emprender",
        connect: "Conéctate conmigo",
        email: "Envíame un correo",
        home: "Inicio",
        skills: "Habilidades",
        project: "Proyectos",
        contact: "Contacto",
        cv: "Descargar CV"

    },
    en: {
        name: "Hi there! I'm Yesid Molina",
        title: "<span>Full Stack</span>  developer <br> passionate about creating  <span> Innovative </span> solutions.",
        description: "I have gained experience in creating REST APIs with Django and developing modern interfaces with React. I am passionate about learning and applying new technologies to find innovative solutions. In addition to my technical skills, I have a penchant for entrepreneurship and creativity, which drives me to identify opportunities for improvement and optimization in every process or solution that arises to address.",
        projects: "Explore my projects",
        phrase: "Learn and Start",
        connect: "Connect with me",
        email: "Send me an email",
        home: "Home",
        skills: "Skills",
        project: "Projects",
        contact: "Contact",
        cv: "Download CV"

    }
};


let currentLang = 'en'; // Idioma inicial

function loadLanguage(lang) {
    const selectedLang = translations[lang];
    document.getElementById('name').textContent = selectedLang.name
    document.getElementById('title').innerHTML = selectedLang.title;
    document.getElementById('description').textContent = selectedLang.description;
    document.getElementById('explora').textContent = selectedLang.projects;
    document.getElementById('phrase').textContent = selectedLang.phrase;
    document.getElementById('connect').textContent = selectedLang.connect;
    document.getElementById('email').textContent = selectedLang.email;
    document.getElementById('home').textContent = selectedLang.home;
    document.getElementById('skills').textContent = selectedLang.skills;
    document.getElementById('project').textContent = selectedLang.project;
    document.getElementById('contact').textContent = selectedLang.contact;
    document.getElementById('cv').textContent = selectedLang.cv;


    currentLang = lang;
    // Guardar la selección del idioma en localStorage
    localStorage.setItem('selectedLanguage', currentLang);
}

// Cambiar idioma al seleccionar una opción del dropdown
document.getElementById('language-dropdown').addEventListener('change', function() {
    const selectedLang = this.value;
    loadLanguage(selectedLang);
});

// Detectar el idioma guardado al cargar la página, pero iniciar siempre en inglés
document.addEventListener('DOMContentLoaded', function() {
    // Siempre cargar en inglés al cargar la página
    const initialLang = 'en';
    loadLanguage(initialLang); // Cargar inglés
    document.getElementById('language-dropdown').value = initialLang; // Actualizar el valor del dropdown al inglés
});
