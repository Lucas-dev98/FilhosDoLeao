document.addEventListener('DOMContentLoaded', function() {
    const carouselImages = [
        './images/carousel/carousel1.jpg',   
        './images/carousel/carousel2.jpg',
        './images/carousel/carousel3.jpg',
        './images/carousel/carousel4.jpg',
        './images/carousel/carousel5.jpg',
    ];

    const eventImages = [
        './images/eventos/evento1.jpg',   
        // './images/eventos/evento2.jpg',
        './images/eventos/evento3.jpg',
        // './images/eventos/evento4.jpg',
        // './images/eventos/evento5.jpg',
    ];

    const celulasImages = [
        './images/celulas/celula1.jpg',
        './images/celulas/celula2.jpg',
        './images/celulas/celula3.jpg',
    ];

    const departamentosImages = [
        './images/departamentos/departamento1.jpg',
        './images/departamentos/departamento2.jpg',
        './images/departamentos/departamento3.jpg',
        './images/departamentos/departamento4.jpg',
        './images/departamentos/departamento5.jpg',
    ];

    function setupCarousel(carouselId, images) {
        const carouselInner = document.querySelector(`#${carouselId} .carousel-inner`);
        const carouselIndicators = document.querySelector(`#${carouselId} .carousel-indicators`);
        images.forEach((image, index) => {
            // Create carousel item
            const carouselItem = document.createElement('div');
            carouselItem.classList.add('carousel-item');
            if (index === 0) {
                carouselItem.classList.add('active');
            }

            const img = document.createElement('img');
            img.src = image;
            img.classList.add('d-block', 'w-100');
            img.alt = `Slide ${index + 1}`;

            carouselItem.appendChild(img);
            carouselInner.appendChild(carouselItem);

            // Create indicator
            const indicator = document.createElement('li');
            indicator.setAttribute('data-bs-target', `#${carouselId}`);
            indicator.setAttribute('data-bs-slide-to', index);
            if (index === 0) {
                indicator.classList.add('active');
            }

            carouselIndicators.appendChild(indicator);
        });

        // Optional: Add autoplay functionality
        const carousel = new bootstrap.Carousel(document.querySelector(`#${carouselId}`), {
            interval: 3000,
            ride: 'carousel'
        });

        // Add drag functionality
        let startX, endX;
        const carouselElement = document.querySelector(`#${carouselId}`);

        carouselElement.addEventListener('mousedown', (e) => {
            startX = e.clientX;
        });

        carouselElement.addEventListener('mouseup', (e) => {
            endX = e.clientX;
            handleSwipe();
        });

        carouselElement.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
        });

        carouselElement.addEventListener('touchend', (e) => {
            endX = e.changedTouches[0].clientX;
            handleSwipe();
        });

        function handleSwipe() {
            if (startX > endX) {
                carousel.next();
            } else if (startX < endX) {
                carousel.prev();
            }
        }
    }

    setupCarousel('carouselExampleAutoplaying', carouselImages);
    setupCarousel('eventosCarousel', eventImages);
    setupCarousel('celulasCarousel', celulasImages);
    setupCarousel('departamentosCarousel', departamentosImages);
});