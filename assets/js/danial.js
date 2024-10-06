const toggle = document.querySelector('#toggle');
const overlay = document.querySelector('.overlay');
const menuUl = document.querySelector('.menu-ul');
const menuLi = document.querySelectorAll('.menu-ul>li');
const cursor = document.querySelector('.cursor');
let mod2 = 1;

toggle.addEventListener('click', function (e) {

    toggle.classList.toggle('active');
    overlay.classList.toggle('active');
    if (mod2) {
        cursor.style.display = 'block';
        document.body.style.cursor = 'none';
        menuUl.style.display = 'block';
        toggle.style.cursor = 'none';
        mod2--;
    } else {
        cursor.style.display = 'none';
        toggle.style.cursor = 'auto';
        menuUl.style.display = 'none';
        mod2++;
    }
})

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
})

menuLi.forEach(li => {
    li.addEventListener('mouseenter', () => {
        cursor.style.transform = 'scale(3.5)'
    })
    li.addEventListener('mouseleave', () => {
        cursor.style.transform = 'scale(1)'
    })
})

toggle.addEventListener('mouseenter', () => {
    cursor.style.transform = 'scale(1.2)'
})

toggle.addEventListener('mouseleave', () => {
    cursor.style.transform = 'scale(1)'
})