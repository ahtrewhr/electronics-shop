import LocalStorageNumberPage from '../utils/localStorageNumberPage';
import LocalStorageProduct from '../utils/localStorageProduct';
import { ROOT_PAGINATION } from '../constants/root';
import Products from './products';
import {smoothUprise, handlerSmoothScroll} from '../library/appearanceAnimation';

const notesOnPage = 9;
const showButtons = 5;
let selectedPageNumber = LocalStorageNumberPage.getPageNumber();

function resetPageNumber() {
    selectedPageNumber = 1;
    LocalStorageNumberPage.putPageNumber(1);
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
        Products.render(content);
        Products.handlerSetLocalStorageBasket(CATALOG);
        Products.handlerSetLocalStorageFavorite(CATALOG);
    };

    showContent(CATALOG);

    document.querySelector('.catalog__inner-list').style.opacity = 0;
    smoothUprise('.catalog__inner-list', 20);
};

function pagination(CATALOG) {

    ROOT_PAGINATION.innerHTML = '';
    
    let countOfItems = Math.ceil(CATALOG.length / notesOnPage);
    let items = [];
    for (let i = 1; i <= countOfItems; i++) {
        let li = document.createElement('li');
        li.classList.add('pagination-list__item');
        li.innerHTML = i;
        ROOT_PAGINATION.append(li);
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
                    LocalStorageNumberPage.putPageNumber(parseInt(this.innerHTML));
                    showPage(CATALOG);
                    pagination(CATALOG);
                    LocalStorageProduct.putProduct();
                    handlerSmoothScroll(document.querySelector('.catalog'), 10);
                } else {
                    return false;
                }
            });
        }
    }

    selectedPage(selectedPageNumber);

    document.querySelector('.pagination').style.opacity = 0;
    smoothUprise('.pagination', 30);
}
 
export {showPage, pagination, resetPageNumber};