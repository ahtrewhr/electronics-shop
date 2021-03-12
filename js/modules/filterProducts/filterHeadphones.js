import { ROOT_FILTER_ASIDE } from '../../constants/root';

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

export default new FilterHeadphones();