import popup from './modules/popup';
import СounterBasket from './modules/counterBasket';
import СounterFavorite from './modules/counterFavorite';
import PageShoppingBasket from './modules/pageShoppingBasket';
import PageShoppingFavorite from './modules/pageShoppingFavorite';
import LocalStorageCategory from './utils/localStorageСategory';
import LocalStorageProduct from './utils/localStorageProduct';
import ProductPage from './modules/productPage';
import Spinner from './modules/spinner';
import Error from './modules/error';
import filterProduct from './modules/filter';
import Designation from './modules/designation';
import main from './modules/main';

import FilterСomputers from './modules/filterProducts/filterСomputers';
import FilterLaptops from './modules/filterProducts/filterLaptops';
import FilterMonitors from './modules/filterProducts/filterMonitors';
import FilterHeadphones from './modules/filterProducts/filterHeadphones';
import FilterKeyboards from './modules/filterProducts/filterKeyboards';
import FilterMouses from './modules/filterProducts/filterMouses';

window.addEventListener('DOMContentLoaded', () => {
    
    let CATALOG = [];
    let FILTER = [];
    LocalStorageCategory.putCategory();
    
    СounterBasket.render();
    СounterFavorite.render();

    PageShoppingBasket.render();
    PageShoppingBasket.handlerRemoveProductOfBasket(CATALOG);
    PageShoppingBasket.handlerClearProductsOfBasket(CATALOG);
    
    PageShoppingFavorite.render();
    PageShoppingFavorite.handlerRemoveProductOfFavorite(CATALOG);
    PageShoppingFavorite.handlerClearProductsOfFavorite(CATALOG);
    PageShoppingFavorite.handlerAddProductsOfBasket(CATALOG);

    popup();

    if (LocalStorageCategory.getCategory().indexOf('computers') === 0) {
        CATALOG = 'https://api.jsonbin.io/b/604a5c90683e7e079c4cdd52';
        FILTER = FilterСomputers.render;
    }
    else if (LocalStorageCategory.getCategory().indexOf('laptops') === 0) {
        CATALOG = 'https://api.jsonbin.io/b/6048b6367ea6546cf3d94d43';
        FILTER = FilterLaptops.render;
    }
    else if (LocalStorageCategory.getCategory().indexOf('monitors') === 0) {
        CATALOG = 'https://api.jsonbin.io/b/604a5cf87ea6546cf3db298f';
        FILTER = FilterMonitors.render;
    }
    else if (LocalStorageCategory.getCategory().indexOf('headphones') === 0) {
        CATALOG = 'https://api.jsonbin.io/b/6048b69000e5956cd8899f4c';
        FILTER = FilterHeadphones.render;
    }
    else if (LocalStorageCategory.getCategory().indexOf('keyboards') === 0) {
        CATALOG = 'https://api.jsonbin.io/b/6048b6aa7ea6546cf3d94daa';
        FILTER = FilterKeyboards.render;
    }
    else if (LocalStorageCategory.getCategory().indexOf('mouses') === 0) {
        CATALOG = 'https://api.jsonbin.io/b/6048b6c500e5956cd8899f81';
        FILTER = FilterMouses.render;
    }

    if (window.location.href.indexOf('catalog') !== -1) {

        Spinner.render();
        Designation.renderBreadcrumbs();
        main();

        fetch(CATALOG)
        .then(res => res.json())
        .then(body => {
            CATALOG = body;

            Designation.renderTitle();

            FILTER();
            filterProduct(CATALOG);
            LocalStorageProduct.putProduct();

        })
        .catch(error => {
            Error.render();
        });

        
    } 
    else if (window.location.href.indexOf('product-page') !== -1) {

        Spinner.render();
        Designation.renderBreadcrumbs();
        main();
        
        fetch(CATALOG)
        .then(res => res.json())
        .then(body => {
            CATALOG = body;

            ProductPage.render(CATALOG);
            ProductPage.handlerAvialableLabel();
            ProductPage.handlerSetLocalStorageFavorite(CATALOG);
        })
        .catch(error => {
            Error.render();
        });
    }
    else {
        main();
    }
});