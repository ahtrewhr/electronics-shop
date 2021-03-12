import { ROOT_PAGE_PRODUCT, ROOT_PAGE_CARD_TABS } from '../constants/root';
import LocalStorageProduct  from '../utils/localStorageProduct';
import LocalStorageFavorite from '../utils/localStorageFavorite';
import CounterFavorite from './counterFavorite';
import PageShoppingFavorite from './pageShoppingFavorite';
import Notification from './notification';
import Designation from './designation';
import { handlerSmoothScroll } from '../library/appearanceAnimation';

class ProductPage {

    handlerAvialableLabel() {
        const avialableInShops = document.querySelectorAll('.avialable-num');
        avialableInShops.forEach(item => {
            if (item.innerHTML > 0) {
                item.previousElementSibling.innerHTML = 'В наличии';
            } else {
                item.previousElementSibling.innerHTML = 'Нет в наличии';
                item.nextElementSibling.classList.add('card__list-disabledbtn')
            }
        })
    }

    handlerSetLocalStorageFavorite(CATALOG) {
        document.querySelectorAll('.product-card__icon-favorite').forEach(element => {
            element.addEventListener('click', () => {
                Notification.handlerClearNotificationBox();

                const { pushProduct, products } = LocalStorageFavorite.putProducts(element.id, CATALOG);
    
                if (pushProduct) {
                    element.classList.add(this.classNameFavoriteActive);
                    Notification.render('Товар добавлен в избранное');
                    element.classList.add('product-card__icon-favoriteactive');
                } else {
                    element.classList.remove(this.classNameFavoriteActive);
                    Notification.render('Товар удален из избранного');
                    element.classList.remove('product-card__icon-favoriteactive');
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

    render(CATALOG) {
        const productStore = LocalStorageProduct.getProduct();
        const productsFavoriteStore = LocalStorageFavorite.getProducts();
        
        let htmlCardProduct = '';
        let htmlCardTab = '';
        let productSale = '';
        let avialableLabel = '';
        let productCardBtn = '';
        let productFavorite = '';
        let productCharacteristics = [];
        let cardCharacteristics = [];
        let images = [];

        CATALOG.forEach(({id, shortname, code, img, imgslide, alt, price, oldprice, rating, presence, sale, characteristics, description, availability}) => {
        
            if (productStore.indexOf(id) !== -1) {
                for (let item in characteristics) {
                    let li = document.createElement('li');
                    li.classList.add('product-card__item');

                    let divLeft = document.createElement('div');
                    divLeft.classList.add('product-card__item-left');
                    divLeft.innerHTML = item;

                    let divRight = document.createElement('div');
                    divRight.classList.add('product-card__item-right');
                    divRight.innerHTML = characteristics[item];

                    li.append(divLeft);
                    li.append(divRight);
                    productCharacteristics.push(li);
                }

                for (let item in characteristics) {
                    let li = document.createElement('li');
                    li.classList.add('product-card__item');

                    let divLeft = document.createElement('div');
                    divLeft.classList.add('product-card__item-left');
                    divLeft.innerHTML = item;

                    let divRight = document.createElement('div');
                    divRight.classList.add('product-card__item-right');
                    divRight.innerHTML = characteristics[item];

                    li.append(divLeft);
                    li.append(divRight);
                    cardCharacteristics.push(li);
                }

                for (let item in imgslide) {
                    let imgProduct = document.createElement('img');
                    imgProduct.classList.add('product-card__img');
                    imgProduct.src = imgslide[item];
                    imgProduct.alt = alt;
                    images.push(imgProduct);
                }

                if(sale == true) {
                    productSale = 'product-item--sale';
                } else {
                    productSale = '';
                }

                if (presence != true) {
                    avialableLabel = 'Нет в наличии';
                    productCardBtn = 'product-card__disabledbtn'
                } else {
                    avialableLabel = 'купить';
                }

                if(productsFavoriteStore.indexOf(id) !== -1) {
                    productFavorite = 'product-card__icon-favoriteactive';
                }

                if (oldprice === false) {
                    oldprice = '';
                }

                Designation.renderBreadcrumbs(shortname)

                htmlCardProduct = `
                    <div class="product-card__img-box ${productSale}">
                        <div class="product-card__images"></div>
                        <p class="product-card__price-old">${oldprice.toLocaleString('ru-RU', { style: 'currency', currency: 'RUB' } )}</p>
                        <p class="product-card__price-new">${price.toLocaleString('ru-RU', { style: 'currency', currency: 'RUB' } )}</p>
                        <a class="product-card__link" href="#">Нашли дешевле? Снизим цену!</a>
                        <div class="product-card__btn product-card__btn-mobile ${productCardBtn}">
                            <button>${avialableLabel}</button>
                        </div>
                    </div>
                    <div class="product-card__content">
                        <h1 class="product-card__title">${shortname}</h1>
                        <p class="product-card__code">Код товара: ${code}</p>
                        <div class="product-card__buttons">
                            <a id="${id}" class="product-card__icon-favorite ${productFavorite}" hreff="#">
                                <img src="images/icons/heart.svg" alt="heart">
                            </a>
                            <a class="product-card__icon-comparsion" href="#">
                                <img src="images/icons/comparsion.svg" alt="comparsion">
                            </a>
                            <a class="rate" href="#">
                                <div class="rate-yo" data-rateyo-rating="${rating}"></div>
                            </a>
                        </div>
                        <div class="tabs-wrapper product-card__tabs">
                            <div class="tabs">
                                <a class="tab product-card__tab tab--active" href="#product-1">Характеристики</a>
                            </div>
                            <div class="tabs-container">
                                <div id="product-1" class="tabs-content product-card__tab-content tabs-content--active">
                                    <ul class="product-card__list">
                                        
                                    </ul>
                                    <div class="product-card__btn ${productCardBtn}">
                                        <button>${avialableLabel}</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `;

                const shops = Object.entries(availability);

                htmlCardTab = `
                    <div class="container">
                        <div class="tabs-wrapper">
                            <div class="tabs card__tab-box mobile-overflow">
                                <a class="tab card__tab tab--active" href="#product-card__tabs-1">О товаре</a>
                                <a class="tab card__tab" href="#product-card__tabs-2">Характеристики</a>
                                <a class="tab card__tab" href="#product-card__tabs-3">Отзывы</a>
                                <a class="tab card__tab" href="#product-card__tabs-4">Самовывоз</a>
                                <a class="tab card__tab" href="#product-card__tabs-5">Доставка</a>
                                <a class="tab card__tab" href="#product-card__tabs-6">Cервис</a>
                                <a class="tab card__tab" href="#product-card__tabs-7">Гарантия</a>
                            </div>
                        </div>
                        <div class="tabs-container">
                            <div id="product-card__tabs-1" class="card__tab-content tabs-content tabs-content--active">${description}</div>
                            <div id="product-card__tabs-2" class="card__tab-content tabs-content">
                                <ul class="product-characteristics">
                                
                                </ul>
                            </div>
                            <div id="product-card__tabs-3" class="card__tab-content tabs-content">Отзывы для данного товара отсутствуют</div>
                            <div id="product-card__tabs-4" class="card__tab-content tabs-content">
                                <form>
                                    <ul class="card__list">
                                        <li class="card__list-item card__list-itemtitle">
                                            <div class="card__list-address">Адрес</div>
                                            <div class="card__list-workhours">Режим работы</div>
                                            <div class="card__list-avialable">Доступно</div>
                                            <div class="card__list-num">Количество</div>
                                            <div class="card__list-btn"></div>
                                        </li>
                                        <li class="card__list-item">
                                            <div class="card__list-address">${shops[0][0]}</div>
                                            <div class="card__list-workhours">
                                                <div class="workhours">
                                                    <span>пн-сб:</span>
                                                    <span>08:00-22:00</span>
                                                </div>
                                                <div class="workhours">
                                                    <span>вс:</span>
                                                    <span>09:00-22:00</span>
                                                </div>
                                            </div>
                                            <div class="card__list-avialable"></div>
                                            <div class="card__list-num avialable-num">${shops[0][1]}</div>
                                            <div class="card__list-btn">
                                                <button type="submit">купить</button>
                                            </div>
                                        </li>
                                        <li class="card__list-item">
                                            <div class="card__list-address">${shops[1][0]}</div>
                                            <div class="card__list-workhours">
                                                <div class="workhours">
                                                    <span>пн-сб:</span>
                                                    <span>08:00-22:00</span>
                                                </div>
                                                <div class="workhours">
                                                    <span>вс:</span>
                                                    <span>09:00-22:00</span>
                                                </div>
                                            </div>
                                            <div class="card__list-avialable"></div>
                                            <div class="card__list-num avialable-num">${shops[1][1]}</div>
                                            <div class="card__list-btn">
                                                <button type="submit">купить</button>
                                            </div>
                                        </li>
                                        <li class="card__list-item">
                                            <div class="card__list-address">${shops[2][0]}</div>
                                            <div class="card__list-workhours">
                                                <div class="workhours">
                                                    <span>пн-сб:</span>
                                                    <span>08:00-22:00</span>
                                                </div>
                                                <div class="workhours">
                                                    <span>вс:</span>
                                                    <span>09:00-22:00</span>
                                                </div>
                                            </div>
                                            <div class="card__list-avialable"></div>
                                            <div class="card__list-num avialable-num">${shops[2][1]}</div>
                                            <div class="card__list-btn">
                                                <button type="submit">купить</button>
                                            </div>
                                        </li>
                                        <li class="card__list-item">
                                            <div class="card__list-address">${shops[3][0]}</div>
                                            <div class="card__list-workhours">
                                                <div class="workhours">
                                                    <span>пн-сб:</span>
                                                    <span>08:00-22:00</span>
                                                </div>
                                                <div class="workhours">
                                                    <span>вс:</span>
                                                    <span>09:00-22:00</span>
                                                </div>
                                            </div>
                                            <div class="card__list-avialable"></div>
                                            <div class="card__list-num avialable-num">${shops[3][1]}</div>
                                            <div class="card__list-btn">
                                                <button type="submit">купить</button>
                                            </div>
                                        </li>
                                    </ul>
                                </form>
                            </div>
                            <div id="product-card__tabs-5" class="card__tab-content tabs-content">
                                <p>- Приобретаемый товар доставляется в квартиру (коттедж, дачу) только при наличии подъездных путей к подъезду дома (дачи, коттеджа). В двухуровневых квартирах, многоэтажных коттеджах и дачах товар заносится на первый этаж.</p>
                                <p>- При ручном подъеме товара лестничные проходы и пролеты до места доставки не должны быть загромождены или заставлены.</p>
                                <p>- Упакованный товар заносится за порог помещения в который доставляется заказ, перемещение товара в другие точки помещения не осуществляются.</p>
                                <p>- расстояние между дверной коробкой или стеной и каждой стороной товара в упаковке не меньше 10 см.</p>
                            </div>
                            <div id="product-card__tabs-6" class="card__tab-content tabs-content">
                                <p>Вы вправе обменять товар надлежащего качества на аналогичный товар в течение 14 дней, не считая дня покупки.</p>
                                <p>Обращаем Ваше внимание, что основная часть нашего ассортимента – технически сложные товары бытового назначения (электроника, фотоаппаратура, бытовая техника и т.п.).</p>
                                <p>Указанные товары, согласно Постановлению Правительства РФ от 31.12.2020 N 2463 , возврату и обмену как товары надлежащего качества не подлежат.</p>
                            </div>
                            <div id="product-card__tabs-7" class="card__tab-content tabs-content">
                                <p>Если в купленном Вами товаре в течение установленного гарантийного срока обнаружены недостатки, Вы по своему выбору вправе:</p>
                                <p>- потребовать замены на товар этой же марки (этой же модели и (или) артикула)</p>
                                <p>- потребовать замены на такой же товар другой марки (модели, артикула) с соответствующим перерасчетом покупной цены;</p>
                                <p>- потребовать соразмерного уменьшения покупной цены;</p>
                                <p>- потребовать незамедлительного безвозмездного устранения недостатков товара или возмещения расходов на их исправление потребителем или третьим лицом;</p>
                                <p>- отказаться от исполнения договора купли-продажи и потребовать возврата уплаченной за товар суммы. В этом случае Вы обязаны вернуть товар с недостатками продавцу за его счет.</p>
                            </div>
                        </div>
                    </div>
                `;
            }
        });

        const htmlProduct = `
            ${htmlCardProduct}
        `;

        const htmlInfoProduct = `
            ${htmlCardTab}
        `;

        if (ROOT_PAGE_PRODUCT === null) {
            return false;
        } else {
            ROOT_PAGE_PRODUCT.innerHTML = htmlProduct;
            ROOT_PAGE_CARD_TABS.innerHTML = htmlInfoProduct;
        }

        (function handlerCharacteristics() {

            const listCharacteristics = document.querySelector('.product-card__list');
            productCharacteristics.forEach(el => listCharacteristics.appendChild(el));

            for (let i = 0; i < productCharacteristics.length; i++) {
                if (i > 4) {
                    productCharacteristics[i].style.display = 'none';
                }
            }
            if (productCharacteristics.length > 4) {
                let linkMore = document.createElement('span');
                linkMore.classList.add('product-card__more');
                linkMore.textContent = 'Показать еще';
                listCharacteristics.appendChild(linkMore);

                const linkMoreBtn = document.querySelector('.product-card__more');
                linkMoreBtn.addEventListener('click', function() {
                    document.querySelectorAll('.tab.card__tab').forEach(item => item.classList.remove('tab--active'));
                    document.querySelectorAll('.card__tab-content.tabs-content').forEach(item => item.classList.remove('tabs-content--active'));
                    document.querySelector('a[href^="#product-card__tabs-2"]').classList.add('tab--active');
                    document.querySelector('#product-card__tabs-2').classList.add('tabs-content--active');
                    handlerSmoothScroll(document.querySelector('.tabs-wrapper'), -450)
                });
            }



            const characteristicsProduct = document.querySelector('.product-characteristics');
            cardCharacteristics.forEach(elem => characteristicsProduct.appendChild(elem));


        })();

        (function handlerImagesProducts() {
            const productCardImages = document.querySelector('.product-card__images');
            images.forEach(elem => productCardImages.appendChild(elem));
        })();

        $('.tab').on('click', function(e) {
            e.preventDefault();
    
            $($(this).siblings()).removeClass('tab--active');
            $($(this).closest('.tabs-wrapper').siblings().find('div')).removeClass('tabs-content--active');
    
            $(this).addClass('tab--active');
            $($(this).attr('href')).addClass('tabs-content--active');
    
            $('.product-slider').slick('setPosition');
        });

        $(".rate-yo").rateYo({
            ratedFill: "#daa520",
            normalFill: "#fff",
            spacing: "10px"
        });

        $('.product-card__images').slick({
            infinite: false,
            speed: 300,
            slidesToShow: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            prevArrow: '<button class="product-slider__slider-btn product-slider__slider-btnprev"><img src="images/icons/arrow-left.svg" alt=""></button>',
            nextArrow: '<button class="product-slider__slider-btn product-slider__slider-btnnext"><img src="images/icons/arrow-right.svg" alt=""></button>',
        });

    }
}   

export default new ProductPage();