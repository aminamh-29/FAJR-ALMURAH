// Scroll-reveal for .fade-up elements
const observer = new IntersectionObserver(
    (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
    { threshold: 0.12 }
);

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// Animated stat counters
function animateCounter(el) {
    const target = parseInt(el.dataset.target, 10);
    const duration = 1800;
    const step = target / (duration / 16);
    let current = 0;

    const timer = setInterval(() => {
        current += step;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        el.textContent = Math.floor(current);
    }, 16);
}

const statsObserver = new IntersectionObserver(
    (entries) => entries.forEach(e => {
        if (e.isIntersecting) {
            animateCounter(e.target);
            statsObserver.unobserve(e.target);
        }
    }),
    { threshold: 0.5 }
);

document.querySelectorAll('.stat-number').forEach(el => statsObserver.observe(el));
