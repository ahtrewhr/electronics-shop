import { ROOT_PRODUCTS } from '../constants/root';
import LocalStorageBasket from '../utils/localStorageBasket';
import LocalStorageFavorite from '../utils/localStorageFavorite';
import CounterBasket from './counterBasket';
import CounterFavorite from './counterFavorite';
import PageShoppingBasket from './pageShoppingBasket';
import PageShoppingFavorite from './pageShoppingFavorite';
import Notification from './notification';

class Products {
    constructor() {
        this.classNameBasketActive = 'product-item__basket--active';
        this.classNameFavoriteActive = 'product-item__favorite--active';
    }

    handlerSetLocalStorageBasket(CATALOG) {
        document.querySelectorAll('.product-item__basket').forEach(element => {
            element.addEventListener('click', () => {
                Notification.handlerClearNotificationBox();
                
                const { pushProduct, products } = LocalStorageBasket.putProducts(element.id, CATALOG);
                
                if (pushProduct) {
                    element.classList.add(this.classNameBasketActive);
                    Notification.render('Товар добавлен в корзину');
                } else {
                    element.classList.remove(this.classNameBasketActive);
                    Notification.render('Товар удален из корзины');
                }

                CounterBasket.render();
                
                PageShoppingBasket.render(CATALOG);
                PageShoppingBasket.handlerRemoveProductOfBasket(CATALOG);
                PageShoppingBasket.handlerClearProductsOfBasket(CATALOG);

                PageShoppingFavorite.render(CATALOG);
                PageShoppingFavorite.handlerRemoveProductOfFavorite(CATALOG);
                PageShoppingFavorite.handlerClearProductsOfFavorite(CATALOG);
                PageShoppingFavorite.handlerAddProductsOfBasket(CATALOG);
            });
        });

        PageShoppingBasket.render(CATALOG);
        PageShoppingBasket.handlerRemoveProductOfBasket(CATALOG);
        PageShoppingBasket.handlerClearProductsOfBasket(CATALOG);

    }

    handlerSetLocalStorageFavorite(CATALOG) {
        document.querySelectorAll('.product-item__favorite').forEach(element => {
            element.addEventListener('click', () => {
                Notification.handlerClearNotificationBox();

                const { pushProduct, products } = LocalStorageFavorite.putProducts(element.id, CATALOG);
    
                if (pushProduct) {
                    element.classList.add(this.classNameFavoriteActive);
                    Notification.render('Товар добавлен в избранное');
                } else {
                    element.classList.remove(this.classNameFavoriteActive);
                    Notification.render('Товар удален из избранного');
                }

                CounterFavorite.render();
                PageShoppingFavorite.render(CATALOG);
                PageShoppingFavorite.handlerRemoveProductOfFavorite(CATALOG);
                PageShoppingFavorite.handlerClearProductsOfFavorite(CATALOG);
                PageShoppingFavorite.handlerAddProductsOfBasket(CATALOG);
            });
        });

        PageShoppingFavorite.render(CATALOG);
        PageShoppingFavorite.handlerRemoveProductOfFavorite(CATALOG);
        PageShoppingFavorite.handlerClearProductsOfFavorite(CATALOG);
        PageShoppingFavorite.handlerAddProductsOfBasket(CATALOG);
    }

    render(content) {
        const productsBasketStore = LocalStorageBasket.getProducts();
        const productsFavoriteStore = LocalStorageFavorite.getProducts();

        let htmlCatalog = '';
        let productSale = '';

        content.forEach(({id, name, img, alt, price, sale}) => {
            let activeClassBasket = '';
            let activeClassFavorite = '';

            if(productsBasketStore.indexOf(id) === -1) {
                activeClassBasket;
            } else {
                activeClassBasket = this.classNameBasketActive;
            }

            if(productsFavoriteStore.indexOf(id) === -1) {
                activeClassFavorite;
            } else {
                activeClassFavorite = this.classNameFavoriteActive;
            }

            if(sale == true) {
                productSale = 'product-item--sale';
            } else {
                productSale = '';
            }
            
            htmlCatalog += `
                <div class="product-item__wrapper">
                    <button id="${id}" class="product-item__favorite ${activeClassFavorite}"></button>
                    <button id="${id}" class="product-item__basket ${activeClassBasket}">
                        <img src="images/icons/basket-white.svg" alt="">
                    </button>
                    <a class="product-item__notify-link" href="#"><span>Сообщить о поступлении</span></a>
                    <a id="${id}" class="product-item ${productSale}" href="product-page.html">
                        <p class="product-item__hover-text">посмотреть товар</p>
                        <img class="product-item__img" src="${img}" alt="${alt}">
                        <h4 class="product-item__title">${name}</h4>
                        <p class="price product-item__price">${price.toLocaleString('ru-RU', { style: 'currency', currency: 'RUB' } )}</p>
                        <p class="product-item__notify-text">нет в наличии</p>
                    </a>
                </div>
            `;
        });

        const html = `
            ${htmlCatalog}
        `;

        ROOT_PRODUCTS.innerHTML = html;
    }
    
}

export default new Products();