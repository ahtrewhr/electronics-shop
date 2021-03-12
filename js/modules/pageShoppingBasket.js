import { ROOT_PAGE_SHOPPING_BASKET } from '../constants/root';
import LocalStorageBasket  from '../utils/localStorageBasket';
import LocalStorageProduct from '../utils/localStorageProduct';
import CounterBasket from './counterBasket';
import Notification from './notification';
import { showPage } from './showPage';

class PageShoppingBasket {
    handlerRemoveProductOfBasket(CATALOG) {
        document.querySelectorAll('.popup__basket-item--delete').forEach(element => {
            element.addEventListener('click', () => {
                Notification.handlerClearNotificationBox();
                LocalStorageBasket.putProducts(element.id, CATALOG);
                showPage(CATALOG);
                CounterBasket.render();
                Notification.render('Товар удален из корзины');
                LocalStorageProduct.putProduct();
            });
        });
    }

    handlerClearProductsOfBasket(CATALOG) {
        const productsBasketStore = LocalStorageBasket.getProducts();
        const clearBtn = document.querySelector('.clear__basket');

        if (clearBtn !== null) {
            clearBtn.addEventListener('click', () => {
                Notification.handlerClearNotificationBox();
                localStorage.removeItem("basketProducts");
                localStorage.removeItem("basketProductsData");
                showPage(CATALOG);
                CounterBasket.render();
                Notification.render('Корзина товаров очищена');
                LocalStorageProduct.putProduct();
            });
        }
    }
    
    render(CATALOG) {
        const productsBasketStore = LocalStorageBasket.getProducts();
        const productsBasketStoreData = LocalStorageBasket.getProductsData();
        CATALOG = productsBasketStoreData;
        let htmlCatalog = '';
        let sumCatalog = 0;
        let counterProduct = 0;
        let checkoutBtn = '';
        let clearBtnBasket = '';

        CATALOG.forEach(({id, name, img, alt, price}) => {
            if (productsBasketStore.indexOf(id) !== -1) {
                htmlCatalog += `
                    <div class="popup__basket-item">
                        <img class="popup__basket-item--img" src="${img}" alt="${alt}">
                        <div class="popup__basket-item--wrapper">
                            <div class="popup__basket-item--name">${name}</div>
                            <div class="popup__basket-item--price">${price.toLocaleString('ru-RU', { style: 'currency', currency: 'RUB' } )}</div>
                        </div>
                        <button id="${id}" class="popup__basket-item--delete">Удалить товар</button>
                    </div>
                `;
                sumCatalog += price;
                counterProduct ++;
            }
        });

        if (productsBasketStore.length == 0) {
            clearBtnBasket = ''
            htmlCatalog += `
                <p class="popup__basket-item_clean">
                    В Вашей корзине отсутствуют товары
                </p>
            `;
        } else {
            checkoutBtn  = '<button class="popup__basket-total__btn">Оформить заказ</button>';
            clearBtnBasket = '<button class="popup__button-clear clear__basket">Очистить список</button>';
        }

        const html = `
                    <p class="popup__title">Ваша корзина товаров</p>
                    ${clearBtnBasket}
                    <div class="popup__basket-items">
                        ${htmlCatalog}
                    </div>
                    <div class="popup__basket-total">
                        <div class="popup__basket-total--wrapper">
                            <p>Количество товара: ${counterProduct}шт.</p>
                            <p class="popup__basket-total_summa">Сумма: ${sumCatalog.toLocaleString('ru-RU', { style: 'currency', currency: 'RUB' } )}</p>
                        </div>
                        ${checkoutBtn}
                    </div>
        `;

        ROOT_PAGE_SHOPPING_BASKET.innerHTML = html;
    }
}   

export default new PageShoppingBasket();