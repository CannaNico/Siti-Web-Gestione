document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.getElementById('gallery-container');
    const prevBtn = document.getElementById('gallery-prev');
    const nextBtn = document.getElementById('gallery-next');

    if (!gallery || !prevBtn || !nextBtn) return;

    const scrollAmount = 400; // Adjust based on card width + gap

    nextBtn.addEventListener('click', () => {
        gallery.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    });

    prevBtn.addEventListener('click', () => {
        gallery.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    });

    // Optional: Auto-scroll
    let autoScrollInterval;
    const startAutoScroll = () => {
        autoScrollInterval = setInterval(() => {
            if (gallery.scrollLeft + gallery.clientWidth >= gallery.scrollWidth - 10) {
                gallery.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                gallery.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        }, 5000);
    };

    const stopAutoScroll = () => clearInterval(autoScrollInterval);

    gallery.addEventListener('mouseenter', stopAutoScroll);
    gallery.addEventListener('mouseleave', startAutoScroll);

    startAutoScroll();

    // Show/Hide buttons based on scroll position
    const toggleButtons = () => {
        prevBtn.style.opacity = gallery.scrollLeft <= 0 ? '0.3' : '1';
        prevBtn.style.pointerEvents = gallery.scrollLeft <= 0 ? 'none' : 'auto';
        
        const isAtEnd = gallery.scrollLeft + gallery.clientWidth >= gallery.scrollWidth - 10;
        nextBtn.style.opacity = isAtEnd ? '0.3' : '1';
        nextBtn.style.pointerEvents = isAtEnd ? 'none' : 'auto';
    };

    gallery.addEventListener('scroll', toggleButtons);
    window.addEventListener('resize', toggleButtons);
    toggleButtons();
});
