import { ROOT_COUNTER_BASKET } from '../constants/root';
import  localStorageBasket  from '../utils/localStorageBasket';

class СounterBasket {
    constructor() {
        this.classNameBasketActive = 'basket--active';
    }

    render() {
        const products = localStorageBasket.getProducts();
        const basketeBtn = document.querySelector('.basket');

        products.length > 0 ? basketeBtn.classList.add(this.classNameBasketActive) : basketeBtn.classList.remove(this.classNameBasketActive);

        const html = `
            <span>
                ${products.length}
            </span>
        `;

        ROOT_COUNTER_BASKET.innerHTML = html;
    }
}

export default new СounterBasket();
