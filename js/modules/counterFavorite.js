import { ROOT_COUNTER_FAVORITE } from '../constants/root';
import  localStorageFavorite  from '../utils/localStorageFavorite';

class СounterFavorite {
    constructor() {
        this.classNameFavoriteActive = 'favorite--active';
    }

    render() {
        const products = localStorageFavorite.getProducts();
        const favoriteBtn = document.querySelector('.favorite');
        const favoriteNum = document.querySelector('.favorite__num');

        if (products.length > 0) {
            favoriteBtn.classList.add(this.classNameFavoriteActive);
            favoriteNum.style.display = 'block';
        } else {
            favoriteBtn.classList.remove(this.classNameFavoriteActive);
            favoriteNum.style.display = 'none';
        }

        const html = `
            <span>
                ${products.length}
            </span>
        `;

        ROOT_COUNTER_FAVORITE.innerHTML = html;
    }
}

export default new СounterFavorite();
