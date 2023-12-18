// Open menu feature
const openIconMenu = document.querySelector('.navbar .menu-open-btn img');
let isOpenMenu = false;


const menu = document.querySelector('.navbar-menu')

const navbarContainer = document.querySelector('.navbar-container')

function toggleMenu()
{
    if(isOpenMenu === false)
    {
        openIconMenu.src = '../../../public/imgs/navbar/close-icon.svg'
        menu.classList.add('open-menu');
        isOpenMenu = true;
    }
    else {
        openIconMenu.src = '../../../public/imgs/navbar/menu-icon.svg'
        menu.classList.remove('open-menu');
        isOpenMenu = false
    }
}

openIconMenu.addEventListener('click',toggleMenu);

// Open cart modal feature
const openIconCartModal = document.querySelector('.navbar .cart-modal-open-btn img');
const closeIconCartModal = document.querySelector('.cart-close-btn img');

const cartModal = document.querySelector('.navbar-cart')

function openCartModal() {
    cartModal.classList.add('open-cart-modal');
}

function closeCartModal() {
    cartModal.classList.remove('open-cart-modal');
}

openIconCartModal.addEventListener('click',openCartModal);
closeIconCartModal.addEventListener('click',closeCartModal);

navbarContainer.addEventListener('click',function(event){
    event.stopPropagation()
})

// Open Login, Sign up
