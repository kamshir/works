document.body.onload = function(){

    // Все необходимые элементы на странице 
    const body = document.body; // Само тело док-та

    // Заголовок
    const title = document.createElement('title');
    title.textContent = 'Практическая №4';
    document.head.appendChild(title);

    // Кодировка
    const utf = document.createElement('meta');
    utf.setAttribute('charset', "utf-8");
    document.head.appendChild(utf);

    // Шапка сайта
    const header = document.createElement('div');
    header.classList.add('header');
    header.innerHTML = "<span>Шапка сайта</span>";
    body.appendChild(header);

    // Пустая ячейка
    let empty1 = document.createElement('div');
    empty1.classList.add('empty');
    body.append(empty1);

    // Горизонтальное меню
    const gorMenu = document.createElement('div');
    gorMenu.classList.add('gorMenu');
    body.appendChild(gorMenu);
    gorMenu.innerHTML = "<span>Горизонтальное меню</span>";

    // Пустая ячейка
    let empty2 = document.createElement('div');
    empty2.classList.add('empty');
    body.append(empty2);

    // Тело сайта
    const siteBody = document.createElement('div');
    siteBody.classList.add('siteBody', 'inline');
    siteBody.innerHTML = "<span>Тело сайта</span>";
    body.appendChild(siteBody);

    // Пустая ячейка (вертикальная)
    let empty3 = document.createElement('div');
    empty3.classList.add('vertEmpty', 'inline', 'empty');
    body.append(empty3);

    // Вертикальное меню
    const vertMenu = document.createElement('div');
    vertMenu.classList.add('vertMenu', 'inline');
    vertMenu.innerHTML = "<span>Вертикальное меню</span>";
    body.appendChild(vertMenu);

    // Пустая ячейка
    let empty4 = document.createElement('div');
    empty4.classList.add('empty');
    body.appendChild(empty4);

    // Подвал сайта
    const footer = document.createElement('div');
    footer.classList.add('footer');
    footer.innerHTML = "<span>Подвал сайта</span>";
    body.appendChild(footer);

    
    // events
    body.addEventListener('mouseover', event => {
        const target = event.target;
        if (target.tagName == 'SPAN'){
            let clr = $(target.parentNode).css('color');
            target.parentNode.style.color = $(target.parentNode).css('background-color');
            target.parentNode.style.backgroundColor = clr;
        }
    });

    // Функция отслеживания одиночного и двойного нажатия на блок
    jQuery.fn.single_double_click = function (single_click_callback, double_click_callback, timeout) {
        return this.each(function () {
            var clicks = 0,
                self = this;
            jQuery(this).click(function (event) {
                clicks++;
                if (clicks == 1) {
                    setTimeout(function () {
                        if (clicks == 1) {
                            single_click_callback.call(self, event);
                        } else {
                            double_click_callback.call(self, event);
                        }
                        clicks = 0;
                    }, timeout || 300);
                }
            });
        });
    }


    $(body).single_double_click(event => {
        // Событие при одиночном нажатии
        const target = event.target;
        if (!target.classList.contains('empty')) {
            if (target.previousSibling) {
                if (target.previousSibling.classList.contains('empty')) {
                    let sibling = target.previousSibling.previousSibling.innerHTML;
                    target.previousSibling.previousSibling.innerHTML = target.innerHTML;
                    target.innerHTML = sibling;
                }
            }
        }
    }, event => {
        // Событие при двойном нажатии
        const target = event.target;
        if (!target.classList.contains('empty')) {
            if (target.nextSibling) {
                if (target.nextSibling.classList.contains('empty')) {
                    let sibling = target.nextSibling.nextSibling.innerHTML;
                    target.nextSibling.nextSibling.innerHTML = target.innerHTML;
                    target.innerHTML = sibling;
                }
            }
        }
    });

}