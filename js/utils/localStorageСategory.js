import LocalStorageNumberPage from './localStorageNumberPage';

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
                LocalStorageNumberPage.putPageNumber(1);
            });
        });
    }
}

export default new LocalStorageCategory();