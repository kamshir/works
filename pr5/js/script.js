$(function() {
    // Солнце / Луна 
    const planet = document.createElement("div");
    planet.classList.add("sun");
    $(".nature").append(planet);

    // Время
    const clock = document.querySelector(".clock");

    // Настройки
    let parametrs = {
        radiusW: window.innerWidth / 2 - 120, // Радиус по ширине экрана
        radiusH: window.innerHeight / 2 - 100, // Радиус по высоте экрана
        speed: 1000, // Нач. скорость
        f: 0, // Функция
        s: Math.PI / 12 / 6, // Какую долю круга будет проходить
        time: 350, // Нач. время
        incr: 10, // Шаг
        pause: false, // Пауза
        max: 4, // Макс. замедление
        min: 0.02, // Макс. ускорение
    };

    // изменения радиусов под размеры экрана
    window.addEventListener("resize", () => {
        parametrs.radiusW = window.innerWidth / 2 - 120;
        parametrs.radiusH = window.innerHeight / 2 - 100;
    });

    // Перезапуск движения
    function reload() {
        clearInterval(t);
        t = setInterval(function() {
            moveTime(parametrs.s);
        }, parametrs.speed);
    }

    // Движение солнца
    function moveTime(piece) {
        parametrs.f += piece;
        planet.style.left =
            80 +
            parametrs.radiusW +
            parametrs.radiusW * Math.sin(parametrs.f) +
            "px";
        planet.style.top =
            parametrs.radiusH -
            parametrs.radiusH * Math.cos(-parametrs.f) +
            "px";
        // Если наступает вечер
        if (planet.offsetTop > window.innerHeight / 2) {
            planet.style.backgroundImage = `url(img/moon.svg)`;
        } else {
            planet.style.backgroundImage = `url(img/sunny.svg)`;
        }
        //  console.log(planet.offsetTop);
        parametrs.time += parametrs.incr;
        // Прошли сутки
        if (parametrs.time > 1430) {
            parametrs.time = 0;
            clock.textContent = `0:00`;
        } else {
            let hours = parseInt(parametrs.time / 60);
            let minutes = parametrs.time % 60;
            if (!minutes) minutes = "00";
            clock.textContent = `${hours}:${minutes}`;
        }
        speed();
    }

    // Пауза
    function pause() {
        parametrs.pause = !parametrs.pause;
        // console.log(parametrs.pause);
        if (parametrs.pause) {
            $("title").text("Pause");
            $(".pause").css({ display: "block" });
            clearInterval(t);
        } else {
            $("title").text("Daily");
            $(".pause").css({ display: "none" });
            t = setInterval(function() {
                moveTime(parametrs.s);
            }, parametrs.speed);
        }
    }

    // Отображение скорости
    function speed() {
        $(".speed").text(
            parametrs.speed % 10 == 0 ?
            parametrs.speed / 1000 + "с" :
            (parametrs.speed / 1000).toFixed(2) + "с"
        );
    }

    // Увел. скорости
    function faster() {
        if (parametrs.speed / 1000 > parametrs.min) parametrs.speed /= 2;
        // console.log(parametrs.speed);
        speed();
    }

    // Уменьшение скорости
    function slower() {
        if (parametrs.speed / 1000 < parametrs.max) parametrs.speed *= 2;
        // console.log(parametrs.speed);
        speed();
    }

    // Нач. положение солнца
    moveTime(-(2 * Math.PI) / 4);
    // Активация движения солнца
    let t = setInterval(function() {
        moveTime(parametrs.s);
    }, parametrs.speed);

    //  События кнопок
    document.body.addEventListener("keydown", (e) => {
        const key = e.keyCode;
        // Если нажали пробел
        if (key == 32) pause();
        // Если нажали влево
        else if (key == 37) {
            if (parametrs.pause) {
                slower();
            } else {
                slower();
                reload();
            }
        }
        // Если нажали вправо 
        else if (key == 39) {
            if (parametrs.pause) {
                faster();
            } else {
                faster();
                reload();
            }
        }
    });
});