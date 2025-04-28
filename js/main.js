const toggleBtn = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

toggleBtn.addEventListener('click', () => {
    navMenu.classList.toggle('show');
});
// const toggleBtn = document.getElementById('menu-toggle');
// const navMenu = document.getElementById('nav-menu');

toggleBtn.addEventListener('click', () => {
    navMenu.classList.toggle('show');
});
function modalVideo() {
    let selector = document.getElementById('modal-1');
    selector.classList.toggle('active');
}