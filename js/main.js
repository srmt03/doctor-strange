const menu = document.querySelector('.menu-burguer-conteiner')

function menuAction() {
    menu.classList.toggle ('show')
}
menu.addEventListener('click', menuAction)