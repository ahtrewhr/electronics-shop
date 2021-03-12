import LocalStorageFavorite from './localStorageFavorite';

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
        let productFavoriteData = LocalStorageFavorite.getProductsData();
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

export default new LocalStorageBasket();