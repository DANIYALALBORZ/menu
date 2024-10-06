let toggle = document.querySelector('#toggle');
let overlay = document.querySelector('.overlay');

toggle.addEventListener('click', function (e) {
    toggle.classList.toggle('active');
    overlay.classList.toggle('active');
})