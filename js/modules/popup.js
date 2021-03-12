function popup() {
    const body = document.querySelector('body');
    const lockPadding = document.querySelectorAll('.lock-padding');
    const notificationBox = document.querySelector('.notification__box');

    let unlock = true;

    const timeout = 800;

    function popupLinksCounter() {
        const popupLinks = document.querySelectorAll('.popup-link');

        if (popupLinks.length > 0) {
            for (let index = 0; index < popupLinks.length; index++) {
                const popupLink = popupLinks[index];
                popupLink.addEventListener('click', function (e) {
                    const popupName = popupLink.getAttribute('href').replace('#', '');
                    const currentPopup = document.getElementById(popupName);
                    popupOpen(currentPopup);
                    e.preventDefault();
                });
            }
        }
    };

    popupLinksCounter();

    const popupCloseIcon = document.querySelectorAll('.close-popup');
    if (popupCloseIcon.length > 0) {
        for (let index = 0; index < popupCloseIcon.length; index++) {
            const el = popupCloseIcon[index];
            el.addEventListener('click', function (e) {
                popupClose(el.closest('.popup'));
                e.preventDefault();
            });
        }
    }

    function popupOpen(currentPopup) {
        if (currentPopup && unlock) {
            const popupActive = document.querySelector('.popup.popup__open');
            if (popupActive) {
                popupClose(popupActive, false);
            } else {
                bodyLock();
            }
            currentPopup.classList.add('popup__open');
            currentPopup.addEventListener('click', function (e) {
                if (!e.target.closest('.popup__content') && !e.target.closest('.popup__basket-items') && !e.target.closest('.popup__favorite-items') && !e.target.closest('.popup__button-clear')) {
                    popupClose(e.target.closest('.popup'));
                }
            });
        }
    }

    function popupClose(popupActive, doUnlock = true) {
        if (unlock) {
            popupActive.classList.remove('popup__open');
            if (doUnlock) {
                bodyUnLock();
            }
        }
    }

    function bodyLock() {
        const lockPaddingValue = window.innerWidth - document.querySelector('body').offsetWidth + 'px';

        if (lockPadding.length > 0) {
            for (let index = 0; index < lockPadding.length; index++) {
                const el = lockPadding[index];
                el.style.paddingRight = lockPaddingValue;
            }
        }
        body.style.paddingRight = lockPaddingValue;
        body.classList.add('lock');
        notificationBox.style.marginRight = Number(20) + Number(lockPaddingValue.substr(0,2)) + 'px';
        unlock = false;
        setTimeout(function() {
            unlock = true;
        }, timeout);

    }

    function bodyUnLock() {
        setTimeout(function() {
            if (lockPadding.length > 0) {
                for (let index = 0; index < lockPadding.length; index++) {
                    const el = lockPadding[index];
                    el.style.paddingRight = '0px';
                }
            }
            body.style.paddingRight = '0px';
            body.classList.remove('lock');
            notificationBox.style.marginRight = '20px';
        }, timeout);

        unlock = false;
        setTimeout(function() {
            unlock = true;
        }, timeout);
    }

    document.addEventListener('keydown', function (e) {
        if (e.which === 27) {
            const popupActive = document.querySelector('.popup.popup__open');
            popupClose(popupActive);
        }
    });

}

export default popup;