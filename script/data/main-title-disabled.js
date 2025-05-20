window.addEventListener('scroll', () => {
    const heroText = document.querySelector('.hero-section .hero-section-wrap .hero-section-text');
    const heroImage = document.querySelector('.hero-section-main-image');

    if (!heroText || !heroImage) return;

    const textRect = heroText.getBoundingClientRect();
    const imageRect = heroImage.getBoundingClientRect();

    const distance = imageRect.top - textRect.bottom;

    const fadeStart = -1000; // когда начинать исчезновение
    const fadeEnd = 0;       // когда полностью исчезает

    let opacity;

    if (distance >= fadeStart) {
        opacity = 1;
    } else if (distance <= fadeEnd) {
        opacity = 0;
    } else {
        opacity = (distance - fadeEnd) / (fadeStart - fadeEnd);
    }

    heroText.style.opacity = opacity;
    heroText.style.pointerEvents = opacity < 0.05 ? 'none' : 'auto';

    if (opacity === 0) {
        heroText.style.display = 'none';
    } else {
        heroText.style.display = 'flex';
    }
});