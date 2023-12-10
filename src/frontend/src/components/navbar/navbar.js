const openBtn = document.querySelector('.navbar-left-section .navbar-open-btn');
const openIcon = document.querySelector('.navbar-left-section .navbar-open-btn img');
let isOpen = false;

const menu = document.querySelector('.navbar-menu')
console.log(menu)

const modalClose = document.querySelector('.js-modal-close')

const navbarContainer = document.querySelector('.navbar-container')

function toggleMenu()
{
    if(isOpen === false)
    {
        openIcon.src = '../../../public/imgs/navbar/close-icon.svg'
        menu.classList.add('open-menu');
        isOpen = true;
    }
    else {
        openIcon.src = '../../../public/imgs/navbar/menu-icon.svg'
        menu.classList.remove('open-menu');
        isOpen = false
    }
}

openIcon.addEventListener('click',toggleMenu);

navbarContainer.addEventListener('click',function(event){
    event.stopPropagation()
})