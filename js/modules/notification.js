import { ROOT_NOTIFICATION } from '../constants/root';

class Notification {
    handlerClearNotificationBox() {
        const notificationBox = document.getElementById('notification').innerHTML = '';
    }

    render(message) {
        
        const div = document.createElement('div');
        div.classList.add('notification__content');
        ROOT_NOTIFICATION.append(div);
        
        const html = `
            <p class="notification__message">${message}</p>
        `;

        const ROOT_NOTIFICATION_CONTENT = document.querySelector('.notification__content');
        ROOT_NOTIFICATION_CONTENT.innerHTML = html;

        setTimeout(
            () => {
                ROOT_NOTIFICATION_CONTENT.remove();
            },
            800
        );

        (function myMove() {
            let posElem = 0;
            let opacityElem = 1;
            let id = setInterval(frame, 10);
            function frame() {
                if (posElem == 80) {
                    clearInterval(id);
                } else {
                    posElem++;
                    opacityElem++
                    ROOT_NOTIFICATION_CONTENT.style.bottom = posElem + 'px';
                    ROOT_NOTIFICATION_CONTENT.style.opacity = 1 - opacityElem / 80;
                }
            }
        }());
    }
}

export default new Notification();