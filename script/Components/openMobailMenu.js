// Октрытие меню навигации для мобильных устройств

const openMobailMenu = () => {
    const mobailMenuBtn = document.querySelector('.mobail-menu__btn'),
    mobailMenu = document.querySelector('.mobail-menu'),
    headerNav = document.querySelector('.header-nav');
    
    const openMenu = () => {
        mobailMenuBtn.classList.toggle('mobail-menu__btn_active');
        headerNav.classList.toggle('header-nav_active');
    }

    mobailMenu.addEventListener('click', openMenu);
}

export default openMobailMenu;