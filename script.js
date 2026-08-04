
document.addEventListener('DOMContentLoaded', () => {
    const carousels = document.querySelectorAll('.carousel-container');
    
    carousels.forEach(carousel => {
        let currentIndex = 0;
        const images = carousel.querySelectorAll('.carousel-images img');
        const prevBtn = carousel.querySelector('.prev');
        const nextBtn = carousel.querySelector('.next');
        
        if (images.length === 0) return;
        
        function showImage(index) {
            images.forEach((img, i) => {
                img.style.display = (i === index) ? 'block' : 'none';
            });
        }
        
        showImage(currentIndex); // Initial display
        
        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
                showImage(currentIndex);
            });
        }
        
        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
                showImage(currentIndex);
            });
        }
    });
});
