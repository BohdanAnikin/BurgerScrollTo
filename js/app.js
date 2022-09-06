const menuButtons = document.querySelectorAll('[data-topage]');

if (menuButtons.length > 0) {
    for (let index = 0; index < menuButtons.length; index++) {
        const menuButton = menuButtons[index];
        menuButton.addEventListener("click", function (e) {
            const menuTarget = e.target;
            if (menuTarget.dataset.topage && document.querySelector(menuTarget.dataset.topage)) {
                const menuData = document.querySelector(menuTarget.dataset.topage);
                const pageScroll = menuData.getBoundingClientRect().top + scrollY - document.querySelector('header').offsetHeight;
                window.scrollTo({
                    top: pageScroll,
                    behavior: "smooth"
                });
            };
            document.body.classList.remove('_lock');
            headerMenu.classList.remove('_active');
            iconMenu.classList.toggle('_active');
            e.preventDefault();
        });
    }
}

const iconMenu = document.querySelector('.icon-menu');
const headerMenu = document.querySelector('.header__menu');

if (iconMenu) {
    iconMenu.addEventListener("click", function (e) {
        iconMenu.classList.toggle('_active');
        if (iconMenu.classList.contains('_active')) {
            document.body.classList.add('_lock');
            headerMenu.classList.add('_active');
        } else {
            document.body.classList.remove('_lock');
            headerMenu.classList.remove('_active');
        }
    });
}

const dataOpen = document.querySelector('[data-open]');

if (dataOpen) {
    dataOpen.addEventListener("click", function (e) {
        if (headerMenu.classList.contains('_active')) {
            headerMenu.classList.toggle('_open');
        } else {
            headerMenu.classList.remove('_open');
        }
    });
}

window.addEventListener("resize", function (e) {
    if (window.innerWidth > 768) {
        headerMenu.classList.remove('_active');
        document.body.classList.remove('_lock');
        iconMenu.classList.remove('_active');
    }
});

if (window.matchMedia("(pointer: coarse)").matches) {
    dataOpen.classList.add('_touch');
}