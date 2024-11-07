document.querySelectorAll('.toggle').forEach(function(item) {
    item.addEventListener('click', function(event) {
        event.preventDefault();
        var submenu = this.nextElementSibling;

        // Alternar el estado de despliegue del submenú
        if (submenu.style.display === "block") {
            submenu.style.display = "none";
        } else {
            submenu.style.display = "block";
        }
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const enlaces = document.querySelectorAll('.menu a');
    enlaces.forEach(enlace => {
        enlace.addEventListener('click', function(event) {
            event.preventDefault();

            const destinoId = this.getAttribute('href');
            const destino = document.querySelector(destinoId);

            this.classList.add('efecto-iluminado');
            destino.classList.add('efecto-iluminado');
            setTimeout(() => {
                this.classList.remove('efecto-iluminado');
                destino.classList.remove('efecto-iluminado');
            }, 2000);
            destino.scrollIntoView({ behavior: 'smooth' });
        });
    });
});


// Función para hacer scroll al inicio
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Mostrar el botón cuando se desplace hacia abajo
window.onscroll = function() {
    const backToTopButton = document.getElementById("backToTop");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};



function buscarSeccion() {
    const query = document.getElementById("buscador").value.toLowerCase();
    const resultados = document.getElementById("resultadosBusqueda");
    resultados.innerHTML = ""; // Limpiar resultados previos
    resultados.style.display = "none";

    if (query) {
        const secciones = document.querySelectorAll("section"); // Selecciona todas las secciones
        let coincidencias = [];

        // Buscar coincidencias en los títulos de las secciones
        secciones.forEach(seccion => {
            const titulo = seccion.querySelector("h2").textContent.toLowerCase();
            if (titulo.includes(query)) {
                coincidencias.push({
                    id: seccion.id,
                    titulo: titulo
                });
            }
        });

        // Mostrar resultados si hay coincidencias
        if (coincidencias.length > 0) {
            resultados.style.display = "block";
            coincidencias.forEach(item => {
                const div = document.createElement("div");
                div.textContent = item.titulo;
                div.classList.add("resultado-item");
                div.onclick = function() {
                    document.getElementById(item.id).scrollIntoView({ behavior: 'smooth' });
                    resultados.style.display = "none";
                };
                resultados.appendChild(div);
            });
        }
    }
}
