document.body.onload = function(){

    const header = document.createElement('header');
    header.classList.add('header');
    header.innerHTML = "<h1>Шапка сайта</h1>";
    document.body.appendChild(header);

    let empty1 = document.createElement('div');
    empty1.classList.add('empty');
    document.body.append(empty1);

    const gorMenu = document.createElement('div');
    gorMenu.classList.add('gorMenu');
    document.body.appendChild(gorMenu);
    gorMenu.innerHTML = "<h1>Горизонтальное меню</h1>";

    let empty2 = document.createElement('div');
    empty2.classList.add('empty');
    document.body.append(empty2);

    const siteBody = document.createElement('div');
    siteBody.classList.add('siteBody', 'inline');
    document.body.appendChild(siteBody);
    siteBody.innerHTML = "<h1>Тело сайта</h1>";

    let empty3 = document.createElement('div');
    empty3.classList.add('vertEmpty', 'inline');
    document.body.append(empty3);
    empty3.textContent = "|";

    const vertMenu = document.createElement('div');
    vertMenu.classList.add('vertMenu', 'inline');
    document.body.appendChild(vertMenu);
    vertMenu.innerHTML = "<h1>Вертикальное меню</h1>";

    let empty4 = document.createElement('div');
    empty4.classList.add('empty');
    document.body.append(empty4);

    const footer = document.createElement('footer');
    footer.classList.add('footer');
    document.body.appendChild(footer);
    footer.innerHTML = "<h1>Подвал сайта</h1>";

}