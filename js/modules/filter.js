import { ROOT_PRODUCTS } from '../constants/root';
import { showPage, pagination, resetPageNumber } from './showPage';
import { handlerSmoothScroll } from '../library/appearanceAnimation';

function filterProduct(CATALOG) {

    showPage(CATALOG);
    pagination(CATALOG);

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
            ROOT_PRODUCTS.innerHTML = 'Нет подходящих товаров <br> <br> Попробуйте изменить условия поиска'
        } else {
            showPage(finalArrayProduct);
            pagination(finalArrayProduct);
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
        resetPageNumber();
        handlerFiltration();
        handlerSmoothScroll(document.querySelector('.catalog'), 10);
    });

    handlerSorting();
    handlerSortingBtn();

    function handlerSortingBtn(finalArrayProduct) {
        const btn = document.querySelector('.catalog__filter-btn');
        const select = document.querySelector('.catalog__filter-btn select');
    
        btn.addEventListener('click', function(e) {
            if (e.target.matches('LI') || e.target.matches('SELECT')) {
                sorting = select.value;
                resetPageNumber();
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

        showPage(arrayProduct);
        pagination(arrayProduct);
    }

    function handlerSearch(finalArrayProduct) {
        const searchInputs = document.querySelectorAll('#filter-2 input[type="checkbox"]');
        searchInputs.forEach((item) => {
            item.onchange = function() {
                let value = this.value;
                let checked = this.checked;
                resetPageNumber();
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

        showPage(endingFilteredSearch);
        pagination(endingFilteredSearch);

        handlerSortingBtn(endingFilteredSearch); // нужен тест
    }

    handlerSearch();

    function searchInputByModel (arrayProduct, val) {
        if(arrayProduct === undefined) {
            arrayProduct = CATALOG
        }

        if(val == '') {
            filteredSearch = [];
            showPage(arrayProduct);
            pagination(arrayProduct);
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
                                        resetPageNumber();
                                        showPage(endingFilteredSearch);
                                        pagination(endingFilteredSearch);
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
        resetPageNumber();
    });
}

export default filterProduct;