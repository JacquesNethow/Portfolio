import '../styles/projects.css';
import { gsap } from 'gsap';

// ─── Toggle submenus ───
const playBtn = document.getElementById('play-btn') as HTMLButtonElement;
const viewBtn = document.getElementById('view-btn') as HTMLButtonElement;
const playSubmenu = document.getElementById('play-submenu') as HTMLDivElement;
const viewSubmenu = document.getElementById('view-submenu') as HTMLDivElement;

function toggleMenu(btn: HTMLButtonElement, submenu: HTMLDivElement) {
    const isOpen = submenu.classList.contains('open');

    // Close all
    document.querySelectorAll('.submenu').forEach(s => s.classList.remove('open'));
    document.querySelectorAll('.menu-btn').forEach(b => b.classList.remove('active'));

    if (!isOpen) {
        submenu.classList.add('open');
        btn.classList.add('active');

        // GSAP animation
        gsap.to(submenu, {
            maxHeight: 500,
            opacity: 1,
            duration: 0.3,
            ease: 'power2.out',
        });
    } else {
        gsap.to(submenu, {
            maxHeight: 0,
            opacity: 0,
            duration: 0.3,
            ease: 'power2.in',
        });
    }
}

playBtn.addEventListener('click', () => toggleMenu(playBtn, playSubmenu));
viewBtn.addEventListener('click', () => toggleMenu(viewBtn, viewSubmenu));

// ─── Animate menu items on load ───
gsap.from('.menu-title', {
    opacity: 0,
    x: -50,
    duration: 0.8,
    ease: 'power2.out',
});

gsap.from('.menu-item', {
    opacity: 0,
    x: -30,
    duration: 0.5,
    stagger: 0.1,
    delay: 0.3,
    ease: 'power2.out',
});
