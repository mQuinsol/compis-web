const carousel = document.querySelector('.wwd-cards-carousel');
  const dots = document.querySelectorAll('.carousel-indicators .dot');
  const firstCard = carousel.querySelector('.wwd-card');

  carousel.addEventListener('scroll', () => {
    if (!firstCard) return;

    // 1. Medimos cuánto mide exactamente una tarjeta real en píxeles
    const cardWidth = firstCard.offsetWidth;
    
    // 2. Obtenemos el espacio (gap) real entre tarjetas leyendo el CSS del contenedor
    const gap = parseFloat(window.getComputedStyle(carousel).gap) || 0;
    
    // 3. El espacio total que se desplaza al pasar de una tarjeta a otra es (tarjeta + espacio)
    const scrollStep = cardWidth + gap;
    
    // 4. Calculamos la posición actual del scroll
    const scrollLeft = carousel.scrollLeft;
    
    // 5. Dividimos el scroll entre el paso real y redondeamos para saber en qué tarjeta estamos
    const activeIndex = Math.round(scrollLeft / scrollStep);

    // 6. Encendemos la bolita correcta asegurando que no se pase de los límites (0 a 3)
    dots.forEach((dot, index) => {
      if (index === Math.min(activeIndex, dots.length - 1)) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });
  });

  // Función para abrir el chat
function toggleChatWA() {
    const chat = document.getElementById("waChat");
    
    // Cambiamos el display
    if (chat.style.display === "block") {
        chat.style.display = "none";
    } else {
        chat.style.display = "block";
    }
}

// Escuchar clics en todo el documento
document.addEventListener("click", function(event) {
    const chat = document.getElementById("waChat");
    const botonApertura = document.querySelector(".boton-que-abre-el-chat"); // Ajusta esta clase según tu HTML

    // Comprobamos si el chat está visible
    // Y si el clic NO fue dentro del chat NI en el botón de abrir
    if (chat.style.display === "block" && 
        !chat.contains(event.target) && 
        !botonApertura.contains(event.target)) {
        
        chat.style.display = "none";
    }
});

function enviarMensaje() {
    // 1. Número al que quieres enviar el mensaje (debe incluir el código de país, sin '+' ni espacios)
    const numeroTelefono = "34627155333"; 

    // 2. Obtener el texto del textarea (ajusta el selector si tu ID es distinto)
    const mensaje = document.querySelector('textarea').value;

    // 3. Codificar el mensaje para que sea una URL válida
    const mensajeCodificado = encodeURIComponent(mensaje);

    // 4. Crear la URL de WhatsApp
    const url = `https://wa.me/${numeroTelefono}?text=${mensajeCodificado}`;

    // 5. Abrir la URL en una nueva pestaña
    window.open(url, '_blank');
}