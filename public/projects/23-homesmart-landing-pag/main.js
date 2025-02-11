import './style.css'

const navBtn = document.querySelector('#menu');
const menuBar = document.querySelector('[role="menubar"]');

navBtn.addEventListener('click', () => {
    const isExpandad = JSON.parse(navBtn.getAttribute('aria-expanded'));
    navBtn.setAttribute('aria-expanded', !isExpandad);
    menuBar.classList.toggle('hidden');
    menuBar.classList.toggle('flex');
})