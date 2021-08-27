const toggleButton = document.querySelector('#toggle-button')
const navbarLinks = document.querySelector('#navLinks')
const Link1 = document.querySelector('#li1')
const Link2 = document.querySelector('#li2')
const Link3 = document.querySelector('#li3')
const Link4 = document.querySelector('#li4')

const nav = document.querySelector('#nav')

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
})

Link1.addEventListener('click', () => {
    navbarLinks.classList.add('active');
})

Link2.addEventListener('click', () => {
    navbarLinks.classList.add('active');
})


Link3.addEventListener('click', () => {
    navbarLinks.classList.add('active');
})

Link4.addEventListener('click', () => {
    navbarLinks.classList.add('active');
})

window.addEventListener('scroll', () => {
    nav.classList.toggle('scrollNav', window.scrollY > 210);
})