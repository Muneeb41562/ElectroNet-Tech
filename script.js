// Add any interactive animations or functionality here
document.addEventListener('DOMContentLoaded', () => {
    // Example: Add a simple fade-in animation to the hero section
    const hero = document.querySelector('.hero');
    hero.style.opacity = '0';
    setTimeout(() => {
        hero.style.transition = 'opacity 2s';
        hero.style.opacity = '1';
    }, 500);
});
document.addEventListener('DOMContentLoaded', () => {
    // GSAP animations
    gsap.from('.hero-content', { duration: 1.5, y: 50, opacity: 0, ease: 'power2.out' });
    gsap.from('.service-card', { duration: 1, y: 30, opacity: 0, stagger: 0.2, ease: 'power2.out', delay: 1 });
});