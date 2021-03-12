import { ROOT__BREADCRUMBS, ROOT_TITLE } from '../constants/root';
import LocalStorageCategory from '../utils/localStorageСategory';

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

        const category = LocalStorageCategory.getCategory();
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

        ROOT__BREADCRUMBS.innerHTML = htmlBreadcrumbs;

    }

    renderTitle() {
        const category = LocalStorageCategory.getCategory();
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

        ROOT_TITLE.innerHTML = htmlTitle;
    }
}

export default new Designation();