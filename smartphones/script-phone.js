document.querySelectorAll('.card-header').forEach(header => {
    header.addEventListener('click', function () {
        const cardContent = this.nextElementSibling;

        // Alternar la clase 'active' para expandir/colapsar la card
        cardContent.classList.toggle('active');

        // Si la card se expande, cargar las imágenes
        if (cardContent.classList.contains('active')) {
            const images = cardContent.querySelectorAll('img.lazy-load');
            images.forEach(img => {
                if (!img.src) {
                    img.src = img.getAttribute('data-src');
                    img.classList.add('loaded');
                }
            });
        }
    });
});