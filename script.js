// ============================================
// DOM Ready
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    initSmoothScroll();
    initActiveNav();
    initNavScroll();
    initBackToTop();
    initTypingEffect();
    initScrollReveal();
});

// ============================================
// Smooth Scroll
// ============================================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// ============================================
// Active Nav on Scroll
// ============================================
function initActiveNav() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');

    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.toggle(
                        'active',
                        link.getAttribute('href').slice(1) === id
                    );
                });
            });
        },
        {
            rootMargin: '-45% 0px -45% 0px',
            threshold: 0.01
        }
    );

    sections.forEach(section => observer.observe(section));
}

// ============================================
// Nav Background on Scroll
// ============================================
function initNavScroll() {
    const header = document.getElementById('header');
    let ticking = false;

    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                header.classList.toggle('scrolled', window.scrollY > 50);
                ticking = false;
            });
            ticking = true;
        }
    });
}

// ============================================
// Back to Top Button
// ============================================
function initBackToTop() {
    const btn = document.getElementById('back-to-top');
    let ticking = false;

    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                btn.classList.toggle('visible', window.scrollY > 500);
                ticking = false;
            });
            ticking = true;
        }
    });

    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ============================================
// Typing Effect
// ============================================
function initTypingEffect() {
    const el = document.getElementById('typing-text');
    const text = '你好，我是 Borui Yan';
    let i = 0;

    function type() {
        if (i <= text.length) {
            el.textContent = text.slice(0, i);
            i++;
            setTimeout(type, i === 1 ? 200 : 80 + Math.random() * 60);
        } else {
            setTimeout(() => {
                i = 0;
                type();
            }, 4000);
        }
    }

    type();
}

// ============================================
// Scroll Reveal Animation
// ============================================
function initScrollReveal() {
    const revealElements = document.querySelectorAll(
        '.skill-category, .edu-block, .research-card, .section-title, .about-bio'
    );

    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('reveal', 'visible');
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.15,
            rootMargin: '0px 0px -30px 0px'
        }
    );

    revealElements.forEach(el => observer.observe(el));
}
