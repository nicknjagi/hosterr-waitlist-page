const menuBtn = document.querySelector('.menu-btn')
const nav = document.getElementById('nav')

menuBtn.addEventListener('click', showNavbar)

function showNavbar(){
    nav.classList.toggle('show-nav')
    menuBtn.classList.toggle('open')
}
