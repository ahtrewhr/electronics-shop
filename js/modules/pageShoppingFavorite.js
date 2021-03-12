import { ROOT_PAGE_SHOPPING_FAVORITE } from '../constants/root';
import LocalStorageBasket from '../utils/localStorageBasket';
import LocalStorageFavorite from '../utils/localStorageFavorite';
import LocalStorageProduct from '../utils/localStorageProduct';
import ProductPage from './productPage';
import CounterBasket from './counterBasket';
import CounterFavorite from './counterFavorite';
import Notification from './notification';
import { showPage } from './showPage';

class PageShoppingFavorite {
    handlerRemoveProductOfFavorite(CATALOG) {
        document.querySelectorAll('.popup__favorite-item--delete').forEach(element => {
            element.addEventListener('click', () => {
                Notification.handlerClearNotificationBox();
                LocalStorageFavorite.putProducts(element.id, CATALOG);
                showPage(CATALOG);
                CounterFavorite.render();
                Notification.render('Товар удален из избранного');
                ProductPage.render(CATALOG);
                ProductPage.handlerSetLocalStorageFavorite(CATALOG);
                LocalStorageProduct.putProduct();
            });
        });
    }

    handlerClearProductsOfFavorite(CATALOG) {
        const clearBtn = document.querySelector('.clear__favorite');

        if (clearBtn !== null) {
            clearBtn.addEventListener('click', () => {
                Notification.handlerClearNotificationBox();
                localStorage.removeItem("favoriteProducts");
                localStorage.removeItem("favoriteProductsData");
                showPage(CATALOG);
                CounterFavorite.render();
                Notification.render('Список избранных товаров очищен');
                ProductPage.render(CATALOG);
                ProductPage.handlerSetLocalStorageFavorite(CATALOG);
                LocalStorageProduct.putProduct();
            });
        }
    }

    handlerAddProductsOfBasket(CATALOG) {
        document.querySelectorAll('.popup__favorite-item--addbasket').forEach(element => {
            element.addEventListener('click', () => {
                Notification.handlerClearNotificationBox();
                LocalStorageBasket.putProducts(element.id, CATALOG);
                LocalStorageBasket.putProductsData(element.id);
                showPage(CATALOG);
                CounterBasket.render();
                const productsBasketStore = LocalStorageBasket.getProducts();
                productsBasketStore.indexOf(element.id) === -1 ? Notification.render('Товар удален из корзины') : Notification.render('Товар добавлен в корзину');
                LocalStorageProduct.putProduct();
            });
        });
    }
    
    render(CATALOG) {
        const productsBasketStore = LocalStorageBasket.getProducts();
        const productsFavoriteStore = LocalStorageFavorite.getProducts();
        const productsFavoriteStoreData = LocalStorageFavorite.getProductsData();
        CATALOG = productsFavoriteStoreData;
        let htmlCatalog = '';
        let sumCatalog = 0;
        let counterProduct = 0;
        let buttonLabel = '';
        let clearBtnFavorite = '';


        CATALOG.forEach(({id, name, code, img, alt, price, presence, sale}) => {

            if(productsBasketStore.indexOf(id) === -1) {
                buttonLabel = 'добавить в корзину';
            } else {
                buttonLabel = 'удалить из корзины';
            }

            if (productsFavoriteStore.indexOf(id) !== -1) {
                htmlCatalog += `
                    <div class="popup__favorite-item">
                        <img class="popup__favorite-item--img" src="${img}" alt="${alt}">
                        <div class="popup__favorite-item--wrapper">
                            <div class="popup__favorite-item--name">${name}</div>
                            <div class="popup__favorite-item--price">${price.toLocaleString('ru-RU', { style: 'currency', currency: 'RUB' } )}</div>
                        </div>
                        <div class="popup__favorite-itembox">
                            <button id="${id}" class="popup__favorite-item--delete">Удалить товар</button>
                            <button id="${id}" class="popup__favorite-item--addbasket">${buttonLabel}</button>
                        </div>
                    </div>
                `;

                sumCatalog += price;
                counterProduct ++;
            } 
        });

        if (productsFavoriteStore.length == 0) {
            clearBtnFavorite = '';
            htmlCatalog += `
                <p class="popup__favorite-item_clean">
                    У Вас отсутствуют избранные товары 
                </p>
            `;
        } else {
            clearBtnFavorite = '<button class="popup__button-clear clear__favorite">Очистить список</button>';
        }

        const html = `
                    <p class="popup__title">Ваши избранные товары</p>
                    ${clearBtnFavorite}
                    <div class="popup__favorite-items">
                        ${htmlCatalog}
                    </div>
                    <div class="popup__favorite-total">
                        <div class="popup__favorite-total--wrapper">
                            <p>Количество товара: ${counterProduct}шт.</p>
                            <p class="popup__favorite-total_summa">Сумма: ${sumCatalog.toLocaleString('ru-RU', { style: 'currency', currency: 'RUB' } )}</p>
                        </div>
                    </div>
        `;

        ROOT_PAGE_SHOPPING_FAVORITE.innerHTML = html;
    }
}   

export default new PageShoppingFavorite();