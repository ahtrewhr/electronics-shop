import { ROOT_ERROR } from '../constants/root';

class Error {
    render() {
        const html = `
            <div class="error">
                <p>Произошла ошибка. Попробуйте зайти позже.</p>
                <img src="images/content/error/robot-error.svg" alt="robot"/>
            </div>
        `;

        ROOT_ERROR.innerHTML = html;
    }
}

export default new Error();


