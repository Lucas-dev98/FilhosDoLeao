document.addEventListener('DOMContentLoaded', function() {
    const images = [
        './images/1.jpg',   
        './images/2.jpg',
        './images/3.jpg',
    ];

    const carouselInner = document.querySelector('.carousel-inner');
    const carouselIndicators = document.querySelector('.carousel-indicators');

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
        img.alt = `Imagem ${index + 1}`;

        carouselItem.appendChild(img);
        carouselInner.appendChild(carouselItem);

        // Create indicator
        const indicator = document.createElement('li');
        indicator.setAttribute('data-bs-target', '#carouselExampleAutoplaying');
        indicator.setAttribute('data-bs-slide-to', index);
        if (index === 0) {
            indicator.classList.add('active');
        }

        carouselIndicators.appendChild(indicator);
    });

    // Optional: Add autoplay functionality
    const carousel = new bootstrap.Carousel(document.querySelector('#carouselExampleAutoplaying'), {
        interval: 3000,
        ride: 'carousel'
    });

    // Scroll functionality
    let scrollAmount = 0;

    function scrollCarousel() {
        scrollAmount += carouselInner.clientWidth;
        if (scrollAmount >= carouselInner.scrollWidth) {
            scrollAmount = 0;
        }
        carouselInner.scrollTo({
            top: 0,
            left: scrollAmount,
            behavior: 'smooth'
        });
    }

    setInterval(scrollCarousel, 3000);
});