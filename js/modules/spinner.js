import { ROOT_SPINNER } from '../constants/root';

class Spinner {
    render () {
        const html = `
            <img src="images/icons/spinner.svg" alt="spinner" />
        `;

        ROOT_SPINNER.innerHTML = html;
    }
}
    
export default new Spinner();