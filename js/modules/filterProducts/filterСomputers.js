import { ROOT_FILTER_ASIDE } from '../../constants/root';

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

        ROOT_FILTER_ASIDE.innerHTML = html;

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

export default new FilterСomputers();