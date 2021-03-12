/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/constants/root.js":
/*!******************************!*\
  !*** ./js/constants/root.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ROOT_PRODUCTS": () => /* binding */ ROOT_PRODUCTS,
/* harmony export */   "ROOT_COUNTER_BASKET": () => /* binding */ ROOT_COUNTER_BASKET,
/* harmony export */   "ROOT_COUNTER_FAVORITE": () => /* binding */ ROOT_COUNTER_FAVORITE,
/* harmony export */   "ROOT_PAGE_SHOPPING_BASKET": () => /* binding */ ROOT_PAGE_SHOPPING_BASKET,
/* harmony export */   "ROOT_PAGE_SHOPPING_FAVORITE": () => /* binding */ ROOT_PAGE_SHOPPING_FAVORITE,
/* harmony export */   "ROOT_PAGE_PRODUCT": () => /* binding */ ROOT_PAGE_PRODUCT,
/* harmony export */   "ROOT_PAGE_CARD_TABS": () => /* binding */ ROOT_PAGE_CARD_TABS,
/* harmony export */   "ROOT_NOTIFICATION": () => /* binding */ ROOT_NOTIFICATION,
/* harmony export */   "ROOT_PAGINATION": () => /* binding */ ROOT_PAGINATION,
/* harmony export */   "ROOT_SPINNER": () => /* binding */ ROOT_SPINNER,
/* harmony export */   "ROOT_ERROR": () => /* binding */ ROOT_ERROR,
/* harmony export */   "ROOT__BREADCRUMBS": () => /* binding */ ROOT__BREADCRUMBS,
/* harmony export */   "ROOT_TITLE": () => /* binding */ ROOT_TITLE,
/* harmony export */   "ROOT_FILTER_ASIDE": () => /* binding */ ROOT_FILTER_ASIDE
/* harmony export */ });
const ROOT_PRODUCTS = document.querySelector('.catalog__inner-list');
const ROOT_COUNTER_BASKET = document.querySelector('.basket__num');
const ROOT_COUNTER_FAVORITE = document.querySelector('.favorite__num');
const ROOT_PAGE_SHOPPING_BASKET = document.getElementById('popup__basket-content');
const ROOT_PAGE_SHOPPING_FAVORITE = document.getElementById('popup__favorite-content');
const ROOT_PAGE_PRODUCT = document.querySelector('.product-card__inner');
const ROOT_PAGE_CARD_TABS = document.querySelector('.card__tabs');
const ROOT_NOTIFICATION = document.getElementById('notification');
const ROOT_PAGINATION = document.getElementById('pagination');
const ROOT_SPINNER = document.querySelector('.spinner');
const ROOT_ERROR = document.querySelector('.catalog .container');
const ROOT__BREADCRUMBS = document.querySelector('.breadcrumbs__inner');
const ROOT_TITLE = document.querySelector('.catalog__title');
const ROOT_FILTER_ASIDE = document.querySelector('.catalog__inner-aside.aside-filter');





/***/ }),

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_popup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/popup */ "./js/modules/popup.js");
/* harmony import */ var _modules_counterBasket__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/counterBasket */ "./js/modules/counterBasket.js");
/* harmony import */ var _modules_counterFavorite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/counterFavorite */ "./js/modules/counterFavorite.js");
/* harmony import */ var _modules_pageShoppingBasket__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/pageShoppingBasket */ "./js/modules/pageShoppingBasket.js");
/* harmony import */ var _modules_pageShoppingFavorite__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/pageShoppingFavorite */ "./js/modules/pageShoppingFavorite.js");
/* harmony import */ var _utils_localStorage_ategory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/localStorageСategory */ "./js/utils/localStorageСategory.js");
/* harmony import */ var _utils_localStorageProduct__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/localStorageProduct */ "./js/utils/localStorageProduct.js");
/* harmony import */ var _modules_productPage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/productPage */ "./js/modules/productPage.js");
/* harmony import */ var _modules_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/spinner */ "./js/modules/spinner.js");
/* harmony import */ var _modules_error__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/error */ "./js/modules/error.js");
/* harmony import */ var _modules_filter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/filter */ "./js/modules/filter.js");
/* harmony import */ var _modules_designation__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/designation */ "./js/modules/designation.js");
/* harmony import */ var _modules_main__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modules/main */ "./js/modules/main.js");
/* harmony import */ var _modules_filterProducts_filter_omputers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modules/filterProducts/filterСomputers */ "./js/modules/filterProducts/filterСomputers.js");
/* harmony import */ var _modules_filterProducts_filterLaptops__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./modules/filterProducts/filterLaptops */ "./js/modules/filterProducts/filterLaptops.js");
/* harmony import */ var _modules_filterProducts_filterMonitors__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./modules/filterProducts/filterMonitors */ "./js/modules/filterProducts/filterMonitors.js");
/* harmony import */ var _modules_filterProducts_filterHeadphones__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./modules/filterProducts/filterHeadphones */ "./js/modules/filterProducts/filterHeadphones.js");
/* harmony import */ var _modules_filterProducts_filterKeyboards__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./modules/filterProducts/filterKeyboards */ "./js/modules/filterProducts/filterKeyboards.js");
/* harmony import */ var _modules_filterProducts_filterMouses__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./modules/filterProducts/filterMouses */ "./js/modules/filterProducts/filterMouses.js");





















window.addEventListener('DOMContentLoaded', () => {
    
    let CATALOG = [];
    let FILTER = [];
    _utils_localStorage_ategory__WEBPACK_IMPORTED_MODULE_5__.default.putCategory();
    
    _modules_counterBasket__WEBPACK_IMPORTED_MODULE_1__.default.render();
    _modules_counterFavorite__WEBPACK_IMPORTED_MODULE_2__.default.render();

    _modules_pageShoppingBasket__WEBPACK_IMPORTED_MODULE_3__.default.render();
    _modules_pageShoppingBasket__WEBPACK_IMPORTED_MODULE_3__.default.handlerRemoveProductOfBasket(CATALOG);
    _modules_pageShoppingBasket__WEBPACK_IMPORTED_MODULE_3__.default.handlerClearProductsOfBasket(CATALOG);
    
    _modules_pageShoppingFavorite__WEBPACK_IMPORTED_MODULE_4__.default.render();
    _modules_pageShoppingFavorite__WEBPACK_IMPORTED_MODULE_4__.default.handlerRemoveProductOfFavorite(CATALOG);
    _modules_pageShoppingFavorite__WEBPACK_IMPORTED_MODULE_4__.default.handlerClearProductsOfFavorite(CATALOG);
    _modules_pageShoppingFavorite__WEBPACK_IMPORTED_MODULE_4__.default.handlerAddProductsOfBasket(CATALOG);

    (0,_modules_popup__WEBPACK_IMPORTED_MODULE_0__.default)();

    if (_utils_localStorage_ategory__WEBPACK_IMPORTED_MODULE_5__.default.getCategory().indexOf('computers') === 0) {
        CATALOG = 'https://api.jsonbin.io/b/604a5c90683e7e079c4cdd52';
        FILTER = _modules_filterProducts_filter_omputers__WEBPACK_IMPORTED_MODULE_13__.default.render;
    }
    else if (_utils_localStorage_ategory__WEBPACK_IMPORTED_MODULE_5__.default.getCategory().indexOf('laptops') === 0) {
        CATALOG = 'https://api.jsonbin.io/b/6048b6367ea6546cf3d94d43';
        FILTER = _modules_filterProducts_filterLaptops__WEBPACK_IMPORTED_MODULE_14__.default.render;
    }
    else if (_utils_localStorage_ategory__WEBPACK_IMPORTED_MODULE_5__.default.getCategory().indexOf('monitors') === 0) {
        CATALOG = 'https://api.jsonbin.io/b/604a5cf87ea6546cf3db298f';
        FILTER = _modules_filterProducts_filterMonitors__WEBPACK_IMPORTED_MODULE_15__.default.render;
    }
    else if (_utils_localStorage_ategory__WEBPACK_IMPORTED_MODULE_5__.default.getCategory().indexOf('headphones') === 0) {
        CATALOG = 'https://api.jsonbin.io/b/6048b69000e5956cd8899f4c';
        FILTER = _modules_filterProducts_filterHeadphones__WEBPACK_IMPORTED_MODULE_16__.default.render;
    }
    else if (_utils_localStorage_ategory__WEBPACK_IMPORTED_MODULE_5__.default.getCategory().indexOf('keyboards') === 0) {
        CATALOG = 'https://api.jsonbin.io/b/6048b6aa7ea6546cf3d94daa';
        FILTER = _modules_filterProducts_filterKeyboards__WEBPACK_IMPORTED_MODULE_17__.default.render;
    }
    else if (_utils_localStorage_ategory__WEBPACK_IMPORTED_MODULE_5__.default.getCategory().indexOf('mouses') === 0) {
        CATALOG = 'https://api.jsonbin.io/b/6048b6c500e5956cd8899f81';
        FILTER = _modules_filterProducts_filterMouses__WEBPACK_IMPORTED_MODULE_18__.default.render;
    }

    if (window.location.href.indexOf('catalog') !== -1) {

        _modules_spinner__WEBPACK_IMPORTED_MODULE_8__.default.render();
        _modules_designation__WEBPACK_IMPORTED_MODULE_11__.default.renderBreadcrumbs();
        (0,_modules_main__WEBPACK_IMPORTED_MODULE_12__.default)();

        fetch(CATALOG)
        .then(res => res.json())
        .then(body => {
            CATALOG = body;

            _modules_designation__WEBPACK_IMPORTED_MODULE_11__.default.renderTitle();

            FILTER();
            (0,_modules_filter__WEBPACK_IMPORTED_MODULE_10__.default)(CATALOG);
            _utils_localStorageProduct__WEBPACK_IMPORTED_MODULE_6__.default.putProduct();

        })
        .catch(error => {
            _modules_error__WEBPACK_IMPORTED_MODULE_9__.default.render();
        });

        
    } 
    else if (window.location.href.indexOf('product-page') !== -1) {

        _modules_spinner__WEBPACK_IMPORTED_MODULE_8__.default.render();
        _modules_designation__WEBPACK_IMPORTED_MODULE_11__.default.renderBreadcrumbs();
        (0,_modules_main__WEBPACK_IMPORTED_MODULE_12__.default)();
        
        fetch(CATALOG)
        .then(res => res.json())
        .then(body => {
            CATALOG = body;

            _modules_productPage__WEBPACK_IMPORTED_MODULE_7__.default.render(CATALOG);
            _modules_productPage__WEBPACK_IMPORTED_MODULE_7__.default.handlerAvialableLabel();
            _modules_productPage__WEBPACK_IMPORTED_MODULE_7__.default.handlerSetLocalStorageFavorite(CATALOG);
        })
        .catch(error => {
            _modules_error__WEBPACK_IMPORTED_MODULE_9__.default.render();
        });
    }
    else {
        (0,_modules_main__WEBPACK_IMPORTED_MODULE_12__.default)();
    }
});

/***/ }),

/***/ "./js/library/appearanceAnimation.js":
/*!*******************************************!*\
  !*** ./js/library/appearanceAnimation.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "smoothUprise": () => /* binding */ smoothUprise,
/* harmony export */   "handlerSmoothScroll": () => /* binding */ handlerSmoothScroll
/* harmony export */ });
// document.querySelector('content').style.opacity = 0;
// show('content', 20);

function smoothUprise(element, speed) { 

    let valueOpacity;

    let smooth = setInterval(function() {

        valueOpacity = Number(document.querySelector(element).style.opacity);

        if (valueOpacity>1) {
            clearInterval(smooth);
        }

        valueOpacity += 0.1; 

        document.querySelector(element).style.opacity = valueOpacity;

    }, speed);
}

function handlerSmoothScroll(elem, indent = 0) {
    const posElement = elem.offsetTop - indent;

    window.scrollTo({
        top: posElement,
        left: 0,
        behavior: 'smooth'
      });
}



/***/ }),

/***/ "./js/modules/counterBasket.js":
/*!*************************************!*\
  !*** ./js/modules/counterBasket.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _constants_root__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/root */ "./js/constants/root.js");
/* harmony import */ var _utils_localStorageBasket__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/localStorageBasket */ "./js/utils/localStorageBasket.js");



class СounterBasket {
    constructor() {
        this.classNameBasketActive = 'basket--active';
    }

    render() {
        const products = _utils_localStorageBasket__WEBPACK_IMPORTED_MODULE_1__.default.getProducts();
        const basketeBtn = document.querySelector('.basket');

        products.length > 0 ? basketeBtn.classList.add(this.classNameBasketActive) : basketeBtn.classList.remove(this.classNameBasketActive);

        const html = `
            <span>
                ${products.length}
            </span>
        `;

        _constants_root__WEBPACK_IMPORTED_MODULE_0__.ROOT_COUNTER_BASKET.innerHTML = html;
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new СounterBasket());


/***/ }),

/***/ "./js/modules/counterFavorite.js":
/*!***************************************!*\
  !*** ./js/modules/counterFavorite.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _constants_root__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/root */ "./js/constants/root.js");
/* harmony import */ var _utils_localStorageFavorite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/localStorageFavorite */ "./js/utils/localStorageFavorite.js");



class СounterFavorite {
    constructor() {
        this.classNameFavoriteActive = 'favorite--active';
    }

    render() {
        const products = _utils_localStorageFavorite__WEBPACK_IMPORTED_MODULE_1__.default.getProducts();
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

        _constants_root__WEBPACK_IMPORTED_MODULE_0__.ROOT_COUNTER_FAVORITE.innerHTML = html;
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new СounterFavorite());


/***/ }),

/***/ "./js/modules/designation.js":
/*!***********************************!*\
  !*** ./js/modules/designation.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _constants_root__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/root */ "./js/constants/root.js");
/* harmony import */ var _utils_localStorage_ategory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/localStorageСategory */ "./js/utils/localStorageСategory.js");



class Designation {

    constructor() {
        this.labelComputers = 'Компьютеры';
        this.labelLaptops = 'Ноутбуки';
        this.labelMonitors = 'Мониторы';
        this.labelHeadphones = 'Наушники';
        this.labelKeyboards = 'Клавиатуры';
        this.labelMouses = 'Мыши';
    }

    renderBreadcrumbs(product) {

        const category = _utils_localStorage_ategory__WEBPACK_IMPORTED_MODULE_1__.default.getCategory();
        let label = '';
        let nameProduct = '';
        let html = '';
        
        if(category.indexOf('computers') !== -1) {
            label = this.labelComputers;
        } 
        else if (category.indexOf('laptops') !== -1) {
            label = this.labelLaptops;
        }
        else if (category.indexOf('monitors') !== -1) {
            label = this.labelMonitors;
        }
        else if (category.indexOf('headphones') !== -1) {
            label = this.labelHeadphones;
        }
        else if (category.indexOf('keyboards') !== -1) {
            label = this.labelKeyboards;
        }
        else if (category.indexOf('mouses') !== -1) {
            label = this.labelMouses;
        }

        if (product !== undefined) {
            html = `
                <ul class="breadcrumbs__list mobile-overflow">
                    <li class="breadcrumbs__list-item">
                        <a href="index.html">Главная</a>
                    </li>
                    <li class="breadcrumbs__list-item">
                        <a href="catalog.html">${label}</a>
                    </li>
                    <li class="breadcrumbs__list-item">
                        <span>${product}</span>
                    </li>
                </ul>
            `;
        } else {
            html = `
                <ul class="breadcrumbs__list mobile-overflow">
                    <li class="breadcrumbs__list-item">
                        <a href="index.html">Главная</a>
                    </li>
                    <li class="breadcrumbs__list-item">
                        <span>${label}</span>
                    </li>
                </ul>
            `;
        }

        const htmlBreadcrumbs = `
            ${html}
        `;

        _constants_root__WEBPACK_IMPORTED_MODULE_0__.ROOT__BREADCRUMBS.innerHTML = htmlBreadcrumbs;

    }

    renderTitle() {
        const category = _utils_localStorage_ategory__WEBPACK_IMPORTED_MODULE_1__.default.getCategory();
        let label = '';
        
        if(category.indexOf('computers') !== -1) {
            label = this.labelComputers;
        } 
        else if (category.indexOf('laptops') !== -1) {
            label = this.labelLaptops;
        }
        else if (category.indexOf('monitors') !== -1) {
            label = this.labelMonitors;
        }
        else if (category.indexOf('headphones') !== -1) {
            label = this.labelHeadphones;
        }
        else if (category.indexOf('keyboards') !== -1) {
            label = this.labelKeyboards;
        }
        else if (category.indexOf('mouses') !== -1) {
            label = this.labelMouses;
        }

        const htmlTitle = `
            ${label}
        `;

        _constants_root__WEBPACK_IMPORTED_MODULE_0__.ROOT_TITLE.innerHTML = htmlTitle;
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new Designation());

/***/ }),

/***/ "./js/modules/error.js":
/*!*****************************!*\
  !*** ./js/modules/error.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _constants_root__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/root */ "./js/constants/root.js");


class Error {
    render() {
        const html = `
            <div class="error">
                <p>Произошла ошибка. Попробуйте зайти позже.</p>
                <img src="images/content/error/robot-error.svg" alt="robot"/>
            </div>
        `;

        _constants_root__WEBPACK_IMPORTED_MODULE_0__.ROOT_ERROR.innerHTML = html;
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new Error());




/***/ }),

/***/ "./js/modules/filter.js":
/*!******************************!*\
  !*** ./js/modules/filter.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _constants_root__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/root */ "./js/constants/root.js");
/* harmony import */ var _showPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./showPage */ "./js/modules/showPage.js");
/* harmony import */ var _library_appearanceAnimation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../library/appearanceAnimation */ "./js/library/appearanceAnimation.js");




function filterProduct(CATALOG) {

    (0,_showPage__WEBPACK_IMPORTED_MODULE_1__.showPage)(CATALOG);
    (0,_showPage__WEBPACK_IMPORTED_MODULE_1__.pagination)(CATALOG);

    let filteredProducts = [];
    let endingFilteredProducts = [];
    let filteredSearch = []


    let sorting = '';
    let productItemForSelected = '';
    let productItemForInputs = '';
    let productItemForSearch = '';
    let valueSelectedFirst = '';
    let valueSelectedSecond = '';
    let valueSelectedThree = '';

    function filterBySelectedMenu(selectedMenu) {

        getProp(CATALOG, selectedMenu);

            function getProp(array) {
                
                for(let item in array) {

                    if(typeof(array[item]) === 'object') {

                        if (item.includes('filters')) {
                            productItemForSelected = array;
                        }

                        getProp(array[item]);

                        if (item.includes('selectMenu')) {
                            
                            let selectMenu = array[item];

                            valueSelectedFirst = '';
                            valueSelectedSecond = '';
                            valueSelectedThree = '';
                           
                            for (let key in selectMenu) {

                                if (key == 'valueSelectedFirst') {
                                    valueSelectedFirst = selectMenu[key];
                                }
                                else if (key == 'valueSelectedSecond') {
                                    valueSelectedSecond = selectMenu[key];
                                } 
                                else if (key == 'valueSelectedThree') {
                                    valueSelectedThree = selectMenu[key];
                                }

                                filterItem(selectedMenu, valueSelectedFirst, valueSelectedSecond, valueSelectedThree, productItemForSelected)

                            }
                        }
                    }  
                }
            }

    }

    function filterByPrice(filterAfterSelect) {
        const rangePrice = $(".js-range-slider").data("ionRangeSlider");
        let rangePriceMin = rangePrice.result.from;
        let rangePriceMax = rangePrice.result.to;

        filterAfterSelect = filterAfterSelect.filter(function (element) {
            return element.price > rangePriceMin && element.price < rangePriceMax;
        });
        return filterAfterSelect;
    }

    function filterByInput(filterAfterPrice) {

        const inputs = document.querySelectorAll('#filter-1 input');
        const countinputsChecked = document.querySelectorAll('#filter-1 input:checked').length;
       

        if (countinputsChecked != 0) {
            inputs.forEach((input) => {

                if(input.checked) {
    
                    getProp(filterAfterPrice);
    
                    function getProp(array) {
                        
                        for(let item in array) {
    
                            if(typeof(array[item]) === 'object') {
    
                                if (item.includes('filters')) {
                                    productItemForInputs = array;
                                }
    
                                getProp(array[item]);
    
                                if (item.includes('inputs')) {
                                    
                                    let inputs = array[item];
                                
                                    for (let key in inputs) {
    
                                        if(key == input.value && inputs[key] == true ) {

                                            endingFilteredProducts.push(productItemForInputs)
    
                                        } 
                                    }
                                } 
                            } 
                        }
                    }
                } 
            });

        } else {
            endingFilteredProducts = filterAfterPrice;
        }

    }

    function filterItem(selectedMenu, valueSelectedFirst, valueSelectedSecond, valueSelectedThree, productItemForSelected) {

        if (selectedMenu.get('selectMenuFirst') == 'any') {
            valueSelectedFirst = 'any';
        }

        if (selectedMenu.get('selectMenuSecond') == 'any') {
            valueSelectedSecond = 'any';
        }

        if (selectedMenu.get('selectMenuThree') == 'any') {
            valueSelectedThree = 'any';
        }

        if(selectedMenu.get('selectMenuFirst') == valueSelectedFirst && selectedMenu.get('selectMenuSecond') == valueSelectedSecond && selectedMenu.get('selectMenuThree') == valueSelectedThree) {
            filteredProducts.push(productItemForSelected);
        } 

        let filterAfterSelect = filteredProducts.filter(function(item, pos) {
            return filteredProducts.indexOf(item) == pos;
        });

        let filterAfterPrice = filterByPrice(filterAfterSelect);

        filterByInput(filterAfterPrice);

        let finalArrayProduct = endingFilteredProducts.filter(function(item, pos) {
            return endingFilteredProducts.indexOf(item) == pos;
        });

        if (finalArrayProduct == '') {
            _constants_root__WEBPACK_IMPORTED_MODULE_0__.ROOT_PRODUCTS.innerHTML = 'Нет подходящих товаров <br> <br> Попробуйте изменить условия поиска'
        } else {
            (0,_showPage__WEBPACK_IMPORTED_MODULE_1__.showPage)(finalArrayProduct);
            (0,_showPage__WEBPACK_IMPORTED_MODULE_1__.pagination)(finalArrayProduct);
            handlerSortingBtn(finalArrayProduct);
            handlerSearch(finalArrayProduct);
        }
    }
            
    function handlerFiltration() {

        const selects = document.querySelectorAll('#filter-1 .filter__item-listselect select');
        const selectedMenu = new Map();

        selects.forEach((select) => {
            selectedMenu.set(select.name,select.value);
        });

        filterBySelectedMenu(selectedMenu);
    }

    const btnFilter = document.querySelector('.filter-btn__send');

    btnFilter.addEventListener('click', function() {
        filteredProducts = [];
        endingFilteredProducts = [];
        (0,_showPage__WEBPACK_IMPORTED_MODULE_1__.resetPageNumber)();
        handlerFiltration();
        (0,_library_appearanceAnimation__WEBPACK_IMPORTED_MODULE_2__.handlerSmoothScroll)(document.querySelector('.catalog'), 10);
    });

    handlerSorting();
    handlerSortingBtn();

    function handlerSortingBtn(finalArrayProduct) {
        const btn = document.querySelector('.catalog__filter-btn');
        const select = document.querySelector('.catalog__filter-btn select');
    
        btn.addEventListener('click', function(e) {
            if (e.target.matches('LI') || e.target.matches('SELECT')) {
                sorting = select.value;
                (0,_showPage__WEBPACK_IMPORTED_MODULE_1__.resetPageNumber)();
                handlerSorting(sorting, finalArrayProduct);
            }
        });
    }
    
    function handlerSorting(sorting = 'popular', arrayProduct) {

        if(arrayProduct === undefined) {
            arrayProduct = CATALOG
        } 

        if (sorting == 'upprice') {
            arrayProduct.forEach(({price}) => {
                arrayProduct.sort((a, b) => a.price > b.price ? 1 : -1);
            });
        } else if (sorting == 'desprice') {
            arrayProduct.forEach(({price}) => {
                arrayProduct.sort((a, b) => a.price < b.price ? 1 : -1);
            });
        } else {
            arrayProduct.forEach(({rating}) => {
                arrayProduct.sort((a, b) => a.rating < b.rating ? 1 : -1);
            });
        }

        (0,_showPage__WEBPACK_IMPORTED_MODULE_1__.showPage)(arrayProduct);
        (0,_showPage__WEBPACK_IMPORTED_MODULE_1__.pagination)(arrayProduct);
    }

    function handlerSearch(finalArrayProduct) {
        const searchInputs = document.querySelectorAll('#filter-2 input[type="checkbox"]');
        searchInputs.forEach((item) => {
            item.onchange = function() {
                let value = this.value;
                let checked = this.checked;
                (0,_showPage__WEBPACK_IMPORTED_MODULE_1__.resetPageNumber)();
                searchByCheckbox(finalArrayProduct, value, checked, searchInputs);
            };
        })

        const searchInputModel = document.querySelector('#filter-2 input[type="text"]');
        searchInputModel.oninput = function() {
            let val = this.value.trim().toLowerCase();
            searchInputByModel(finalArrayProduct, val);
        }
    }

    function searchByCheckbox(arrayProduct, value, checked, searchInputs) {

        if(arrayProduct === undefined) {
            arrayProduct = CATALOG
        }

        if (filteredSearch == arrayProduct) {
            filteredSearch = [];
        }
        
        getProp(arrayProduct, value, checked, searchInputs)

        function getProp(array) {
            for(let item in array) {
                if(typeof(array[item]) === 'object') {
                    if (item.includes('filters')) {
                        productItemForSearch = array;
                    }
                    getProp(array[item]);
                    if (item.includes('search')) {
                        let search = array[item];
                        for (let key in search) {
                            let searchKey = search[key];

                            if (key == 'value') {

                                if (searchKey == value && checked == true) {
                                    filteredSearch.push(productItemForSearch);
                                }

                                if (searchKey == value && checked == false) {
                                    var index = filteredSearch.indexOf(productItemForSearch);
                                    filteredSearch.splice(index, 1);

                                    if (filteredSearch == '') {
                                        filteredSearch = arrayProduct;
                                    }
                                }
                            }
                        }
                    }
                }  
            }
        }

        const endingFilteredSearch = filteredSearch.filter(function(item, pos) {
            return filteredSearch.indexOf(item) == pos;
        });

        (0,_showPage__WEBPACK_IMPORTED_MODULE_1__.showPage)(endingFilteredSearch);
        (0,_showPage__WEBPACK_IMPORTED_MODULE_1__.pagination)(endingFilteredSearch);

        handlerSortingBtn(endingFilteredSearch); // нужен тест
    }

    handlerSearch();

    function searchInputByModel (arrayProduct, val) {
        if(arrayProduct === undefined) {
            arrayProduct = CATALOG
        }

        if(val == '') {
            filteredSearch = [];
            (0,_showPage__WEBPACK_IMPORTED_MODULE_1__.showPage)(arrayProduct);
            (0,_showPage__WEBPACK_IMPORTED_MODULE_1__.pagination)(arrayProduct);
        }

        getProp(arrayProduct, val)

        function getProp(array) {
            for(let item in array) {
                if(typeof(array[item]) === 'object') {
                    if (item.includes('filters')) {
                        productItemForSearch = array;
                    }
                    getProp(array[item]);
                    if (item.includes('search')) {
                        let search = array[item];
                        for (let key in search) {
                            let searchKey = search[key].trim().toLowerCase().replace( /\s/g, "");

                            if (key == 'model') {
                                if (val.length > 1) {
                                    if (searchKey.indexOf(val) != -1) {
                                        filteredSearch.push(productItemForSearch);

                                        const endingFilteredSearch = filteredSearch.filter(function(item, pos) {
                                            return filteredSearch.indexOf(item) == pos;
                                        });
                                        (0,_showPage__WEBPACK_IMPORTED_MODULE_1__.resetPageNumber)();
                                        (0,_showPage__WEBPACK_IMPORTED_MODULE_1__.showPage)(endingFilteredSearch);
                                        (0,_showPage__WEBPACK_IMPORTED_MODULE_1__.pagination)(endingFilteredSearch);
                                    }
                                }
                            }
                        }
                    }
                }  
            }
        }
    }

    document.querySelector('.filter-btn__reset').addEventListener('click', function() {
        (0,_showPage__WEBPACK_IMPORTED_MODULE_1__.resetPageNumber)();
    });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (filterProduct);

/***/ }),

/***/ "./js/modules/filterProducts/filterHeadphones.js":
/*!*******************************************************!*\
  !*** ./js/modules/filterProducts/filterHeadphones.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _constants_root__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants/root */ "./js/constants/root.js");


class FilterHeadphones {
    render() {

        const html = `

            <div class="tabs-wrapper tabs-wrapper--no-scroll">
                <div class="tabs aside-filter__tabs">
                    <a class="tab aside-filter__tab tab--active" href="#filter-1"><span>Параметры</span></a>
                    <a class="tab aside-filter__tab" href="#filter-2"><span>по марке</span></a>
                </div>
            </div>

            <div class="tabs-container">
                <div id="filter-1" class="tabs-content aside-filter__tabs-content tabs-content--active">
                    <form class="aside-filter__form">
                        <ul class="aside-filter__list">
                            <li class="aside-filter__item-drop">
                                <p class="aside-filter__item-title filter__item-drop .filter__item-drop--active">Наличие</p>
                                <div class="aside-filter__content">
                                    <div class="aside-filter__content-box">
                                        <label class="aside-filter__content-label">
                                            <input class="filter-style" value="presence" type="checkbox">
                                            В наличие
                                        </label>
                                    </div>
                                    <div class="aside-filter__content-box">
                                        <label class="aside-filter__content-label">
                                            <input class="filter-style" value="order" type="checkbox">
                                            Под заказ
                                        </label>
                                    </div>
                                </div>
                            </li>
                            <li class="aside-filter__item-drop">
                                <p class="aside-filter__item-title filter__item-drop .filter__item-drop--active">Цена</p>
                                <div class="aside-filter__content">
                                    <input type="text" class="js-range-slider" name="my_range" value=""
                                    data-min="0"
                                    data-max="23000"
                                    data-from="3000"
                                    data-to="20000"
                                    />
                                    <div class="range-count range-min">
                                        5000
                                    </div>
                                    <div class="range-count range-max">
                                        50000
                                    </div>
                                </div>
                            </li>
                            <li class="aside-filter__item-list">
                                <div class="filter__item-list">
                                    <p class="filter__item-listtitle">Формат звуковой схемы</p>
                                    <select class="filter-style filter__item-listselect" name="selectMenuFirst">
                                        <option value="7.1">7.1</option>
                                        <option value="2.0">2.0</option>
                                        <option selected value="any">Любой</option>
                                    </select>
                                </div>
                                <div class="filter__item-list">
                                    <p class="filter__item-listtitle">Способ передачи сигналаи</p>
                                    <select class="filter-style filter__item-listselect" name="selectMenuSecond">
                                        <option value="wired">Проводной</option>
                                        <option value="Bluetooth">Bluetooth</option>
                                        <option value="IKPORT">ИК-канал</option>
                                        <option selected value="any">Любой</option>
                                    </select>
                                </div>
                                <div class="filter__item-list">
                                    <p class="filter__item-listtitle">Тип конструкции</p>
                                    <select class="filter-style filter__item-listselect" name="selectMenuThree">
                                        <option value="liners">Вкладыши</option>
                                        <option value="covering">Охватывающие </option>
                                        <option selected value="any">Любой</option>
                                    </select>
                                </div>
                            </li>
                            <li class="aside-filter__item-drop">
                                <p class="aside-filter__item-title filter__item-drop .filter__item-drop--active">Сопротивление (импеданс) (Ом)</p>
                                <div class="aside-filter__content">
                                    <div class="aside-filter__content-box">
                                        <label class="aside-filter__content-label">
                                            <input class="filter-style" value="16-30OM" type="checkbox">
                                            16 - 30
                                        </label>
                                    </div>
                                    <div class="aside-filter__content-box">
                                        <label class="aside-filter__content-label">
                                            <input class="filter-style" value="31-50OM" type="checkbox">
                                            31 - 50
                                        </label>
                                    </div>
                                    <div class="aside-filter__content-box">
                                        <label class="aside-filter__content-label">
                                            <input class="filter-style" value="51-100OM" type="checkbox">
                                            51 - 100
                                        </label>
                                    </div>
                                    <div class="aside-filter__content-box">
                                        <label class="aside-filter__content-label">
                                            <input class="filter-style" value="101OM" type="checkbox">
                                            101 и более
                                        </label>
                                    </div>
                                </div>
                            </li>
                            <li class="aside-filter__item-drop">
                                <p class="aside-filter__item-title filter__item-drop .filter__item-drop--active">Игровые наушники</p>
                                <div class="aside-filter__content">
                                    <div class="aside-filter__content-box">
                                        <label class="aside-filter__content-label">
                                            <input class="filter-style" value="gaming" type="checkbox">
                                            да
                                        </label>
                                    </div>
                                    <div class="aside-filter__content-box">
                                        <label class="aside-filter__content-label">
                                            <input class="filter-style" value="nogaming" type="checkbox">
                                            нет
                                        </label>
                                    </div>
                                </div>
                            </li>
                            <li class="aside-filter__item-drop">
                                <p class="aside-filter__item-title filter__item-drop .filter__item-drop--active">Встроенный микрофон</p>
                                <div class="aside-filter__content">
                                    <div class="aside-filter__content-box">
                                        <label class="aside-filter__content-label">
                                            <input class="filter-style" value="microphone" type="checkbox">
                                            да
                                        </label>
                                    </div>
                                    <div class="aside-filter__content-box">
                                        <label class="aside-filter__content-label">
                                            <input class="filter-style" value="nomicrophone" type="checkbox">
                                            нет
                                        </label>
                                    </div>
                                </div>
                            </li>
                            <li class="aside-filter__item-drop btn-checked">
                                <p class="aside-filter__item-title filter__item-drop .filter__item-drop--active">Акции</p>
                                <div class="aside-filter__content">
                                    <div class="aside-filter__content-box">
                                        <label class="aside-filter__content-label">
                                            <input class="filter-style" value="sale" type="checkbox">
                                            <span class="btn-checked__text">SALE</span>
                                        </label>
                                    </div>
                                    <div class="aside-filter__content-box">
                                        <label class="aside-filter__content-label">
                                            <input class="filter-style" value="new" type="checkbox">
                                            <span class="btn-checked__text">NEW</span>
                                        </label>
                                    </div>
                                    <div class="aside-filter__content-box">
                                        <label class="aside-filter__content-label">
                                            <input class="filter-style" value="hit" type="checkbox">
                                            <span class="btn-checked__text">HIT</span>
                                        </label>
                                    </div>
                                </div>
                            </li>
                            <li class="aside-filter__item-drop">
                                <p class="aside-filter__item-title filter__item-drop .filter__item-drop--active">Страна производитель</p>
                                <div class="aside-filter__content">
                                    <div class="aside-filter__content-box">
                                        <label class="aside-filter__content-label">
                                            <input class="filter-style" value="russia" type="checkbox"> 
                                            Россия
                                        </label>
                                    </div>
                                    <div class="aside-filter__content-box">
                                        <label class="aside-filter__content-label">
                                            <input class="filter-style" value="germany" type="checkbox">
                                            Германия
                                        </label>
                                    </div>
                                    <div class="aside-filter__content-box">
                                        <label class="aside-filter__content-label">
                                            <input class="filter-style" value="china" type="checkbox">
                                            Китай
                                        </label>
                                    </div>
                                    <div class="aside-filter__content-box">
                                        <label class="aside-filter__content-label">
                                            <input class="filter-style" value="usa" type="checkbox">
                                            CША
                                        </label>
                                    </div>
                                </div>
                            </li>
                            <li class="aside-filter__item-drop aside-filter__item-btn">
                                <button class="filter-btn__send filter-btn__send--active" type="button">ВЫБРАТЬ</button>
                                <p class="filter__extra">Дополнительные параметры</p>
                                <div class="filter__extra-content">
                                    <div class="aside-filter__form">
                                        <ul class="aside-filter__list">
                                            <li class="aside-filter__item-drop">
                                                <div class="aside-filter__content-box">
                                                    <label class="aside-filter__content-label">
                                                        <input class="filter-style" value="volumecontrol" type="checkbox">
                                                        Регулятор громкости
                                                    </label>
                                                </div>
                                                <div class="aside-filter__content-box">
                                                    <label class="aside-filter__content-label">
                                                        <input class="filter-style" value="backlight" type="checkbox">
                                                        Подсветка
                                                    </label>
                                                </div>
                                                <div class="aside-filter__content-box">
                                                    <label class="aside-filter__content-label">
                                                        <input class="filter-style" value="adapter" type="checkbox">
                                                        Переходник в комплекте
                                                    </label>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <button class="filter-btn__reset">Сбросить фильтр</button>
                            </li>
                        </ul>
                    </form>

                </div>
                <div id="filter-2" class="tabs-content aside-filter__tabs-content">
                    <form class="aside-filter__form">
                        <ul class="aside-filter__list">
                            <li class="aside-filter__item-drop">
                                <p class="aside-filter__item-title filter__item-drop .filter__item-drop--active">Модель</p>
                                <div class="aside-filter__content aside-filter__content-wide">
                                    <input class="filter-search" type="text" placeholder="Введите модель">
                                    <div class="aside-filter__content-box">
                                        <label class="aside-filter__content-label">
                                            <input class="filter-style" type="checkbox" value="A4Tech">
                                            A4Tech
                                        </label>
                                    </div>
                                    <div class="aside-filter__content-box">
                                        <label class="aside-filter__content-label">
                                            <input class="filter-style" type="checkbox" value="Aceline">
                                            Aceline
                                        </label>
                                    </div>
                                    <div class="aside-filter__content-box">
                                        <label class="aside-filter__content-label">
                                            <input class="filter-style" type="checkbox" value="HyperX">
                                            HyperX
                                        </label>
                                    </div>
                                    <div class="aside-filter__content-box">
                                        <label class="aside-filter__content-label">
                                            <input class="filter-style" type="checkbox" value="JBL">
                                            JBL
                                        </label>
                                    </div>
                                    <div class="aside-filter__content-box">
                                        <label class="aside-filter__content-label">
                                            <input class="filter-style" type="checkbox" value="Logitech">
                                            Logitech
                                        </label>
                                    </div>
                                    <div class="aside-filter__content-box">
                                        <label class="aside-filter__content-label">
                                            <input class="filter-style" type="checkbox" value="Plantronics">
                                            Plantronics
                                        </label>
                                    </div>
                                    <div class="aside-filter__content-box">
                                        <label class="aside-filter__content-label">
                                            <input class="filter-style" type="checkbox" value="Razer">
                                            Razer
                                        </label>
                                    </div>
                                    <div class="aside-filter__content-box">
                                        <label class="aside-filter__content-label">
                                            <input class="filter-style" type="checkbox" value="SteelSeries">
                                            SteelSeries
                                        </label>
                                    </div>
                                    <div class="aside-filter__content-box">
                                        <label class="aside-filter__content-label">
                                            <input class="filter-style" type="checkbox" value="ZET GAMING">
                                            ZET GAMING
                                        </label>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>


        `;

        _constants_root__WEBPACK_IMPORTED_MODULE_0__.ROOT_FILTER_ASIDE.innerHTML = html;

        $('.filter-style').styler();

        $('.filter__item-drop, .filter__extra').on('click', function() {
            $(this).toggleClass('filter__item-drop--active');
            $(this).next().slideToggle('200');
        });
    
        $(".js-range-slider").ionRangeSlider({
            type: 'double',
            step: 100
        });
    
        $('.range-min').html($('.irs-from').text());
        $('.range-max').html($('.irs-to').text());
    
        $(".js-range-slider").on('change', function() {
            $('.range-min').html($('.irs-from').text());
            $('.range-max').html($('.irs-to').text());
        });

        $('.tab').on('click', function(e) {
            e.preventDefault();
    
            $($(this).siblings()).removeClass('tab--active');
            $($(this).closest('.tabs-wrapper').siblings().find('div')).removeClass('tabs-content--active');
    
            $(this).addClass('tab--active');
            $($(this).attr('href')).addClass('tabs-content--active');
    
            $('.product-slider').slick('setPosition');
        });

    }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new FilterHeadphones());

/***/ }),

/***/ "./js/modules/filterProducts/filterKeyboards.js":
/*!******************************************************!*\
  !*** ./js/modules/filterProducts/filterKeyboards.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _constants_root__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants/root */ "./js/constants/root.js");


class FilterKeyboards {
    render() {

        const html = `

            <div class="tabs-wrapper tabs-wrapper--no-scroll">
                <div class="tabs aside-filter__tabs">
                    <a class="tab aside-filter__tab tab--active" href="#filter-1"><span>Параметры</span></a>
                    <a class="tab aside-filter__tab" href="#filter-2"><span>по марке</span></a>
                </div>
            </div>

            <div class="tabs-container">
                <div id="filter-1" class="tabs-content aside-filter__tabs-content tabs-content--active">
                    <form class="aside-filter__form">
                        <ul class="aside-filter__list">
                            <li class="aside-filter__item-drop">
                                <p class="aside-filter__item-title filter__item-drop .filter__item-drop--active">Наличие</p>
                                <div class="aside-filter__content">
                                    <div class="aside-filter__content-box">
                                        <label class="aside-filter__content-label">
                                            <input class="filter-style" value="presence" type="checkbox">
                                            В наличие
                                        </label>
                                    </div>
                                    <div class="aside-filter__content-box">
                                        <label class="aside-filter__content-label">
                                            <input class="filter-style" value="order" type="checkbox">
                                            Под заказ
                                        </label>
                                    </div>
                                </div>
                            </li>
                            <li class="aside-filter__item-drop">
                                <p class="aside-filter__item-title filter__item-drop .filter__item-drop--active">Цена</p>
                                <div class="aside-filter__content">
                                    <input type="text" class="js-range-slider" name="my_range" value=""
                                    data-min="0"
                                    data-max="21000"
                                    data-from="1000"
                                    data-to="20000"
                                    />
                                    <div class="range-count range-min">
                                        5000
                                    </div>
                                    <div class="range-count range-max">
                                        50000
                                    </div>
                                </div>
                            </li>
                            <li class="aside-filter__item-list">
                                <div class="filter__item-list">
                                    <p class="filter__item-listtitle">Тип клавиатуры</p>
                                    <select class="filter-style filter__item-listselect" name="selectMenuFirst">
                                        <option value="mechanical">Механическая</option>
                                        <option value="membrane">Мембранная</option>
                                        <option value="any">Любая</option>
                                    </select>
                                </div>
                                <div class="filter__item-list">
                                    <p class="filter__item-listtitle">Тип подключения</p>
                                    <select class="filter-style filter__item-listselect" name="selectMenuSecond">
                                        <option value="wired">Проводной</option>
                                        <option value="wireless">Беспроводной</option>
                                        <option value="any">Любой</option>
                                    </select>
                                </div>
                                <div class="filter__item-list">
                                    <p class="filter__item-listtitle">Подсветка клавиш</p>
                                    <select class="filter-style filter__item-listselect" name="selectMenuThree">
                                        <option value="rgb">RGB</option>
                                        <option value="multicolor">Многоцветная</option>
                                        <option value="any">Любая</option>
                                    </select>
                                </div>
                            </li>
                            <li class="aside-filter__item-drop">
                                <p class="aside-filter__item-title filter__item-drop .filter__item-drop--active">Игровая клавиатура</p>
                                <div class="aside-filter__content">
                                    <div class="aside-filter__content-box">
                                        <label class="aside-filter__content-label">
                                            <input class="filter-style" value="gaming" type="checkbox">
                                            да
                                        </label>
                                    </div>
                                    <div class="aside-filter__content-box">
                                        <label class="aside-filter__content-label">
                                            <input class="filter-style" value="nogaming" type="checkbox">
                                            нет
                                        </label>
                                    </div>
                                </div>
                            </li>
                            <li class="aside-filter__item-drop">
                                <p class="aside-filter__item-title filter__item-drop .filter__item-drop--active">Дополнительные клавиши</p>
                                <div class="aside-filter__content">
                                    <div class="aside-filter__content-box">
                                        <label class="aside-filter__content-label">
                                            <input class="filter-style" value="addkeys" type="checkbox">
                                            да
                                        </label>
                                    </div>
                                    <div class="aside-filter__content-box">
                                        <label class="aside-filter__content-label">
                                            <input class="filter-style" value="noaddkeys" type="checkbox">
                                            нет
                                        </label>
                                    </div>
                                </div>
                            </li>
                            <li class="aside-filter__item-drop btn-checked">
                                <p class="aside-filter__item-title filter__item-drop .filter__item-drop--active">Акции</p>
                                <div class="aside-filter__content">
                                    <div class="aside-filter__content-box">
                                        <label class="aside-filter__content-label">
                                            <input class="filter-style" value="sale" type="checkbox">
                                            <span class="btn-checked__text">SALE</span>
                                        </label>
                                    </div>
                                    <div class="aside-filter__content-box">
                                        <label class="aside-filter__content-label">
                                            <input class="filter-style" value="new" type="checkbox">
                                            <span class="btn-checked__text">NEW</span>
                                        </label>
                                    </div>
                                    <div class="aside-filter__content-box">
                                        <label class="aside-filter__content-label">
                                            <input class="filter-style" value="hit" type="checkbox">
                                            <span class="btn-checked__text">HIT</span>
                                        </label>
                                    </div>
                                </div>
                            </li>
                            <li class="aside-filter__item-drop">
                                <p class="aside-filter__item-title filter__item-drop .filter__item-drop--active">Страна производитель</p>
                                <div class="aside-filter__content">
                                    <div class="aside-filter__content-box">
                                        <label class="aside-filter__content-label">
                                            <input class="filter-style" value="russia" type="checkbox"> 
                                            Россия
                                        </label>
                                    </div>
                                    <div class="aside-filter__content-box">
                                        <label class="aside-filter__content-label">
                                            <input class="filter-style" value="germany" type="checkbox">
                                            Германия
                                        </label>
                                    </div>
                                    <div class="aside-filter__content-box">
                                        <label class="aside-filter__content-label">
                                            <input class="filter-style" value="china" type="checkbox">
                                            Китай
                                        </label>
                                    </div>
                                    <div class="aside-filter__content-box">
                                        <label class="aside-filter__content-label">
                                            <input class="filter-style" value="usa" type="checkbox">
                                            CША
                                        </label>
                                    </div>
                                </div>
                            </li>
                            <li class="aside-filter__item-drop aside-filter__item-btn">
                                <button class="filter-btn__send filter-btn__send--active" type="button">ВЫБРАТЬ</button>
                                <p class="filter__extra">Дополнительные параметры</p>
                                <div class="filter__extra-content">
                                    <div class="aside-filter__form">
                                        <ul class="aside-filter__list">
                                            <li class="aside-filter__item-drop">
                                                <div class="aside-filter__content-box">
                                                    <label class="aside-filter__content-label">
                                                        <input class="filter-style" value="volumecontrol" type="checkbox">
                                                        Регулятор громкости
                                                    </label>
                                                </div>
                                                <div class="aside-filter__content-box">
                                                    <label class="aside-filter__content-label">
                                                        <input class="filter-style" value="stand" type="checkbox">
                                                        Подставка для рук
                                                    </label>
                                                </div>
                                                <div class="aside-filter__content-box">
                                                    <label class="aside-filter__content-label">
                                                        <input class="filter-style" value="defwater" type="checkbox">
                                                        Защита от попадания воды
                                                    </label>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <button class="filter-btn__reset">Сбросить фильтр</button>
                            </li>
                        </ul>
                    </form>

                </div>
                <div id="filter-2" class="tabs-content aside-filter__tabs-content">
                    <form class="aside-filter__form">
                        <ul class="aside-filter__list">
                            <li class="aside-filter__item-drop">
                                <p class="aside-filter__item-title filter__item-drop .filter__item-drop--active">Модель</p>
                                <div class="aside-filter__content aside-filter__content-wide">
                                    <input class="filter-search" type="text" placeholder="Введите модель">
                                    <div class="aside-filter__content-box">
                                        <label class="aside-filter__content-label">
                                            <input class="filter-style" type="checkbox" value="A4Tech">
                                            A4Tech
                                        </label>
                                    </div>
                                    <div class="aside-filter__content-box">
                                        <label class="aside-filter__content-label">
                                            <input class="filter-style" type="checkbox" value="Asus">
                                            Asus
                                        </label>
                                    </div>
                                    <div class="aside-filter__content-box">
                                        <label class="aside-filter__content-label">
                                            <input class="filter-style" type="checkbox" value="Corsair">
                                            Corsair
                                        </label>
                                    </div>
                                    <div class="aside-filter__content-box">
                                        <label class="aside-filter__content-label">
                                            <input class="filter-style" type="checkbox" value="Cougar">
                                            Cougar
                                        </label>
                                    </div>
                                    <div class="aside-filter__content-box">
                                        <label class="aside-filter__content-label">
                                            <input class="filter-style" type="checkbox" value="Defender">
                                            Defender
                                        </label>
                                    </div>
                                    <div class="aside-filter__content-box">
                                        <label class="aside-filter__content-label">
                                            <input class="filter-style" type="checkbox" value="Dexp">
                                            Dexp
                                        </label>
                                    </div>
                                    <div class="aside-filter__content-box">
                                        <label class="aside-filter__content-label">
                                            <input class="filter-style" type="checkbox" value="HyperX">
                                            HyperX
                                        </label>
                                    </div>
                                    <div class="aside-filter__content-box">
                                        <label class="aside-filter__content-label">
                                            <input class="filter-style" type="checkbox" value="Razer">
                                            Razer
                                        </label>
                                    </div>
                                    <div class="aside-filter__content-box">
                                        <label class="aside-filter__content-label">
                                            <input class="filter-style" type="checkbox" value="SteelSeries">
                                            SteelSeries
                                        </label>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>


        `;

        _constants_root__WEBPACK_IMPORTED_MODULE_0__.ROOT_FILTER_ASIDE.innerHTML = html;

        $('.filter-style').styler();

        $('.filter__item-drop, .filter__extra').on('click', function() {
            $(this).toggleClass('filter__item-drop--active');
            $(this).next().slideToggle('200');
        });
    
        $(".js-range-slider").ionRangeSlider({
            type: 'double',
            step: 100
        });
    
        $('.range-min').html($('.irs-from').text());
        $('.range-max').html($('.irs-to').text());
    
        $(".js-range-slider").on('change', function() {
            $('.range-min').html($('.irs-from').text());
            $('.range-max').html($('.irs-to').text());
        });

        $('.tab').on('click', function(e) {
            e.preventDefault();
    
            $($(this).siblings()).removeClass('tab--active');
            $($(this).closest('.tabs-wrapper').siblings().find('div')).removeClass('tabs-content--active');
    
            $(this).addClass('tab--active');
            $($(this).attr('href')).addClass('tabs-content--active');
    
            $('.product-slider').slick('setPosition');
        });

    }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new FilterKeyboards());

/***/ }),

/***/ "./js/modules/filterProducts/filterLaptops.js":
/*!****************************************************!*\
  !*** ./js/modules/filterProducts/filterLaptops.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _constants_root__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants/root */ "./js/constants/root.js");


class FilterLaptops {
    render() {

        const html = `

            <div class="tabs-wrapper tabs-wrapper--no-scroll">
                <div class="tabs aside-filter__tabs">
                    <a class="tab aside-filter__tab tab--active" href="#filter-1"><span>Параметры</span></a>
                    <a class="tab aside-filter__tab" href="#filter-2"><span>по марке</span></a>
                </div>
            </div>

            <div class="tabs-container">
                <div id="filter-1" class="tabs-content aside-filter__tabs-content tabs-content--active">
                    <form class="aside-filter__form">
                        <ul class="aside-filter__list">
                            <li class="aside-filter__item-drop">
                                <p class="aside-filter__item-title filter__item-drop .filter__item-drop--active">Наличие</p>
                                <div class="aside-filter__content">
                                    <div class="aside-filter__content-box">
                                        <label class="aside-filter__content-label">
                                            <input class="filter-style" value="presence" type="checkbox">
                                            В наличие
                                        </label>
                                    </div>
                                    <div class="aside-filter__content-box">
                                        <label class="aside-filter__content-label">
                                            <input class="filter-style" value="order" type="checkbox">
                                            Под заказ
                                        </label>
                                    </div>
                                </div>
                            </li>
                            <li class="aside-filter__item-drop">
                                <p class="aside-filter__item-title filter__item-drop .filter__item-drop--active">Цена</p>
                                <div class="aside-filter__content">
                                    <input type="text" class="js-range-slider" name="my_range" value=""
                                    data-min="0"
                                    data-max="150000"
                                    data-from="20000"
                                    data-to="130000"
                                    />
                                    <div class="range-count range-min">
                                        20000
                                    </div>
                                    <div class="range-count range-max">
                                        130000
                                    </div>
                                </div>
                            </li>
                            <li class="aside-filter__item-list">
                                <div class="filter__item-list">
                                    <p class="filter__item-listtitle">Процессор</p>
                                    <select class="filter-style filter__item-listselect" name="selectMenuFirst">
                                        <option value="INTEL">Intel</option>
                                        <option value="AMD">AMD</option>
                                        <option selected value="any">Любой</option>
                                    </select>
                                </div>
                                <div class="filter__item-list">
                                    <p class="filter__item-listtitle">Видеокарта</p>
                                    <select class="filter-style filter__item-listselect" name="selectMenuSecond">
                                        <option value="NVIDIA">Nvidia</option>
                                        <option value="AMD">AMD</option>
                                        <option selected value="any">Любая</option>
                                    </select>
                                </div>
                                <div class="filter__item-list">
                                    <p class="filter__item-listtitle">Накопитель</p>
                                    <select class="filter-style filter__item-listselect" name="selectMenuThree">
                                        <option value="SSD">SSD</option>
                                        <option value="HDD">HDD</option>
                                        <option selected value="any">Любой</option>
                                    </select>
                                </div>
                            </li>
                            <li class="aside-filter__item-drop">
                                <p class="aside-filter__item-title filter__item-drop .filter__item-drop--active">Объем оперативной памяти</p>
                                <div class="aside-filter__content">
                                    <div class="aside-filter__content-box">
                                        <label class="aside-filter__content-label">
                                            <input class="filter-style" value="4GB" type="checkbox">
                                            4 ГБ
                                        </label>
                                    </div>
                                    <div class="aside-filter__content-box">
                                        <label class="aside-filter__content-label">
                                            <input class="filter-style" value="8GB" type="checkbox">
                                            8 ГБ
                                        </label>
                                    </div>
                                    <div class="aside-filter__content-box">
                                        <label class="aside-filter__content-label">
                                            <input class="filter-style" value="16GB" type="checkbox">
                                            16 ГБ
                                        </label>
                                    </div>
                                    <div class="aside-filter__content-box">
                                        <label class="aside-filter__content-label">
                                            <input class="filter-style" value="32GB" type="checkbox">
                                            32 ГБ
                                        </label>
                                    </div>
                                </div>
                            </li>
                            <li class="aside-filter__item-drop">
                                <p class="aside-filter__item-title filter__item-drop .filter__item-drop--active">Игровой ноутбук</p>
                                <div class="aside-filter__content">
                                    <div class="aside-filter__content-box">
                                        <label class="aside-filter__content-label">
                                            <input class="filter-style" value="gaming" type="checkbox">
                                            да
                                        </label>
                                    </div>
                                    <div class="aside-filter__content-box">
                                        <label class="aside-filter__content-label">
                                            <input class="filter-style" value="nogaming" type="checkbox">
                                            нет
                                        </label>
                                    </div>
                                </div>
                            </li>
                            <li class="aside-filter__item-drop">
                                <p class="aside-filter__item-title filter__item-drop .filter__item-drop--active">Оптический привод</p>
                                <div class="aside-filter__content">
                                    <div class="aside-filter__content-box">
                                        <label class="aside-filter__content-label">
                                            <input class="filter-style" value="opticaldrive" type="checkbox">
                                            да
                                        </label>
                                    </div>
                                    <div class="aside-filter__content-box">
                                        <label class="aside-filter__content-label">
                                            <input class="filter-style" value="noopticaldrive" type="checkbox">
                                            нет
                                        </label>
                                    </div>
                                </div>
                            </li>
                            <li class="aside-filter__item-drop btn-checked">
                                <p class="aside-filter__item-title filter__item-drop .filter__item-drop--active">Акции</p>
                                <div class="aside-filter__content">
                                    <div class="aside-filter__content-box">
                                        <label class="aside-filter__content-label">
                                            <input class="filter-style" value="sale" type="checkbox">
                                            <span class="btn-checked__text">SALE</span>
                                        </label>
                                    </div>
                                    <div class="aside-filter__content-box">
                                        <label class="aside-filter__content-label">
                                            <input class="filter-style" value="new" type="checkbox">
                                            <span class="btn-checked__text">NEW</span>
                                        </label>
                                    </div>
                                    <div class="aside-filter__content-box">
                                        <label class="aside-filter__content-label">
                                            <input class="filter-style" value="hit" type="checkbox">
                                            <span class="btn-checked__text">HIT</span>
                                        </label>
                                    </div>
                                </div>
                            </li>
                            <li class="aside-filter__item-drop">
                                <p class="aside-filter__item-title filter__item-drop .filter__item-drop--active">Страна производитель</p>
                                <div class="aside-filter__content">
                                    <div class="aside-filter__content-box">
                                        <label class="aside-filter__content-label">
                                            <input class="filter-style" value="russia" type="checkbox"> 
                                            Россия
                                        </label>
                                    </div>
                                    <div class="aside-filter__content-box">
                                        <label class="aside-filter__content-label">
                                            <input class="filter-style" value="germany" type="checkbox">
                                            Германия
                                        </label>
                                    </div>
                                    <div class="aside-filter__content-box">
                                        <label class="aside-filter__content-label">
                                            <input class="filter-style" value="china" type="checkbox">
                                            Китай
                                        </label>
                                    </div>
                                    <div class="aside-filter__content-box">
                                        <label class="aside-filter__content-label">
                                            <input class="filter-style" value="usa" type="checkbox">
                                            CША
                                        </label>
                                    </div>
                                </div>
                            </li>
                            <li class="aside-filter__item-drop aside-filter__item-btn">
                                <button class="filter-btn__send filter-btn__send--active" type="button">ВЫБРАТЬ</button>
                                <p class="filter__extra">Дополнительные параметры</p>
                                <div class="filter__extra-content">
                                    <div class="aside-filter__form">
                                        <ul class="aside-filter__list">
                                            <li class="aside-filter__item-drop">
                                                <div class="aside-filter__content-box">
                                                    <label class="aside-filter__content-label">
                                                        <input class="filter-style" value="headphoneoutput" type="checkbox">
                                                        Выход на наушники
                                                    </label>
                                                </div>
                                                <div class="aside-filter__content-box">
                                                    <label class="aside-filter__content-label">
                                                        <input class="filter-style" value="backlight" type="checkbox">
                                                        Подсветка
                                                    </label>
                                                </div>
                                                <div class="aside-filter__content-box">
                                                    <label class="aside-filter__content-label">
                                                        <input class="filter-style" value="connectorm2" type="checkbox">
                                                        Разъем M.2
                                                    </label>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <button class="filter-btn__reset">Сбросить фильтр</button>
                            </li>
                        </ul>
                    </form>

                </div>
                <div id="filter-2" class="tabs-content aside-filter__tabs-content">
                    <form class="aside-filter__form">
                        <ul class="aside-filter__list">
                            <li class="aside-filter__item-drop">
                                <p class="aside-filter__item-title filter__item-drop .filter__item-drop--active">Модель</p>
                                <div class="aside-filter__content aside-filter__content-wide">
                                    <input class="filter-search" type="text" placeholder="Введите модель">
                                    <div class="aside-filter__content-box">
                                        <label class="aside-filter__content-label">
                                            <input class="filter-style" type="checkbox" value="Acer">
                                            Acer
                                        </label>
                                    </div>
                                    <div class="aside-filter__content-box">
                                        <label class="aside-filter__content-label">
                                            <input class="filter-style" type="checkbox" value="Asus">
                                            Asus
                                        </label>
                                    </div>
                                    <div class="aside-filter__content-box">
                                        <label class="aside-filter__content-label">
                                            <input class="filter-style" type="checkbox" value="Dell">
                                            Dell
                                        </label>
                                    </div>
                                    <div class="aside-filter__content-box">
                                        <label class="aside-filter__content-label">
                                            <input class="filter-style" type="checkbox" value="Gigabyte">
                                            Gigabyte
                                        </label>
                                    </div>
                                    <div class="aside-filter__content-box">
                                        <label class="aside-filter__content-label">
                                            <input class="filter-style" type="checkbox" value="Honor">
                                            Honor
                                        </label>
                                    </div>
                                    <div class="aside-filter__content-box">
                                        <label class="aside-filter__content-label">
                                            <input class="filter-style" type="checkbox" value="HP">
                                            HP
                                        </label>
                                    </div>
                                    <div class="aside-filter__content-box">
                                        <label class="aside-filter__content-label">
                                            <input class="filter-style" type="checkbox" value="Huawei">
                                            Huawei
                                        </label>
                                    </div>
                                    <div class="aside-filter__content-box">
                                        <label class="aside-filter__content-label">
                                            <input class="filter-style" type="checkbox" value="Lenovo">
                                            Lenovo
                                        </label>
                                    </div>
                                    <div class="aside-filter__content-box">
                                        <label class="aside-filter__content-label">
                                            <input class="filter-style" type="checkbox" value="MSI">
                                            MSI
                                        </label>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>


        `;

        _constants_root__WEBPACK_IMPORTED_MODULE_0__.ROOT_FILTER_ASIDE.innerHTML = html;

        $('.filter-style').styler();

        $('.filter__item-drop, .filter__extra').on('click', function() {
            $(this).toggleClass('filter__item-drop--active');
            $(this).next().slideToggle('200');
        });
    
        $(".js-range-slider").ionRangeSlider({
            type: 'double',
            step: 100
        });
    
        $('.range-min').html($('.irs-from').text());
        $('.range-max').html($('.irs-to').text());
    
        $(".js-range-slider").on('change', function() {
            $('.range-min').html($('.irs-from').text());
            $('.range-max').html($('.irs-to').text());
        });

        $('.tab').on('click', function(e) {
            e.preventDefault();
    
            $($(this).siblings()).removeClass('tab--active');
            $($(this).closest('.tabs-wrapper').siblings().find('div')).removeClass('tabs-content--active');
    
            $(this).addClass('tab--active');
            $($(this).attr('href')).addClass('tabs-content--active');
    
            $('.product-slider').slick('setPosition');
        });

    }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new FilterLaptops());

/***/ }),

/***/ "./js/modules/filterProducts/filterMonitors.js":
/*!*****************************************************!*\
  !*** ./js/modules/filterProducts/filterMonitors.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _constants_root__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants/root */ "./js/constants/root.js");


class FilterMonitors {
    render() {

        const html = `

            <div class="tabs-wrapper tabs-wrapper--no-scroll">
                <div class="tabs aside-filter__tabs">
                    <a class="tab aside-filter__tab tab--active" href="#filter-1"><span>Параметры</span></a>
                    <a class="tab aside-filter__tab" href="#filter-2"><span>по марке</span></a>
                </div>
            </div>

            <div class="tabs-container">
                <div id="filter-1" class="tabs-content aside-filter__tabs-content tabs-content--active">
                    <form class="aside-filter__form">
                        <ul class="aside-filter__list">
                            <li class="aside-filter__item-drop">
                                <p class="aside-filter__item-title filter__item-drop .filter__item-drop--active">Наличие</p>
                                <div class="aside-filter__content">
                                    <div class="aside-filter__content-box">
                                        <label class="aside-filter__content-label">
                                            <input class="filter-style" value="presence" type="checkbox">
                                            В наличие
                                        </label>
                                    </div>
                                    <div class="aside-filter__content-box">
                                        <label class="aside-filter__content-label">
                                            <input class="filter-style" value="order" type="checkbox">
                                            Под заказ
                                        </label>
                                    </div>
                                </div>
                            </li>
                            <li class="aside-filter__item-drop">
                                <p class="aside-filter__item-title filter__item-drop .filter__item-drop--active">Цена</p>
                                <div class="aside-filter__content">
                                    <input type="text" class="js-range-slider" name="my_range" value=""
                                    data-min="0"
                                    data-max="60000"
                                    data-from="5000"
                                    data-to="50000"
                                    />
                                    <div class="range-count range-min">
                                        5000
                                    </div>
                                    <div class="range-count range-max">
                                        50000
                                    </div>
                                </div>
                            </li>
                            <li class="aside-filter__item-list">
                                <div class="filter__item-list">
                                    <p class="filter__item-listtitle">Частота обновления</p>
                                    <select class="filter-style filter__item-listselect" name="selectMenuFirst">
                                        <option value="60">60 Гц</option>
                                        <option value="120">120 Гц</option>
                                        <option value="144">144 Гц</option>
                                        <option value="240">240 Гц</option>
                                        <option value="360">360 Гц</option>
                                        <option selected value="any">Любая</option>
                                    </select>
                                </div>
                                <div class="filter__item-list">
                                    <p class="filter__item-listtitle">Время отклика</p>
                                    <select class="filter-style filter__item-listselect" name="selectMenuSecond">
                                        <option value="1">1 мс</option>
                                        <option value="2">2 мс</option>
                                        <option value="3">3 мс</option>
                                        <option value="4">4 мс</option>
                                        <option value="5">5 мс</option>
                                        <option selected value="any">Любое</option>
                                    </select>
                                </div>
                                <div class="filter__item-list">
                                    <p class="filter__item-listtitle">Тип матрицы монитора</p>
                                    <select class="filter-style filter__item-listselect" name="selectMenuThree">
                                        <option value="IPS">IPS</option>
                                        <option value="PLS">PLS</option>
                                        <option value="TN">TN</option>
                                        <option value="VA">VA</option>
                                        <option selected value="any">Любой</option>
                                    </select>
                                </div>
                            </li>
                            <li class="aside-filter__item-drop">
                                <p class="aside-filter__item-title filter__item-drop .filter__item-drop--active">Видеоразъемы</p>
                                <div class="aside-filter__content">
                                    <div class="aside-filter__content-box">
                                        <label class="aside-filter__content-label">
                                            <input class="filter-style" value="DisplayPort" type="checkbox">
                                            DisplayPort
                                        </label>
                                    </div>
                                    <div class="aside-filter__content-box">
                                        <label class="aside-filter__content-label">
                                            <input class="filter-style" value="HDMI" type="checkbox">
                                            HDMI
                                        </label>
                                    </div>
                                    <div class="aside-filter__content-box">
                                        <label class="aside-filter__content-label">
                                            <input class="filter-style" value="DVI-D" type="checkbox">
                                            DVI-D
                                        </label>
                                    </div>
                                    <div class="aside-filter__content-box">
                                        <label class="aside-filter__content-label">
                                            <input class="filter-style" value="VGA" type="checkbox">
                                            VGA
                                        </label>
                                    </div>
                                </div>
                            </li>
                            <li class="aside-filter__item-drop">
                                <p class="aside-filter__item-title filter__item-drop .filter__item-drop--active">Игровой монитор</p>
                                <div class="aside-filter__content">
                                    <div class="aside-filter__content-box">
                                        <label class="aside-filter__content-label">
                                            <input class="filter-style" value="gaming" type="checkbox">
                                            да
                                        </label>
                                    </div>
                                    <div class="aside-filter__content-box">
                                        <label class="aside-filter__content-label">
                                            <input class="filter-style" value="nogaming" type="checkbox">
                                            нет
                                        </label>
                                    </div>
                                </div>
                            </li>
                            <li class="aside-filter__item-drop">
                                <p class="aside-filter__item-title filter__item-drop .filter__item-drop--active">Изогнутый экран</p>
                                <div class="aside-filter__content">
                                    <div class="aside-filter__content-box">
                                        <label class="aside-filter__content-label">
                                            <input class="filter-style" value="curved" type="checkbox">
                                            да
                                        </label>
                                    </div>
                                    <div class="aside-filter__content-box">
                                        <label class="aside-filter__content-label">
                                            <input class="filter-style" value="nocurved" type="checkbox">
                                            нет
                                        </label>
                                    </div>
                                </div>
                            </li>
                            <li class="aside-filter__item-drop btn-checked">
                                <p class="aside-filter__item-title filter__item-drop .filter__item-drop--active">Акции</p>
                                <div class="aside-filter__content">
                                    <div class="aside-filter__content-box">
                                        <label class="aside-filter__content-label">
                                            <input class="filter-style" value="sale" type="checkbox">
                                            <span class="btn-checked__text">SALE</span>
                                        </label>
                                    </div>
                                    <div class="aside-filter__content-box">
                                        <label class="aside-filter__content-label">
                                            <input class="filter-style" value="new" type="checkbox">
                                            <span class="btn-checked__text">NEW</span>
                                        </label>
                                    </div>
                                    <div class="aside-filter__content-box">
                                        <label class="aside-filter__content-label">
                                            <input class="filter-style" value="hit" type="checkbox">
                                            <span class="btn-checked__text">HIT</span>
                                        </label>
                                    </div>
                                </div>
                            </li>
                            <li class="aside-filter__item-drop">
                                <p class="aside-filter__item-title filter__item-drop .filter__item-drop--active">Страны</p>
                                <div class="aside-filter__content">
                                    <div class="aside-filter__content-box">
                                        <label class="aside-filter__content-label">
                                            <input class="filter-style" value="russia" type="checkbox"> 
                                            Россия
                                        </label>
                                    </div>
                                    <div class="aside-filter__content-box">
                                        <label class="aside-filter__content-label">
                                            <input class="filter-style" value="germany" type="checkbox">
                                            Германия
                                        </label>
                                    </div>
                                    <div class="aside-filter__content-box">
                                        <label class="aside-filter__content-label">
                                            <input class="filter-style" value="china" type="checkbox">
                                            Китай
                                        </label>
                                    </div>
                                    <div class="aside-filter__content-box">
                                        <label class="aside-filter__content-label">
                                            <input class="filter-style" value="usa" type="checkbox">
                                            CША
                                        </label>
                                    </div>
                                </div>
                            </li>
                            <li class="aside-filter__item-drop aside-filter__item-btn">
                                <button class="filter-btn__send filter-btn__send--active" type="button">ВЫБРАТЬ</button>
                                <p class="filter__extra">Дополнительные параметры</p>
                                <div class="filter__extra-content">
                                    <div class="aside-filter__form">
                                        <ul class="aside-filter__list">
                                            <li class="aside-filter__item-drop">
                                                <div class="aside-filter__content-box">
                                                    <label class="aside-filter__content-label">
                                                        <input class="filter-style" value="headphoneoutput" type="checkbox">
                                                        Выход на наушники
                                                    </label>
                                                </div>
                                                <div class="aside-filter__content-box">
                                                    <label class="aside-filter__content-label">
                                                        <input class="filter-style" value="speakers" type="checkbox">
                                                        Встроенные динамики
                                                    </label>
                                                </div>
                                                <div class="aside-filter__content-box">
                                                    <label class="aside-filter__content-label">
                                                        <input class="filter-style" value="webcam" type="checkbox">
                                                        Встроенная web-камера
                                                    </label>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <button class="filter-btn__reset">Сбросить фильтр</button>
                            </li>
                        </ul>
                    </form>

                </div>
                <div id="filter-2" class="tabs-content aside-filter__tabs-content">
                    <form class="aside-filter__form">
                        <ul class="aside-filter__list">
                            <li class="aside-filter__item-drop">
                                <p class="aside-filter__item-title filter__item-drop .filter__item-drop--active">Модель</p>
                                <div class="aside-filter__content aside-filter__content-wide">
                                    <input class="filter-search" type="text" placeholder="Введите модель">
                                    <div class="aside-filter__content-box">
                                        <label class="aside-filter__content-label">
                                            <input class="filter-style" type="checkbox" value="Acer">
                                            Acer
                                        </label>
                                    </div>
                                    <div class="aside-filter__content-box">
                                        <label class="aside-filter__content-label">
                                            <input class="filter-style" type="checkbox" value="AOC">
                                            AOC
                                        </label>
                                    </div>
                                    <div class="aside-filter__content-box">
                                        <label class="aside-filter__content-label">
                                            <input class="filter-style" type="checkbox" value="Asus">
                                            ASUS
                                        </label>
                                    </div>
                                    <div class="aside-filter__content-box">
                                        <label class="aside-filter__content-label">
                                            <input class="filter-style" type="checkbox" value="BenQ">
                                            BenQ
                                        </label>
                                    </div>
                                    <div class="aside-filter__content-box">
                                        <label class="aside-filter__content-label">
                                            <input class="filter-style" type="checkbox" value="Lenovo">
                                            Lenovo
                                        </label>
                                    </div>
                                    <div class="aside-filter__content-box">
                                        <label class="aside-filter__content-label">
                                            <input class="filter-style" type="checkbox" value="LG">
                                            LG
                                        </label>
                                    </div>
                                    <div class="aside-filter__content-box">
                                        <label class="aside-filter__content-label">
                                            <input class="filter-style" type="checkbox" value="Philips">
                                            Philips
                                        </label>
                                    </div>
                                    <div class="aside-filter__content-box">
                                        <label class="aside-filter__content-label">
                                            <input class="filter-style" type="checkbox" value="Samsung">
                                            Samsung
                                        </label>
                                    </div>
                                    <div class="aside-filter__content-box">
                                        <label class="aside-filter__content-label">
                                            <input class="filter-style" type="checkbox" value="Xiaomi">
                                            Xiaomi
                                        </label>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>

        `;

        _constants_root__WEBPACK_IMPORTED_MODULE_0__.ROOT_FILTER_ASIDE.innerHTML = html;

        $('.filter-style').styler();

        $('.filter__item-drop, .filter__extra').on('click', function() {
            $(this).toggleClass('filter__item-drop--active');
            $(this).next().slideToggle('200');
        });
    
        $(".js-range-slider").ionRangeSlider({
            type: 'double',
            step: 100
        });
    
        $('.range-min').html($('.irs-from').text());
        $('.range-max').html($('.irs-to').text());
    
        $(".js-range-slider").on('change', function() {
            $('.range-min').html($('.irs-from').text());
            $('.range-max').html($('.irs-to').text());
        });

        $('.tab').on('click', function(e) {
            e.preventDefault();
    
            $($(this).siblings()).removeClass('tab--active');
            $($(this).closest('.tabs-wrapper').siblings().find('div')).removeClass('tabs-content--active');
    
            $(this).addClass('tab--active');
            $($(this).attr('href')).addClass('tabs-content--active');
    
            $('.product-slider').slick('setPosition');
        });

    }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new FilterMonitors());

/***/ }),

/***/ "./js/modules/filterProducts/filterMouses.js":
/*!***************************************************!*\
  !*** ./js/modules/filterProducts/filterMouses.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _constants_root__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants/root */ "./js/constants/root.js");


class FilterMouses {
    render() {

        const html = `

            <div class="tabs-wrapper tabs-wrapper--no-scroll">
                <div class="tabs aside-filter__tabs">
                    <a class="tab aside-filter__tab tab--active" href="#filter-1"><span>Параметры</span></a>
                    <a class="tab aside-filter__tab" href="#filter-2"><span>по марке</span></a>
                </div>
            </div>

            <div class="tabs-container">
                <div id="filter-1" class="tabs-content aside-filter__tabs-content tabs-content--active">
                    <form class="aside-filter__form">
                        <ul class="aside-filter__list">
                            <li class="aside-filter__item-drop">
                                <p class="aside-filter__item-title filter__item-drop .filter__item-drop--active">Наличие</p>
                                <div class="aside-filter__content">
                                    <div class="aside-filter__content-box">
                                        <label class="aside-filter__content-label">
                                            <input class="filter-style" value="presence" type="checkbox">
                                            В наличие
                                        </label>
                                    </div>
                                    <div class="aside-filter__content-box">
                                        <label class="aside-filter__content-label">
                                            <input class="filter-style" value="order" type="checkbox">
                                            Под заказ
                                        </label>
                                    </div>
                                </div>
                            </li>
                            <li class="aside-filter__item-drop">
                                <p class="aside-filter__item-title filter__item-drop .filter__item-drop--active">Цена</p>
                                <div class="aside-filter__content">
                                    <input type="text" class="js-range-slider" name="my_range" value=""
                                    data-min="0"
                                    data-max="21000"
                                    data-from="1000"
                                    data-to="20000"
                                    />
                                    <div class="range-count range-min">
                                        5000
                                    </div>
                                    <div class="range-count range-max">
                                        50000
                                    </div>
                                </div>
                            </li>
                            <li class="aside-filter__item-list">
                                <div class="filter__item-list">
                                    <p class="filter__item-listtitle">Тип сенсора мыши</p>
                                    <select class="filter-style filter__item-listselect" name="selectMenuFirst">
                                        <option value="laser">Лазерный</option>
                                        <option value="optic">Оптический</option>
                                        <option value="any">Любая</option>
                                    </select>
                                </div>
                                <div class="filter__item-list">
                                    <p class="filter__item-listtitle">Тип подключения</p>
                                    <select class="filter-style filter__item-listselect" name="selectMenuSecond">
                                        <option value="wired">Проводной</option>
                                        <option value="wireless">Беспроводной</option>
                                        <option value="any">Любой</option>
                                    </select>
                                </div>
                                <div class="filter__item-list">
                                    <p class="filter__item-listtitle">Подсветка клавиш</p>
                                    <select class="filter-style filter__item-listselect" name="selectMenuThree">
                                        <option value="rgb">RGB</option>
                                        <option value="multicolor">Многоцветная</option>
                                    </select>
                                </div>
                            </li>
                            <li class="aside-filter__item-drop">
                                <p class="aside-filter__item-title filter__item-drop .filter__item-drop--active">Игровая мышь</p>
                                <div class="aside-filter__content">
                                    <div class="aside-filter__content-box">
                                        <label class="aside-filter__content-label">
                                            <input class="filter-style" value="gaming" type="checkbox">
                                            да
                                        </label>
                                    </div>
                                    <div class="aside-filter__content-box">
                                        <label class="aside-filter__content-label">
                                            <input class="filter-style" value="nogaming" type="checkbox">
                                            нет
                                        </label>
                                    </div>
                                </div>
                            </li>
                            <li class="aside-filter__item-drop">
                                <p class="aside-filter__item-title filter__item-drop .filter__item-drop--active">Дополнительные клавиши</p>
                                <div class="aside-filter__content">
                                    <div class="aside-filter__content-box">
                                        <label class="aside-filter__content-label">
                                            <input class="filter-style" value="addkeys" type="checkbox">
                                            да
                                        </label>
                                    </div>
                                    <div class="aside-filter__content-box">
                                        <label class="aside-filter__content-label">
                                            <input class="filter-style" value="noaddkeys" type="checkbox">
                                            нет
                                        </label>
                                    </div>
                                </div>
                            </li>
                            <li class="aside-filter__item-drop btn-checked">
                                <p class="aside-filter__item-title filter__item-drop .filter__item-drop--active">Акции</p>
                                <div class="aside-filter__content">
                                    <div class="aside-filter__content-box">
                                        <label class="aside-filter__content-label">
                                            <input class="filter-style" value="sale" type="checkbox">
                                            <span class="btn-checked__text">SALE</span>
                                        </label>
                                    </div>
                                    <div class="aside-filter__content-box">
                                        <label class="aside-filter__content-label">
                                            <input class="filter-style" value="new" type="checkbox">
                                            <span class="btn-checked__text">NEW</span>
                                        </label>
                                    </div>
                                    <div class="aside-filter__content-box">
                                        <label class="aside-filter__content-label">
                                            <input class="filter-style" value="hit" type="checkbox">
                                            <span class="btn-checked__text">HIT</span>
                                        </label>
                                    </div>
                                </div>
                            </li>
                            <li class="aside-filter__item-drop">
                                <p class="aside-filter__item-title filter__item-drop .filter__item-drop--active">Страна производитель</p>
                                <div class="aside-filter__content">
                                    <div class="aside-filter__content-box">
                                        <label class="aside-filter__content-label">
                                            <input class="filter-style" value="russia" type="checkbox"> 
                                            Россия
                                        </label>
                                    </div>
                                    <div class="aside-filter__content-box">
                                        <label class="aside-filter__content-label">
                                            <input class="filter-style" value="germany" type="checkbox">
                                            Германия
                                        </label>
                                    </div>
                                    <div class="aside-filter__content-box">
                                        <label class="aside-filter__content-label">
                                            <input class="filter-style" value="china" type="checkbox">
                                            Китай
                                        </label>
                                    </div>
                                    <div class="aside-filter__content-box">
                                        <label class="aside-filter__content-label">
                                            <input class="filter-style" value="usa" type="checkbox">
                                            CША
                                        </label>
                                    </div>
                                </div>
                            </li>
                            <li class="aside-filter__item-drop aside-filter__item-btn">
                                <button class="filter-btn__send filter-btn__send--active" type="button">ВЫБРАТЬ</button>
                                <p class="filter__extra">Дополнительные параметры</p>
                                <div class="filter__extra-content">
                                    <div class="aside-filter__form">
                                        <ul class="aside-filter__list">
                                            <li class="aside-filter__item-drop">
                                                <div class="aside-filter__content-box">
                                                    <label class="aside-filter__content-label">
                                                        <input class="filter-style" value="braid" type="checkbox">
                                                        Тканевая оплётка кабеля
                                                    </label>
                                                </div>
                                                <div class="aside-filter__content-box">
                                                    <label class="aside-filter__content-label">
                                                        <input class="filter-style" value="defwater" type="checkbox">
                                                        Защита от попадания воды
                                                    </label>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <button class="filter-btn__reset">Сбросить фильтр</button>
                            </li>
                        </ul>
                    </form>

                </div>
                <div id="filter-2" class="tabs-content aside-filter__tabs-content">
                    <form class="aside-filter__form">
                        <ul class="aside-filter__list">
                            <li class="aside-filter__item-drop">
                                <p class="aside-filter__item-title filter__item-drop .filter__item-drop--active">Модель</p>
                                <div class="aside-filter__content aside-filter__content-wide">
                                    <input class="filter-search" type="text" placeholder="Введите модель">
                                    <div class="aside-filter__content-box">
                                        <label class="aside-filter__content-label">
                                            <input class="filter-style" type="checkbox" value="A4Tech">
                                            A4Tech
                                        </label>
                                    </div>
                                    <div class="aside-filter__content-box">
                                        <label class="aside-filter__content-label">
                                            <input class="filter-style" type="checkbox" value="Asus">
                                            Asus
                                        </label>
                                    </div>
                                    <div class="aside-filter__content-box">
                                        <label class="aside-filter__content-label">
                                            <input class="filter-style" type="checkbox" value="Defender">
                                            Defender
                                        </label>
                                    </div>
                                    <div class="aside-filter__content-box">
                                        <label class="aside-filter__content-label">
                                            <input class="filter-style" type="checkbox" value="Dexp">
                                            Dexp
                                        </label>
                                    </div>
                                    <div class="aside-filter__content-box">
                                        <label class="aside-filter__content-label">
                                            <input class="filter-style" type="checkbox" value="GIGABYTE">
                                            GIGABYTE
                                        </label>
                                    </div>
                                    <div class="aside-filter__content-box">
                                        <label class="aside-filter__content-label">
                                            <input class="filter-style" type="checkbox" value="HyperX">
                                            HyperX
                                        </label>
                                    </div>
                                    <div class="aside-filter__content-box">
                                        <label class="aside-filter__content-label">
                                            <input class="filter-style" type="checkbox" value="Logitech">
                                            Logitech
                                        </label>
                                    </div>
                                    <div class="aside-filter__content-box">
                                        <label class="aside-filter__content-label">
                                            <input class="filter-style" type="checkbox" value="Razer">
                                            Razer
                                        </label>
                                    </div>
                                    <div class="aside-filter__content-box">
                                        <label class="aside-filter__content-label">
                                            <input class="filter-style" type="checkbox" value="SteelSeries">
                                            SteelSeries
                                        </label>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>

        `;

        _constants_root__WEBPACK_IMPORTED_MODULE_0__.ROOT_FILTER_ASIDE.innerHTML = html;

        $('.filter-style').styler();

        $('.filter__item-drop, .filter__extra').on('click', function() {
            $(this).toggleClass('filter__item-drop--active');
            $(this).next().slideToggle('200');
        });
    
        $(".js-range-slider").ionRangeSlider({
            type: 'double',
            step: 100
        });
    
        $('.range-min').html($('.irs-from').text());
        $('.range-max').html($('.irs-to').text());
    
        $(".js-range-slider").on('change', function() {
            $('.range-min').html($('.irs-from').text());
            $('.range-max').html($('.irs-to').text());
        });

        $('.tab').on('click', function(e) {
            e.preventDefault();
    
            $($(this).siblings()).removeClass('tab--active');
            $($(this).closest('.tabs-wrapper').siblings().find('div')).removeClass('tabs-content--active');
    
            $(this).addClass('tab--active');
            $($(this).attr('href')).addClass('tabs-content--active');
    
            $('.product-slider').slick('setPosition');
        });

    }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new FilterMouses());

/***/ }),

/***/ "./js/modules/filterProducts/filterСomputers.js":
/*!******************************************************!*\
  !*** ./js/modules/filterProducts/filterСomputers.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _constants_root__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants/root */ "./js/constants/root.js");


class FilterСomputers {
    render() {

        const html = `

            <div class="tabs-wrapper tabs-wrapper--no-scroll">
                <div class="tabs aside-filter__tabs">
                    <a class="tab aside-filter__tab tab--active" href="#filter-1"><span>Параметры</span></a>
                    <a class="tab aside-filter__tab" href="#filter-2"><span>по марке</span></a>
                </div>
            </div>

            <div class="tabs-container">
                <div id="filter-1" class="tabs-content aside-filter__tabs-content tabs-content--active">
                    <form class="aside-filter__form">
                        <ul class="aside-filter__list">
                            <li class="aside-filter__item-drop">
                                <p class="aside-filter__item-title filter__item-drop .filter__item-drop--active">Наличие</p>
                                <div class="aside-filter__content">
                                    <div class="aside-filter__content-box">
                                        <label class="aside-filter__content-label">
                                            <input class="filter-style" value="presence" type="checkbox">
                                            В наличие
                                        </label>
                                    </div>
                                    <div class="aside-filter__content-box">
                                        <label class="aside-filter__content-label">
                                            <input class="filter-style" value="order" type="checkbox">
                                            Под заказ
                                        </label>
                                    </div>
                                </div>
                            </li>
                            <li class="aside-filter__item-drop">
                                <p class="aside-filter__item-title filter__item-drop .filter__item-drop--active">Цена</p>
                                <div class="aside-filter__content">
                                    <input type="text" class="js-range-slider" name="my_range" value=""
                                    data-min="0"
                                    data-max="150000"
                                    data-from="20000"
                                    data-to="130000"
                                    />
                                    <div class="range-count range-min">
                                        20000
                                    </div>
                                    <div class="range-count range-max">
                                        130000
                                    </div>
                                </div>
                            </li>
                            <li class="aside-filter__item-list">
                                <div class="filter__item-list">
                                    <p class="filter__item-listtitle">Процессор</p>
                                    <select class="filter-style filter__item-listselect" name="selectMenuFirst">
                                        <option value="INTEL">Intel</option>
                                        <option value="AMD">AMD</option>
                                        <option selected value="any">Любой</option>
                                    </select>
                                </div>
                                <div class="filter__item-list">
                                    <p class="filter__item-listtitle">Видеокарта</p>
                                    <select class="filter-style filter__item-listselect" name="selectMenuSecond">
                                        <option value="NVIDIA">Nvidia</option>
                                        <option value="AMD">AMD</option>
                                        <option selected value="any">Любая</option>
                                    </select>
                                </div>
                                <div class="filter__item-list">
                                    <p class="filter__item-listtitle">Накопитель</p>
                                    <select class="filter-style filter__item-listselect" name="selectMenuThree">
                                        <option value="SSD">SSD</option>
                                        <option value="HDD">HDD</option>
                                        <option selected value="any">Любой</option>
                                    </select>
                                </div>
                            </li>
                            <li class="aside-filter__item-drop">
                                <p class="aside-filter__item-title filter__item-drop .filter__item-drop--active">Объем оперативной памяти</p>
                                <div class="aside-filter__content">
                                    <div class="aside-filter__content-box">
                                        <label class="aside-filter__content-label">
                                            <input class="filter-style" value="4GB" type="checkbox">
                                            4 ГБ
                                        </label>
                                    </div>
                                    <div class="aside-filter__content-box">
                                        <label class="aside-filter__content-label">
                                            <input class="filter-style" value="8GB" type="checkbox">
                                            8 ГБ
                                        </label>
                                    </div>
                                    <div class="aside-filter__content-box">
                                        <label class="aside-filter__content-label">
                                            <input class="filter-style" value="16GB" type="checkbox">
                                            16 ГБ
                                        </label>
                                    </div>
                                    <div class="aside-filter__content-box">
                                        <label class="aside-filter__content-label">
                                            <input class="filter-style" value="32GB" type="checkbox">
                                            32 ГБ
                                        </label>
                                    </div>
                                </div>
                            </li>
                            <li class="aside-filter__item-drop">
                                <p class="aside-filter__item-title filter__item-drop .filter__item-drop--active">Игровой компьютер</p>
                                <div class="aside-filter__content">
                                    <div class="aside-filter__content-box">
                                        <label class="aside-filter__content-label">
                                            <input class="filter-style" value="gaming" type="checkbox">
                                            да
                                        </label>
                                    </div>
                                    <div class="aside-filter__content-box">
                                        <label class="aside-filter__content-label">
                                            <input class="filter-style" value="nogaming" type="checkbox">
                                            нет
                                        </label>
                                    </div>
                                </div>
                            </li>
                            <li class="aside-filter__item-drop">
                                <p class="aside-filter__item-title filter__item-drop .filter__item-drop--active">Оптический привод</p>
                                <div class="aside-filter__content">
                                    <div class="aside-filter__content-box">
                                        <label class="aside-filter__content-label">
                                            <input class="filter-style" value="opticaldrive" type="checkbox">
                                            да
                                        </label>
                                    </div>
                                    <div class="aside-filter__content-box">
                                        <label class="aside-filter__content-label">
                                            <input class="filter-style" value="noopticaldrive" type="checkbox">
                                            нет
                                        </label>
                                    </div>
                                </div>
                            </li>
                            <li class="aside-filter__item-drop btn-checked">
                                <p class="aside-filter__item-title filter__item-drop .filter__item-drop--active">Акции</p>
                                <div class="aside-filter__content">
                                    <div class="aside-filter__content-box">
                                        <label class="aside-filter__content-label">
                                            <input class="filter-style" value="sale" type="checkbox">
                                            <span class="btn-checked__text">SALE</span>
                                        </label>
                                    </div>
                                    <div class="aside-filter__content-box">
                                        <label class="aside-filter__content-label">
                                            <input class="filter-style" value="new" type="checkbox">
                                            <span class="btn-checked__text">NEW</span>
                                        </label>
                                    </div>
                                    <div class="aside-filter__content-box">
                                        <label class="aside-filter__content-label">
                                            <input class="filter-style" value="hit" type="checkbox">
                                            <span class="btn-checked__text">HIT</span>
                                        </label>
                                    </div>
                                </div>
                            </li>
                            <li class="aside-filter__item-drop">
                                <p class="aside-filter__item-title filter__item-drop .filter__item-drop--active">Страна производитель</p>
                                <div class="aside-filter__content">
                                    <div class="aside-filter__content-box">
                                        <label class="aside-filter__content-label">
                                            <input class="filter-style" value="russia" type="checkbox"> 
                                            Россия
                                        </label>
                                    </div>
                                    <div class="aside-filter__content-box">
                                        <label class="aside-filter__content-label">
                                            <input class="filter-style" value="germany" type="checkbox">
                                            Германия
                                        </label>
                                    </div>
                                    <div class="aside-filter__content-box">
                                        <label class="aside-filter__content-label">
                                            <input class="filter-style" value="china" type="checkbox">
                                            Китай
                                        </label>
                                    </div>
                                    <div class="aside-filter__content-box">
                                        <label class="aside-filter__content-label">
                                            <input class="filter-style" value="usa" type="checkbox">
                                            CША
                                        </label>
                                    </div>
                                </div>
                            </li>
                            <li class="aside-filter__item-drop aside-filter__item-btn">
                                <button class="filter-btn__send filter-btn__send--active" type="button">ВЫБРАТЬ</button>
                                <p class="filter__extra">Дополнительные параметры</p>
                                <div class="filter__extra-content">
                                    <div class="aside-filter__form">
                                        <ul class="aside-filter__list">
                                            <li class="aside-filter__item-drop">
                                                <div class="aside-filter__content-box">
                                                    <label class="aside-filter__content-label">
                                                        <input class="filter-style" value="headphoneoutput" type="checkbox">
                                                        Выход на наушники
                                                    </label>
                                                </div>
                                                <div class="aside-filter__content-box">
                                                    <label class="aside-filter__content-label">
                                                        <input class="filter-style" value="backlight" type="checkbox">
                                                        Подсветка
                                                    </label>
                                                </div>
                                                <div class="aside-filter__content-box">
                                                    <label class="aside-filter__content-label">
                                                        <input class="filter-style" value="transparentwall" type="checkbox">
                                                        Прозрачная боковая стенка
                                                    </label>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <button class="filter-btn__reset">Сбросить фильтр</button>
                            </li>
                        </ul>
                    </form>

                </div>
                <div id="filter-2" class="tabs-content aside-filter__tabs-content">
                    <form class="aside-filter__form">
                        <ul class="aside-filter__list">
                            <li class="aside-filter__item-drop">
                                <p class="aside-filter__item-title filter__item-drop .filter__item-drop--active">Модель</p>
                                <div class="aside-filter__content aside-filter__content-wide">
                                    <input class="filter-search" type="text" placeholder="Введите модель">
                                    <div class="aside-filter__content-box">
                                        <label class="aside-filter__content-label">
                                            <input class="filter-style" type="checkbox" value="Acer">
                                            Acer
                                        </label>
                                    </div>
                                    <div class="aside-filter__content-box">
                                        <label class="aside-filter__content-label">
                                            <input class="filter-style" type="checkbox" value="Alienware">
                                            Alienware
                                        </label>
                                    </div>
                                    <div class="aside-filter__content-box">
                                        <label class="aside-filter__content-label">
                                            <input class="filter-style" type="checkbox" value="ASUS">
                                            ASUS
                                        </label>
                                    </div>
                                    <div class="aside-filter__content-box">
                                        <label class="aside-filter__content-label">
                                            <input class="filter-style" type="checkbox" value="Dexp">
                                            Dexp
                                        </label>
                                    </div>
                                    <div class="aside-filter__content-box">
                                        <label class="aside-filter__content-label">
                                            <input class="filter-style" type="checkbox" value="HP">
                                            HP
                                        </label>
                                    </div>
                                    <div class="aside-filter__content-box">
                                        <label class="aside-filter__content-label">
                                            <input class="filter-style" type="checkbox" value="HyperPC">
                                            HyperPC
                                        </label>
                                    </div>
                                    <div class="aside-filter__content-box">
                                        <label class="aside-filter__content-label">
                                            <input class="filter-style" type="checkbox" value="Lenovo">
                                            Lenovo
                                        </label>
                                    </div>
                                    <div class="aside-filter__content-box">
                                        <label class="aside-filter__content-label">
                                            <input class="filter-style" type="checkbox" value="MSI">
                                            MSI
                                        </label>
                                    </div>
                                    <div class="aside-filter__content-box">
                                        <label class="aside-filter__content-label">
                                            <input class="filter-style" type="checkbox" value="ZET GAMING">
                                            ZET GAMING
                                        </label>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>


        `;

        _constants_root__WEBPACK_IMPORTED_MODULE_0__.ROOT_FILTER_ASIDE.innerHTML = html;

        $('.filter-style').styler();

        $('.filter__item-drop, .filter__extra').on('click', function() {
            $(this).toggleClass('filter__item-drop--active');
            $(this).next().slideToggle('200');
        });
    
        $(".js-range-slider").ionRangeSlider({
            type: 'double',
            step: 100
        });
    
        $('.range-min').html($('.irs-from').text());
        $('.range-max').html($('.irs-to').text());
    
        $(".js-range-slider").on('change', function() {
            $('.range-min').html($('.irs-from').text());
            $('.range-max').html($('.irs-to').text());
        });

        $('.tab').on('click', function(e) {
            e.preventDefault();
    
            $($(this).siblings()).removeClass('tab--active');
            $($(this).closest('.tabs-wrapper').siblings().find('div')).removeClass('tabs-content--active');
    
            $(this).addClass('tab--active');
            $($(this).attr('href')).addClass('tabs-content--active');
    
            $('.product-slider').slick('setPosition');
        });

    }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new FilterСomputers());

/***/ }),

/***/ "./js/modules/main.js":
/*!****************************!*\
  !*** ./js/modules/main.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
function main() {

    $('.banner-section__slider').slick({
        dots: true,
        infinite: false,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: '<button class="banner-section__slider-btn banner-section__slider-btnprev"><img src="images/icons/arrow-left.svg" alt=""></button>',
        nextArrow: '<button class="banner-section__slider-btn banner-section__slider-btnnext"><img src="images/icons/arrow-right.svg" alt=""></button>',
        responsive: [
            {
                breakpoint: 969,
                settings: {
                    arrows: false
                }
            }
        ]
    });

    $('.tab').on('click', function(e) {
        e.preventDefault();

        $($(this).siblings()).removeClass('tab--active');
        $($(this).closest('.tabs-wrapper').siblings().find('div')).removeClass('tabs-content--active');

        $(this).addClass('tab--active');
        $($(this).attr('href')).addClass('tabs-content--active');

        $('.product-slider').slick('setPosition');
    });

    $('.product-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<button class="product-slider__slider-btn product-slider__slider-btnprev"><img src="images/icons/arrow-left.svg" alt=""></button>',
        nextArrow: '<button class="product-slider__slider-btn product-slider__slider-btnnext"><img src="images/icons/arrow-right.svg" alt=""></button>',
        responsive: [
            {
                breakpoint: 1301,
                settings: {
                    arrows: false,
                    dots: true
                }
            },
            {
                breakpoint: 1201,
                settings: {
                    slidesToShow: 3,
                    arrows: false,
                    dots: true
                }
            },
            {
                breakpoint: 870,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                    dots: true
                }
            },
            {
                breakpoint: 590,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    dots: true
                }
            }
        ]
    });

    $('.filter-style').styler();

    $('.filter__item-drop, .filter__extra').on('click', function() {
        $(this).toggleClass('filter__item-drop--active');
        $(this).next().slideToggle('200');
    });

    $(".js-range-slider").ionRangeSlider({
        type: 'double',
        step: 100
    });

    $('.range-min').html($('.irs-from').text());
    $('.range-max').html($('.irs-to').text());

    $(".js-range-slider").on('change', function() {
        $('.range-min').html($('.irs-from').text());
        $('.range-max').html($('.irs-to').text());
    });

    $('.catalog__filter-btngrid').on('click', function() {
        $(this).addClass('catalog__filter-button--active');
        $('.catalog__filter-btnline').removeClass('catalog__filter-button--active');
        $('.product-item__wrapper').removeClass('product-item__wrapper--list');
    });

    $('.catalog__filter-btnline').on('click', function() {
        $(this).addClass('catalog__filter-button--active');
        $('.catalog__filter-btngrid').removeClass('catalog__filter-button--active');
        $('.product-item__wrapper').addClass('product-item__wrapper--list');
    });

    $(".rate-yo").rateYo({
        ratedFill: "#daa520",
        normalFill: "#fff",
        spacing: "10px"
    });

    $('.menu__btn').on('click', function() {
        $('.menu-mobile__list').toggleClass('menu-mobile__list--active');
    });

    $('.footer__topdrop').on('click', function() {
        $(this).next().slideToggle();
        $(this).toggleClass('footer__topdrop--active');
    });

    $('.aside__btn').on('click', function() {
        $(this).next().slideToggle();
    });

};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (main);





/***/ }),

/***/ "./js/modules/notification.js":
/*!************************************!*\
  !*** ./js/modules/notification.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _constants_root__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/root */ "./js/constants/root.js");


class Notification {
    handlerClearNotificationBox() {
        const notificationBox = document.getElementById('notification').innerHTML = '';
    }

    render(message) {
        
        const div = document.createElement('div');
        div.classList.add('notification__content');
        _constants_root__WEBPACK_IMPORTED_MODULE_0__.ROOT_NOTIFICATION.append(div);
        
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new Notification());

/***/ }),

/***/ "./js/modules/pageShoppingBasket.js":
/*!******************************************!*\
  !*** ./js/modules/pageShoppingBasket.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _constants_root__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/root */ "./js/constants/root.js");
/* harmony import */ var _utils_localStorageBasket__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/localStorageBasket */ "./js/utils/localStorageBasket.js");
/* harmony import */ var _utils_localStorageProduct__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/localStorageProduct */ "./js/utils/localStorageProduct.js");
/* harmony import */ var _counterBasket__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./counterBasket */ "./js/modules/counterBasket.js");
/* harmony import */ var _notification__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./notification */ "./js/modules/notification.js");
/* harmony import */ var _showPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./showPage */ "./js/modules/showPage.js");







class PageShoppingBasket {
    handlerRemoveProductOfBasket(CATALOG) {
        document.querySelectorAll('.popup__basket-item--delete').forEach(element => {
            element.addEventListener('click', () => {
                _notification__WEBPACK_IMPORTED_MODULE_4__.default.handlerClearNotificationBox();
                _utils_localStorageBasket__WEBPACK_IMPORTED_MODULE_1__.default.putProducts(element.id, CATALOG);
                (0,_showPage__WEBPACK_IMPORTED_MODULE_5__.showPage)(CATALOG);
                _counterBasket__WEBPACK_IMPORTED_MODULE_3__.default.render();
                _notification__WEBPACK_IMPORTED_MODULE_4__.default.render('Товар удален из корзины');
                _utils_localStorageProduct__WEBPACK_IMPORTED_MODULE_2__.default.putProduct();
            });
        });
    }

    handlerClearProductsOfBasket(CATALOG) {
        const productsBasketStore = _utils_localStorageBasket__WEBPACK_IMPORTED_MODULE_1__.default.getProducts();
        const clearBtn = document.querySelector('.clear__basket');

        if (clearBtn !== null) {
            clearBtn.addEventListener('click', () => {
                _notification__WEBPACK_IMPORTED_MODULE_4__.default.handlerClearNotificationBox();
                localStorage.removeItem("basketProducts");
                localStorage.removeItem("basketProductsData");
                (0,_showPage__WEBPACK_IMPORTED_MODULE_5__.showPage)(CATALOG);
                _counterBasket__WEBPACK_IMPORTED_MODULE_3__.default.render();
                _notification__WEBPACK_IMPORTED_MODULE_4__.default.render('Корзина товаров очищена');
                _utils_localStorageProduct__WEBPACK_IMPORTED_MODULE_2__.default.putProduct();
            });
        }
    }
    
    render(CATALOG) {
        const productsBasketStore = _utils_localStorageBasket__WEBPACK_IMPORTED_MODULE_1__.default.getProducts();
        const productsBasketStoreData = _utils_localStorageBasket__WEBPACK_IMPORTED_MODULE_1__.default.getProductsData();
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

        _constants_root__WEBPACK_IMPORTED_MODULE_0__.ROOT_PAGE_SHOPPING_BASKET.innerHTML = html;
    }
}   

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new PageShoppingBasket());

/***/ }),

/***/ "./js/modules/pageShoppingFavorite.js":
/*!********************************************!*\
  !*** ./js/modules/pageShoppingFavorite.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _constants_root__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/root */ "./js/constants/root.js");
/* harmony import */ var _utils_localStorageBasket__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/localStorageBasket */ "./js/utils/localStorageBasket.js");
/* harmony import */ var _utils_localStorageFavorite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/localStorageFavorite */ "./js/utils/localStorageFavorite.js");
/* harmony import */ var _utils_localStorageProduct__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/localStorageProduct */ "./js/utils/localStorageProduct.js");
/* harmony import */ var _productPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./productPage */ "./js/modules/productPage.js");
/* harmony import */ var _counterBasket__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./counterBasket */ "./js/modules/counterBasket.js");
/* harmony import */ var _counterFavorite__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./counterFavorite */ "./js/modules/counterFavorite.js");
/* harmony import */ var _notification__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./notification */ "./js/modules/notification.js");
/* harmony import */ var _showPage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./showPage */ "./js/modules/showPage.js");










class PageShoppingFavorite {
    handlerRemoveProductOfFavorite(CATALOG) {
        document.querySelectorAll('.popup__favorite-item--delete').forEach(element => {
            element.addEventListener('click', () => {
                _notification__WEBPACK_IMPORTED_MODULE_7__.default.handlerClearNotificationBox();
                _utils_localStorageFavorite__WEBPACK_IMPORTED_MODULE_2__.default.putProducts(element.id, CATALOG);
                (0,_showPage__WEBPACK_IMPORTED_MODULE_8__.showPage)(CATALOG);
                _counterFavorite__WEBPACK_IMPORTED_MODULE_6__.default.render();
                _notification__WEBPACK_IMPORTED_MODULE_7__.default.render('Товар удален из избранного');
                _productPage__WEBPACK_IMPORTED_MODULE_4__.default.render(CATALOG);
                _productPage__WEBPACK_IMPORTED_MODULE_4__.default.handlerSetLocalStorageFavorite(CATALOG);
                _utils_localStorageProduct__WEBPACK_IMPORTED_MODULE_3__.default.putProduct();
            });
        });
    }

    handlerClearProductsOfFavorite(CATALOG) {
        const clearBtn = document.querySelector('.clear__favorite');

        if (clearBtn !== null) {
            clearBtn.addEventListener('click', () => {
                _notification__WEBPACK_IMPORTED_MODULE_7__.default.handlerClearNotificationBox();
                localStorage.removeItem("favoriteProducts");
                localStorage.removeItem("favoriteProductsData");
                (0,_showPage__WEBPACK_IMPORTED_MODULE_8__.showPage)(CATALOG);
                _counterFavorite__WEBPACK_IMPORTED_MODULE_6__.default.render();
                _notification__WEBPACK_IMPORTED_MODULE_7__.default.render('Список избранных товаров очищен');
                _productPage__WEBPACK_IMPORTED_MODULE_4__.default.render(CATALOG);
                _productPage__WEBPACK_IMPORTED_MODULE_4__.default.handlerSetLocalStorageFavorite(CATALOG);
                _utils_localStorageProduct__WEBPACK_IMPORTED_MODULE_3__.default.putProduct();
            });
        }
    }

    handlerAddProductsOfBasket(CATALOG) {
        document.querySelectorAll('.popup__favorite-item--addbasket').forEach(element => {
            element.addEventListener('click', () => {
                _notification__WEBPACK_IMPORTED_MODULE_7__.default.handlerClearNotificationBox();
                _utils_localStorageBasket__WEBPACK_IMPORTED_MODULE_1__.default.putProducts(element.id, CATALOG);
                _utils_localStorageBasket__WEBPACK_IMPORTED_MODULE_1__.default.putProductsData(element.id);
                (0,_showPage__WEBPACK_IMPORTED_MODULE_8__.showPage)(CATALOG);
                _counterBasket__WEBPACK_IMPORTED_MODULE_5__.default.render();
                const productsBasketStore = _utils_localStorageBasket__WEBPACK_IMPORTED_MODULE_1__.default.getProducts();
                productsBasketStore.indexOf(element.id) === -1 ? _notification__WEBPACK_IMPORTED_MODULE_7__.default.render('Товар удален из корзины') : _notification__WEBPACK_IMPORTED_MODULE_7__.default.render('Товар добавлен в корзину');
                _utils_localStorageProduct__WEBPACK_IMPORTED_MODULE_3__.default.putProduct();
            });
        });
    }
    
    render(CATALOG) {
        const productsBasketStore = _utils_localStorageBasket__WEBPACK_IMPORTED_MODULE_1__.default.getProducts();
        const productsFavoriteStore = _utils_localStorageFavorite__WEBPACK_IMPORTED_MODULE_2__.default.getProducts();
        const productsFavoriteStoreData = _utils_localStorageFavorite__WEBPACK_IMPORTED_MODULE_2__.default.getProductsData();
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

        _constants_root__WEBPACK_IMPORTED_MODULE_0__.ROOT_PAGE_SHOPPING_FAVORITE.innerHTML = html;
    }
}   

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new PageShoppingFavorite());

/***/ }),

/***/ "./js/modules/popup.js":
/*!*****************************!*\
  !*** ./js/modules/popup.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (popup);

/***/ }),

/***/ "./js/modules/productPage.js":
/*!***********************************!*\
  !*** ./js/modules/productPage.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _constants_root__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/root */ "./js/constants/root.js");
/* harmony import */ var _utils_localStorageProduct__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/localStorageProduct */ "./js/utils/localStorageProduct.js");
/* harmony import */ var _utils_localStorageFavorite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/localStorageFavorite */ "./js/utils/localStorageFavorite.js");
/* harmony import */ var _counterFavorite__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./counterFavorite */ "./js/modules/counterFavorite.js");
/* harmony import */ var _pageShoppingFavorite__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pageShoppingFavorite */ "./js/modules/pageShoppingFavorite.js");
/* harmony import */ var _notification__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./notification */ "./js/modules/notification.js");
/* harmony import */ var _designation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./designation */ "./js/modules/designation.js");
/* harmony import */ var _library_appearanceAnimation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../library/appearanceAnimation */ "./js/library/appearanceAnimation.js");









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
                _notification__WEBPACK_IMPORTED_MODULE_5__.default.handlerClearNotificationBox();

                const { pushProduct, products } = _utils_localStorageFavorite__WEBPACK_IMPORTED_MODULE_2__.default.putProducts(element.id, CATALOG);
    
                if (pushProduct) {
                    element.classList.add(this.classNameFavoriteActive);
                    _notification__WEBPACK_IMPORTED_MODULE_5__.default.render('Товар добавлен в избранное');
                    element.classList.add('product-card__icon-favoriteactive');
                } else {
                    element.classList.remove(this.classNameFavoriteActive);
                    _notification__WEBPACK_IMPORTED_MODULE_5__.default.render('Товар удален из избранного');
                    element.classList.remove('product-card__icon-favoriteactive');
                }

                _counterFavorite__WEBPACK_IMPORTED_MODULE_3__.default.render();
                
                _pageShoppingFavorite__WEBPACK_IMPORTED_MODULE_4__.default.render(CATALOG);
                _pageShoppingFavorite__WEBPACK_IMPORTED_MODULE_4__.default.handlerRemoveProductOfFavorite(CATALOG);
                _pageShoppingFavorite__WEBPACK_IMPORTED_MODULE_4__.default.handlerClearProductsOfFavorite(CATALOG);
                _pageShoppingFavorite__WEBPACK_IMPORTED_MODULE_4__.default.handlerAddProductsOfBasket(CATALOG);
            });
        });

        _pageShoppingFavorite__WEBPACK_IMPORTED_MODULE_4__.default.render(CATALOG);
        _pageShoppingFavorite__WEBPACK_IMPORTED_MODULE_4__.default.handlerRemoveProductOfFavorite(CATALOG);
        _pageShoppingFavorite__WEBPACK_IMPORTED_MODULE_4__.default.handlerClearProductsOfFavorite(CATALOG);
        _pageShoppingFavorite__WEBPACK_IMPORTED_MODULE_4__.default.handlerAddProductsOfBasket(CATALOG);
    }

    render(CATALOG) {
        const productStore = _utils_localStorageProduct__WEBPACK_IMPORTED_MODULE_1__.default.getProduct();
        const productsFavoriteStore = _utils_localStorageFavorite__WEBPACK_IMPORTED_MODULE_2__.default.getProducts();
        
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

                _designation__WEBPACK_IMPORTED_MODULE_6__.default.renderBreadcrumbs(shortname)

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

        if (_constants_root__WEBPACK_IMPORTED_MODULE_0__.ROOT_PAGE_PRODUCT === null) {
            return false;
        } else {
            _constants_root__WEBPACK_IMPORTED_MODULE_0__.ROOT_PAGE_PRODUCT.innerHTML = htmlProduct;
            _constants_root__WEBPACK_IMPORTED_MODULE_0__.ROOT_PAGE_CARD_TABS.innerHTML = htmlInfoProduct;
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
                    (0,_library_appearanceAnimation__WEBPACK_IMPORTED_MODULE_7__.handlerSmoothScroll)(document.querySelector('.tabs-wrapper'), -450)
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new ProductPage());

/***/ }),

/***/ "./js/modules/products.js":
/*!********************************!*\
  !*** ./js/modules/products.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _constants_root__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/root */ "./js/constants/root.js");
/* harmony import */ var _utils_localStorageBasket__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/localStorageBasket */ "./js/utils/localStorageBasket.js");
/* harmony import */ var _utils_localStorageFavorite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/localStorageFavorite */ "./js/utils/localStorageFavorite.js");
/* harmony import */ var _counterBasket__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./counterBasket */ "./js/modules/counterBasket.js");
/* harmony import */ var _counterFavorite__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./counterFavorite */ "./js/modules/counterFavorite.js");
/* harmony import */ var _pageShoppingBasket__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pageShoppingBasket */ "./js/modules/pageShoppingBasket.js");
/* harmony import */ var _pageShoppingFavorite__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pageShoppingFavorite */ "./js/modules/pageShoppingFavorite.js");
/* harmony import */ var _notification__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./notification */ "./js/modules/notification.js");









class Products {
    constructor() {
        this.classNameBasketActive = 'product-item__basket--active';
        this.classNameFavoriteActive = 'product-item__favorite--active';
    }

    handlerSetLocalStorageBasket(CATALOG) {
        document.querySelectorAll('.product-item__basket').forEach(element => {
            element.addEventListener('click', () => {
                _notification__WEBPACK_IMPORTED_MODULE_7__.default.handlerClearNotificationBox();
                
                const { pushProduct, products } = _utils_localStorageBasket__WEBPACK_IMPORTED_MODULE_1__.default.putProducts(element.id, CATALOG);
                
                if (pushProduct) {
                    element.classList.add(this.classNameBasketActive);
                    _notification__WEBPACK_IMPORTED_MODULE_7__.default.render('Товар добавлен в корзину');
                } else {
                    element.classList.remove(this.classNameBasketActive);
                    _notification__WEBPACK_IMPORTED_MODULE_7__.default.render('Товар удален из корзины');
                }

                _counterBasket__WEBPACK_IMPORTED_MODULE_3__.default.render();
                
                _pageShoppingBasket__WEBPACK_IMPORTED_MODULE_5__.default.render(CATALOG);
                _pageShoppingBasket__WEBPACK_IMPORTED_MODULE_5__.default.handlerRemoveProductOfBasket(CATALOG);
                _pageShoppingBasket__WEBPACK_IMPORTED_MODULE_5__.default.handlerClearProductsOfBasket(CATALOG);

                _pageShoppingFavorite__WEBPACK_IMPORTED_MODULE_6__.default.render(CATALOG);
                _pageShoppingFavorite__WEBPACK_IMPORTED_MODULE_6__.default.handlerRemoveProductOfFavorite(CATALOG);
                _pageShoppingFavorite__WEBPACK_IMPORTED_MODULE_6__.default.handlerClearProductsOfFavorite(CATALOG);
                _pageShoppingFavorite__WEBPACK_IMPORTED_MODULE_6__.default.handlerAddProductsOfBasket(CATALOG);
            });
        });

        _pageShoppingBasket__WEBPACK_IMPORTED_MODULE_5__.default.render(CATALOG);
        _pageShoppingBasket__WEBPACK_IMPORTED_MODULE_5__.default.handlerRemoveProductOfBasket(CATALOG);
        _pageShoppingBasket__WEBPACK_IMPORTED_MODULE_5__.default.handlerClearProductsOfBasket(CATALOG);

    }

    handlerSetLocalStorageFavorite(CATALOG) {
        document.querySelectorAll('.product-item__favorite').forEach(element => {
            element.addEventListener('click', () => {
                _notification__WEBPACK_IMPORTED_MODULE_7__.default.handlerClearNotificationBox();

                const { pushProduct, products } = _utils_localStorageFavorite__WEBPACK_IMPORTED_MODULE_2__.default.putProducts(element.id, CATALOG);
    
                if (pushProduct) {
                    element.classList.add(this.classNameFavoriteActive);
                    _notification__WEBPACK_IMPORTED_MODULE_7__.default.render('Товар добавлен в избранное');
                } else {
                    element.classList.remove(this.classNameFavoriteActive);
                    _notification__WEBPACK_IMPORTED_MODULE_7__.default.render('Товар удален из избранного');
                }

                _counterFavorite__WEBPACK_IMPORTED_MODULE_4__.default.render();
                _pageShoppingFavorite__WEBPACK_IMPORTED_MODULE_6__.default.render(CATALOG);
                _pageShoppingFavorite__WEBPACK_IMPORTED_MODULE_6__.default.handlerRemoveProductOfFavorite(CATALOG);
                _pageShoppingFavorite__WEBPACK_IMPORTED_MODULE_6__.default.handlerClearProductsOfFavorite(CATALOG);
                _pageShoppingFavorite__WEBPACK_IMPORTED_MODULE_6__.default.handlerAddProductsOfBasket(CATALOG);
            });
        });

        _pageShoppingFavorite__WEBPACK_IMPORTED_MODULE_6__.default.render(CATALOG);
        _pageShoppingFavorite__WEBPACK_IMPORTED_MODULE_6__.default.handlerRemoveProductOfFavorite(CATALOG);
        _pageShoppingFavorite__WEBPACK_IMPORTED_MODULE_6__.default.handlerClearProductsOfFavorite(CATALOG);
        _pageShoppingFavorite__WEBPACK_IMPORTED_MODULE_6__.default.handlerAddProductsOfBasket(CATALOG);
    }

    render(content) {
        const productsBasketStore = _utils_localStorageBasket__WEBPACK_IMPORTED_MODULE_1__.default.getProducts();
        const productsFavoriteStore = _utils_localStorageFavorite__WEBPACK_IMPORTED_MODULE_2__.default.getProducts();

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

        _constants_root__WEBPACK_IMPORTED_MODULE_0__.ROOT_PRODUCTS.innerHTML = html;
    }
    
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new Products());

/***/ }),

/***/ "./js/modules/showPage.js":
/*!********************************!*\
  !*** ./js/modules/showPage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "showPage": () => /* binding */ showPage,
/* harmony export */   "pagination": () => /* binding */ pagination,
/* harmony export */   "resetPageNumber": () => /* binding */ resetPageNumber
/* harmony export */ });
/* harmony import */ var _utils_localStorageNumberPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/localStorageNumberPage */ "./js/utils/localStorageNumberPage.js");
/* harmony import */ var _utils_localStorageProduct__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/localStorageProduct */ "./js/utils/localStorageProduct.js");
/* harmony import */ var _constants_root__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/root */ "./js/constants/root.js");
/* harmony import */ var _products__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./products */ "./js/modules/products.js");
/* harmony import */ var _library_appearanceAnimation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../library/appearanceAnimation */ "./js/library/appearanceAnimation.js");






const notesOnPage = 9;
const showButtons = 5;
let selectedPageNumber = _utils_localStorageNumberPage__WEBPACK_IMPORTED_MODULE_0__.default.getPageNumber();

function resetPageNumber() {
    selectedPageNumber = 1;
    _utils_localStorageNumberPage__WEBPACK_IMPORTED_MODULE_0__.default.putPageNumber(1);
}

function showPage(CATALOG) {
    
    function showContent(CATALOG) {
        let pageNum = selectedPageNumber;
        let start = (pageNum - 1) * notesOnPage;
        let end = start + notesOnPage;
        const content = CATALOG.slice(start, end);
        renderContent(content);
    }

    function renderContent(content) {
        _products__WEBPACK_IMPORTED_MODULE_3__.default.render(content);
        _products__WEBPACK_IMPORTED_MODULE_3__.default.handlerSetLocalStorageBasket(CATALOG);
        _products__WEBPACK_IMPORTED_MODULE_3__.default.handlerSetLocalStorageFavorite(CATALOG);
    };

    showContent(CATALOG);

    document.querySelector('.catalog__inner-list').style.opacity = 0;
    (0,_library_appearanceAnimation__WEBPACK_IMPORTED_MODULE_4__.smoothUprise)('.catalog__inner-list', 20);
};

function pagination(CATALOG) {

    _constants_root__WEBPACK_IMPORTED_MODULE_2__.ROOT_PAGINATION.innerHTML = '';
    
    let countOfItems = Math.ceil(CATALOG.length / notesOnPage);
    let items = [];
    for (let i = 1; i <= countOfItems; i++) {
        let li = document.createElement('li');
        li.classList.add('pagination-list__item');
        li.innerHTML = i;
        _constants_root__WEBPACK_IMPORTED_MODULE_2__.ROOT_PAGINATION.append(li);
        items.push(li);
        let link = document.createElement('a');
        link.setAttribute('href', `catalog/page-${i}`);
        link.classList.add('pagination-list__item-link');
        link.innerHTML = i;
        li.append(link);
    }

    function showButton(selectedPageNumber) {

        if (items.length > showButtons) {
            for (let i = 0; i < items.length; i++) {

                items[i].style.display = 'none';

                if (i < showButtons) {
                    items[i].style.display = 'block';
                } else {
                    items[i].style.display = 'none';
                }

                if (i == items.length - 1) {
                    items[i].style.display = 'block';
                    items[i - 1].style.display = 'block';
                    items[i - 1].innerHTML = '...';
                    items[i - 1].classList.add('disabled');
                }

                if (selectedPageNumber >= showButtons - 1 && selectedPageNumber !== items.length) {
                    items[selectedPageNumber - 2].style.display = 'block';
                    items[selectedPageNumber - 1].style.display = 'block';
                    items[selectedPageNumber].style.display = 'block';

                    items[1].innerHTML = '...';
                    items[1].classList.add('disabled');
                }

                if (selectedPageNumber >= showButtons - 1 && i > 1 && i < items.length - 1) {
                    items[i].style.display = 'none';
                }

                if (selectedPageNumber + 3 >= items.length && i > items.length - showButtons - 1) {
                    items[items.length - 2].classList.remove('disabled');
                    items[items.length - 2].innerHTML = items.length - 1;
                    items[i].style.display = 'block';
                }

                if (selectedPageNumber == items.length & i < 1) {
                    items[i + 1].innerHTML = '...';
                    items[i + 1].classList.add('disabled');
                }

            }
        }
        if (items.length == 1) {
            for (let i = 0; i < items.length; i++){
                items[i].style.display = 'none';
            }
        } 
        
    }

    showButton(selectedPageNumber);

    function selectedPage(btn) {
        for (let item of items) {
            items[btn - 1].classList.add('active');
            item.addEventListener('click', function() {
                if (!this.classList.contains('disabled')) {
                    selectedPageNumber = parseInt(this.innerHTML);
                    _utils_localStorageNumberPage__WEBPACK_IMPORTED_MODULE_0__.default.putPageNumber(parseInt(this.innerHTML));
                    showPage(CATALOG);
                    pagination(CATALOG);
                    _utils_localStorageProduct__WEBPACK_IMPORTED_MODULE_1__.default.putProduct();
                    (0,_library_appearanceAnimation__WEBPACK_IMPORTED_MODULE_4__.handlerSmoothScroll)(document.querySelector('.catalog'), 10);
                } else {
                    return false;
                }
            });
        }
    }

    selectedPage(selectedPageNumber);

    document.querySelector('.pagination').style.opacity = 0;
    (0,_library_appearanceAnimation__WEBPACK_IMPORTED_MODULE_4__.smoothUprise)('.pagination', 30);
}
 


/***/ }),

/***/ "./js/modules/spinner.js":
/*!*******************************!*\
  !*** ./js/modules/spinner.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _constants_root__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/root */ "./js/constants/root.js");


class Spinner {
    render () {
        const html = `
            <img src="images/icons/spinner.svg" alt="spinner" />
        `;

        _constants_root__WEBPACK_IMPORTED_MODULE_0__.ROOT_SPINNER.innerHTML = html;
    }
}
    
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new Spinner());

/***/ }),

/***/ "./js/utils/localStorageBasket.js":
/*!****************************************!*\
  !*** ./js/utils/localStorageBasket.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _localStorageFavorite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localStorageFavorite */ "./js/utils/localStorageFavorite.js");


class LocalStorageBasket {
    constructor() {
        this.keyName = 'basketProducts';
        this.productData = 'basketProductsData';
    }

    getProducts() {
        const productsBasket = localStorage.getItem(this.keyName);
        if (productsBasket !== null) {
            return JSON.parse(productsBasket);
        }
        return [];
    }

    getProductsData() {
        const basketProductsData = localStorage.getItem(this.productData);
        if (basketProductsData !== null) {
            return JSON.parse(basketProductsData);
        }
        return [];
    }

    putProducts(id, CATALOG) {

        let products = this.getProducts();
        let productsData = this.getProductsData();
        let pushProduct = false;
        const index = products.indexOf(id);
        if(index === -1) {
            products.push(id);
            pushProduct = true;
        } else {
            products.splice(index, 1);
            productsData.splice(index, 1);
        }

        localStorage.setItem(this.keyName, JSON.stringify(products));

        CATALOG.forEach(product => {
            if(product.id == id) {
                if(pushProduct == true) {
                    productsData.push(product);
                }
            }
        })

        localStorage.setItem(this.productData, JSON.stringify(productsData));

        return { pushProduct, products }
    }

    putProductsData(id) {

        let products = this.getProducts();
        let productsData = this.getProductsData();
        let productFavoriteData = _localStorageFavorite__WEBPACK_IMPORTED_MODULE_0__.default.getProductsData();
        const index = products.indexOf(id);

        productFavoriteData.forEach(productData => {
            if(productData.id == id) {
                if(index !== -1) {
                    productsData.push(productData);
                }
            }
        })
        
        let productsBasketData = productsData.filter((v,i,a)=>a.findIndex(t=>(JSON.stringify(t) === JSON.stringify(v)))===i)

        localStorage.setItem(this.productData, JSON.stringify(productsBasketData));
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new LocalStorageBasket());

/***/ }),

/***/ "./js/utils/localStorageFavorite.js":
/*!******************************************!*\
  !*** ./js/utils/localStorageFavorite.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
class LocalStorageFavorite {
    constructor() {
        this.keyName = 'favoriteProducts';
        this.productFavoriteData = 'favoriteProductsData';
    }

    getProducts() {
        const productsFavorite = localStorage.getItem(this.keyName);
        if (productsFavorite !== null) {
            return JSON.parse(productsFavorite);
        }
        return [];
    }

    getProductsData() {
        const productsFavoriteData = localStorage.getItem(this.productFavoriteData);
        if (productsFavoriteData !== null) {
            return JSON.parse(productsFavoriteData);
        }
        return [];
    }

    putProducts(id, CATALOG) {
        let products = this.getProducts();
        let productFavoriteData = this.getProductsData();
        let pushProduct = false;
        const index = products.indexOf(id);
        if(index === -1) {
            products.push(id);
            pushProduct = true;
        } else {
            products.splice(index, 1);
            productFavoriteData.splice(index, 1);
        }

        localStorage.setItem(this.keyName, JSON.stringify(products));

        CATALOG.forEach(product => {
            if(product.id == id) {
                if(pushProduct == true) {
                    productFavoriteData.push(product);
                }
            }
        })

        localStorage.setItem(this.productFavoriteData, JSON.stringify(productFavoriteData));

        return { pushProduct, products }
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new LocalStorageFavorite());



/***/ }),

/***/ "./js/utils/localStorageNumberPage.js":
/*!********************************************!*\
  !*** ./js/utils/localStorageNumberPage.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
class LocalStorageNumberPage {

    constructor() {
        this.keyName = 'numberPage';
    }

    getPageNumber() {
        const numberPage = localStorage.getItem(this.keyName);

        if (localStorage.getItem(this.keyName) === null) {
            return 1;
        } else {
            return JSON.parse(numberPage);
        }
    }

    putPageNumber(selectedPageNumber) {
        localStorage.setItem(this.keyName, JSON.stringify(selectedPageNumber));
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new LocalStorageNumberPage());

/***/ }),

/***/ "./js/utils/localStorageProduct.js":
/*!*****************************************!*\
  !*** ./js/utils/localStorageProduct.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
class LocalStorageProduct {
    constructor() {
        this.keyName = 'product';
    }

    getProduct() {
        const product = localStorage.getItem(this.keyName);
        if (product !== null) {
            return JSON.parse(product);
        }
        return ["300068"];
    }

    putProduct() {
        document.querySelectorAll('.product-item').forEach(element => {
            element.addEventListener('click', () => {
                let product = [];
                product.push(element.id);
                localStorage.setItem(this.keyName, JSON.stringify(product));
            });
        });
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new LocalStorageProduct());

/***/ }),

/***/ "./js/utils/localStorageСategory.js":
/*!******************************************!*\
  !*** ./js/utils/localStorageСategory.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _localStorageNumberPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localStorageNumberPage */ "./js/utils/localStorageNumberPage.js");


class LocalStorageCategory {
    constructor() {
        this.keyName = 'category';
    }

    getCategory() {
        const category = localStorage.getItem(this.keyName);

        if (category !== null) {
            return JSON.parse(category);
        }
        return ["monitors"];
    }

    putCategory() {
        document.querySelectorAll('.menu-categories__link').forEach(element => {
            element.addEventListener('click', () => {
                let data = element.dataset.category;
                let category = [];
                category.push(data);
                localStorage.setItem(this.keyName, JSON.stringify(category));
                _localStorageNumberPage__WEBPACK_IMPORTED_MODULE_0__.default.putPageNumber(1);
            });
        });
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new LocalStorageCategory());

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./js/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=bundle.js.map