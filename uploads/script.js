function mostrarOcultarMenu() {
    const nav = document.getElementById("nav");
    const body = document.body;
    
    // Crear overlay si no existe
    let overlay = document.querySelector('.menu-overlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.className = 'menu-overlay';
        overlay.onclick = mostrarOcultarMenu;
        document.body.appendChild(overlay);
    }
    
    if (nav.classList.contains("responsive")) {
        nav.classList.remove("responsive");
        body.classList.remove("menu-open");
    } else {
        nav.classList.add("responsive");
        body.classList.add("menu-open");
    }
}

function seleccionar() {
    const nav = document.getElementById("nav");
    const body = document.body;
    
    nav.classList.remove("responsive");
    body.classList.remove("menu-open");
}

// Cerrar menú al hacer scroll
window.addEventListener('scroll', function() {
    const nav = document.getElementById("nav");
    const body = document.body;
    
    if (nav.classList.contains("responsive")) {
        nav.classList.remove("responsive");
        body.classList.remove("menu-open");
    }
});

// Cerrar menú al redimensionar la ventana
window.addEventListener('resize', function() {
    const nav = document.getElementById("nav");
    const body = document.body;
    
    if (window.innerWidth > 980) {
        nav.classList.remove("responsive");
        body.classList.remove("menu-open");
    }
});