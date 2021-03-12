import { ROOT_FILTER_ASIDE } from '../../constants/root';

class FilterMonitors {
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
                                    data-max="60000"
                                    data-from="5000"
                                    data-to="50000"
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
                                    <p class="filter__item-listtitle">Частота обновления</p>
                                    <select class="filter-style filter__item-listselect" name="selectMenuFirst">
                                        <option value="60">60 Гц</option>
                                        <option value="120">120 Гц</option>
                                        <option value="144">144 Гц</option>
                                        <option value="240">240 Гц</option>
                                        <option value="360">360 Гц</option>
                                        <option selected value="any">Любая</option>
                                    </select>
                                </div>
                                <div class="filter__item-list">
                                    <p class="filter__item-listtitle">Время отклика</p>
                                    <select class="filter-style filter__item-listselect" name="selectMenuSecond">
                                        <option value="1">1 мс</option>
                                        <option value="2">2 мс</option>
                                        <option value="3">3 мс</option>
                                        <option value="4">4 мс</option>
                                        <option value="5">5 мс</option>
                                        <option selected value="any">Любое</option>
                                    </select>
                                </div>
                                <div class="filter__item-list">
                                    <p class="filter__item-listtitle">Тип матрицы монитора</p>
                                    <select class="filter-style filter__item-listselect" name="selectMenuThree">
                                        <option value="IPS">IPS</option>
                                        <option value="PLS">PLS</option>
                                        <option value="TN">TN</option>
                                        <option value="VA">VA</option>
                                        <option selected value="any">Любой</option>
                                    </select>
                                </div>
                            </li>
                            <li class="aside-filter__item-drop">
                                <p class="aside-filter__item-title filter__item-drop .filter__item-drop--active">Видеоразъемы</p>
                                <div class="aside-filter__content">
                                    <div class="aside-filter__content-box">
                                        <label class="aside-filter__content-label">
                                            <input class="filter-style" value="DisplayPort" type="checkbox">
                                            DisplayPort
                                        </label>
                                    </div>
                                    <div class="aside-filter__content-box">
                                        <label class="aside-filter__content-label">
                                            <input class="filter-style" value="HDMI" type="checkbox">
                                            HDMI
                                        </label>
                                    </div>
                                    <div class="aside-filter__content-box">
                                        <label class="aside-filter__content-label">
                                            <input class="filter-style" value="DVI-D" type="checkbox">
                                            DVI-D
                                        </label>
                                    </div>
                                    <div class="aside-filter__content-box">
                                        <label class="aside-filter__content-label">
                                            <input class="filter-style" value="VGA" type="checkbox">
                                            VGA
                                        </label>
                                    </div>
                                </div>
                            </li>
                            <li class="aside-filter__item-drop">
                                <p class="aside-filter__item-title filter__item-drop .filter__item-drop--active">Игровой монитор</p>
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
                                <p class="aside-filter__item-title filter__item-drop .filter__item-drop--active">Изогнутый экран</p>
                                <div class="aside-filter__content">
                                    <div class="aside-filter__content-box">
                                        <label class="aside-filter__content-label">
                                            <input class="filter-style" value="curved" type="checkbox">
                                            да
                                        </label>
                                    </div>
                                    <div class="aside-filter__content-box">
                                        <label class="aside-filter__content-label">
                                            <input class="filter-style" value="nocurved" type="checkbox">
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
                                <p class="aside-filter__item-title filter__item-drop .filter__item-drop--active">Страны</p>
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
                                                        <input class="filter-style" value="speakers" type="checkbox">
                                                        Встроенные динамики
                                                    </label>
                                                </div>
                                                <div class="aside-filter__content-box">
                                                    <label class="aside-filter__content-label">
                                                        <input class="filter-style" value="webcam" type="checkbox">
                                                        Встроенная web-камера
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
                                            <input class="filter-style" type="checkbox" value="AOC">
                                            AOC
                                        </label>
                                    </div>
                                    <div class="aside-filter__content-box">
                                        <label class="aside-filter__content-label">
                                            <input class="filter-style" type="checkbox" value="Asus">
                                            ASUS
                                        </label>
                                    </div>
                                    <div class="aside-filter__content-box">
                                        <label class="aside-filter__content-label">
                                            <input class="filter-style" type="checkbox" value="BenQ">
                                            BenQ
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
                                            <input class="filter-style" type="checkbox" value="LG">
                                            LG
                                        </label>
                                    </div>
                                    <div class="aside-filter__content-box">
                                        <label class="aside-filter__content-label">
                                            <input class="filter-style" type="checkbox" value="Philips">
                                            Philips
                                        </label>
                                    </div>
                                    <div class="aside-filter__content-box">
                                        <label class="aside-filter__content-label">
                                            <input class="filter-style" type="checkbox" value="Samsung">
                                            Samsung
                                        </label>
                                    </div>
                                    <div class="aside-filter__content-box">
                                        <label class="aside-filter__content-label">
                                            <input class="filter-style" type="checkbox" value="Xiaomi">
                                            Xiaomi
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

export default new FilterMonitors();