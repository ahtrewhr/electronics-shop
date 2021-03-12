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

export default new LocalStorageProduct();