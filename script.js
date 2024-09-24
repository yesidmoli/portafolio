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
