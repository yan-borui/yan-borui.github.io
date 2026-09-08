// Native anchor navigation preserves URL fragments, history, and keyboard focus.
document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.masthead');
    const backToTop = document.getElementById('back-to-top');
    const year = document.getElementById('copyright-year');
    const sections = Array.from(document.querySelectorAll('.nav-links a[href^="#"]'))
        .map(link => ({
            link,
            section: document.getElementById(link.hash.slice(1))
        }))
        .filter(item => item.section);

    if (year) year.textContent = new Date().getFullYear();

    let scheduled = false;

    function updateNavigation() {
        const offset = Math.max(0, header ? header.getBoundingClientRect().bottom : 0) + 48;
        let current = sections[0];

        for (const item of sections) {
            if (item.section.getBoundingClientRect().top <= offset) current = item;
        }

        // Short final sections may never reach the top of the viewport.
        const atBottom = window.scrollY > 0 &&
            window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2;
        if (atBottom && sections.length) current = sections[sections.length - 1];

        for (const item of sections) {
            if (item === current) item.link.setAttribute('aria-current', 'location');
            else item.link.removeAttribute('aria-current');
        }

        if (backToTop) backToTop.hidden = window.scrollY < 500;
        scheduled = false;
    }

    function scheduleUpdate() {
        if (scheduled) return;
        scheduled = true;
        window.requestAnimationFrame(updateNavigation);
    }

    window.addEventListener('scroll', scheduleUpdate, { passive: true });
    window.addEventListener('resize', scheduleUpdate);
    window.addEventListener('pageshow', scheduleUpdate);
    updateNavigation();
});
