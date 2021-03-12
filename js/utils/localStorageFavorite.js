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

export default new LocalStorageFavorite();

