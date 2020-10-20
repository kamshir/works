$(function() {

    const canv = document.getElementById('canvas');
    const ctx = canv.getContext('2d');

    // Styles
    ctx.strokeStyle = "#fff";
    ctx.lineWidth = 2;
    ctx.fillStyle = "#fff";


    // Настройки
    const parms = {
        x: 200,
        y: 200,
        w: 20,
        xStart: 190,
        yStart: 210,
        labX: -1,
        labY: 0,
        lenLab: 5,
        randLab: Math.floor(Math.random() * 3)
    };

    // Сброс настроек
    function set() {
        parms.x = 200;
        parms.y = 200;
        parms.xStart = 190;
        parms.yStart = 210;
        parms.labX = -1;
        parms.labY = 0;
        parms.randLab = Math.floor(Math.random() * 3);
        // console.log(parms.randLab);
    }

    // Построения лабиринтов
    const coords = [
        // 1 лабиринт
        [
            // 1 строка

            [
                // 1 1
                {
                    left: false,
                    top: true,
                    right: true,
                    bottom: false
                },
                // 1 2
                {
                    left: true,
                    top: true,
                    right: true,
                    bottom: true
                },
                // 1 3
                {
                    left: true,
                    top: true,
                    right: true,
                    bottom: false
                },
                // 1 4
                {
                    left: true,
                    top: true,
                    right: true,
                    bottom: true
                },
                // 1 5
                {
                    left: true,
                    top: true,
                    right: true,
                    bottom: false
                },
            ],
            // 2 строка

            [
                // 2 1
                {
                    left: true,
                    top: false,
                    right: true,
                    bottom: false
                },
                // 2 2
                {
                    left: true,
                    top: true,
                    right: false,
                    bottom: false
                },
                // 2 3
                {
                    left: false,
                    top: false,
                    right: false,
                    bottom: true
                },
                // 2 4
                {
                    left: false,
                    top: true,
                    right: false,
                    bottom: false
                },
                // 2 5
                {
                    left: false,
                    top: false,
                    right: true,
                    bottom: true
                },
            ],
            // 3 строка

            [
                // 3 1
                {
                    left: true,
                    top: false,
                    right: false,
                    bottom: true
                },
                // 3 2
                {
                    left: false,
                    top: false,
                    right: true,
                    bottom: false
                },
                // 3 3
                {
                    left: true,
                    top: true,
                    right: false,
                    bottom: false
                },
                // 3 4
                {
                    left: false,
                    top: false,
                    right: true,
                    bottom: true
                },
                // 3 5
                {
                    left: true,
                    top: true,
                    right: true,
                    bottom: false
                },
            ],
            // 4 строка

            [
                // 4 1
                {
                    left: true,
                    top: true,
                    right: false,
                    bottom: false
                },
                // 4 2
                {
                    left: false,
                    top: false,
                    right: true,
                    bottom: true
                },
                // 4 3
                {
                    left: true,
                    top: false,
                    right: true,
                    bottom: false
                },
                // 4 4
                {
                    left: true,
                    top: true,
                    right: false,
                    bottom: false
                },
                // 4 5
                {
                    left: false,
                    top: false,
                    right: true,
                    bottom: true
                },
            ],
            // 5 строка

            [
                // 5 1
                {
                    left: true,
                    top: false,
                    right: true,
                    bottom: true
                },
                // 5 2
                {
                    left: true,
                    top: true,
                    right: true,
                    bottom: true
                },
                // 5 3
                {
                    left: true,
                    top: false,
                    right: false,
                    bottom: true
                },
                // 5 4
                {
                    left: false,
                    top: false,
                    right: false,
                    bottom: true
                },
                // 5 5
                {
                    left: false,
                    top: true,
                    right: false,
                    bottom: true
                },
            ]
        ],
        // 2 лабиринт
        [
            // 1 строка

            [
                // 1 1
                {
                    left: false,
                    top: true,
                    right: true,
                    bottom: false
                },
                // 1 2
                {
                    left: true,
                    top: true,
                    right: false,
                    bottom: false
                },
                // 1 3
                {
                    left: false,
                    top: true,
                    right: false,
                    bottom: true
                },
                // 1 4
                {
                    left: false,
                    top: true,
                    right: true,
                    bottom: false
                },
                // 1 5
                {
                    left: true,
                    top: true,
                    right: true,
                    bottom: true
                },
            ],
            // 2 строка

            [
                // 2 1
                {
                    left: true,
                    top: false,
                    right: false,
                    bottom: false
                },
                // 2 2
                {
                    left: false,
                    top: false,
                    right: true,
                    bottom: false
                },
                // 2 3
                {
                    left: true,
                    top: true,
                    right: false,
                    bottom: true
                },
                // 2 4
                {
                    left: false,
                    top: false,
                    right: false,
                    bottom: false
                },
                // 2 5
                {
                    left: false,
                    top: true,
                    right: true,
                    bottom: true
                },
            ],
            // 3 строка

            [
                // 3 1
                {
                    left: true,
                    top: false,
                    right: true,
                    bottom: true
                },
                // 3 2
                {
                    left: true,
                    top: false,
                    right: false,
                    bottom: true
                },
                // 3 3
                {
                    left: false,
                    top: true,
                    right: true,
                    bottom: false
                },
                // 3 4
                {
                    left: true,
                    top: false,
                    right: true,
                    bottom: true
                },
                // 3 5
                {
                    left: true,
                    top: true,
                    right: true,
                    bottom: true
                },
            ],
            // 4 строка

            [
                // 4 1
                {
                    left: true,
                    top: true,
                    right: false,
                    bottom: false
                },
                // 4 2
                {
                    left: false,
                    top: true,
                    right: false,
                    bottom: true
                },
                // 4 3
                {
                    left: false,
                    top: false,
                    right: true,
                    bottom: true
                },
                // 4 4
                {
                    left: true,
                    top: true,
                    right: false,
                    bottom: false
                },
                // 4 5
                {
                    left: false,
                    top: true,
                    right: true,
                    bottom: false
                },
            ],
            // 5 строка

            [
                // 5 1
                {
                    left: true,
                    top: false,
                    right: false,
                    bottom: true
                },
                // 5 2
                {
                    left: false,
                    top: true,
                    right: false,
                    bottom: true
                },
                // 5 3
                {
                    left: false,
                    top: true,
                    right: false,
                    bottom: true
                },
                // 5 4
                {
                    left: false,
                    top: false,
                    right: true,
                    bottom: true
                },
                // 5 5
                {
                    left: true,
                    top: false,
                    right: true,
                    bottom: false
                },
            ]
        ],
        // 3 лабиринт
        [
            // 1 строка

            [
                // 1 1
                {
                    left: false,
                    top: true,
                    right: false,
                    bottom: false
                },
                // 1 2
                {
                    left: false,
                    top: true,
                    right: true,
                    bottom: false
                },
                // 1 3
                {
                    left: true,
                    top: true,
                    right: true,
                    bottom: false
                },
                // 1 4
                {
                    left: true,
                    top: true,
                    right: true,
                    bottom: true
                },
                // 1 5
                {
                    left: true,
                    top: true,
                    right: true,
                    bottom: false
                },
            ],
            // 2 строка

            [
                // 2 1
                {
                    left: true,
                    top: false,
                    right: true,
                    bottom: false
                },
                // 2 2
                {
                    left: true,
                    top: false,
                    right: true,
                    bottom: true
                },
                // 2 3
                {
                    left: true,
                    top: false,
                    right: false,
                    bottom: false
                },
                // 2 4
                {
                    left: false,
                    top: true,
                    right: false,
                    bottom: true
                },
                // 2 5
                {
                    left: false,
                    top: false,
                    right: true,
                    bottom: false
                },
            ],
            // 3 строка

            [
                // 3 1
                {
                    left: true,
                    top: false,
                    right: true,
                    bottom: false
                },
                // 3 2
                {
                    left: true,
                    top: true,
                    right: false,
                    bottom: false
                },
                // 3 3
                {
                    left: false,
                    top: false,
                    right: true,
                    bottom: true
                },
                // 3 4
                {
                    left: true,
                    top: true,
                    right: true,
                    bottom: false
                },
                // 3 5
                {
                    left: true,
                    top: false,
                    right: true,
                    bottom: false
                },
            ],
            // 4 строка

            [
                // 4 1
                {
                    left: true,
                    top: false,
                    right: false,
                    bottom: true
                },
                // 4 2
                {
                    left: false,
                    top: false,
                    right: true,
                    bottom: true
                },
                // 4 3
                {
                    left: true,
                    top: true,
                    right: false,
                    bottom: false
                },
                // 4 4
                {
                    left: false,
                    top: false,
                    right: true,
                    bottom: false
                },
                // 4 5
                {
                    left: true,
                    top: false,
                    right: true,
                    bottom: false
                },
            ],
            // 5 строка

            [
                // 5 1
                {
                    left: true,
                    top: true,
                    right: false,
                    bottom: false
                },
                // 5 2
                {
                    left: false,
                    top: true,
                    right: false,
                    bottom: true
                },
                // 5 3
                {
                    left: false,
                    top: false,
                    right: true,
                    bottom: true
                },
                // 5 4
                {
                    left: true,
                    top: false,
                    right: false,
                    bottom: true
                },
                // 5 5
                {
                    left: false,
                    top: false,
                    right: true,
                    bottom: true
                },
            ]
        ],
    ];

    // Победа
    function win() {
        let t = setTimeout(() => {
            alert('Win!');
            let game = confirm('Play again?');
            if (game) {
                replay();
            }
        }, 100);
    }

    // Ходы
    function moves(event) {
        const key = event.key;
        // Если идет влево
        if (key == "ArrowLeft" && parms.labX - 1 >= 0 && parms.labX < parms.lenLab) {
            if (!coords[parms.randLab][parms.labY][parms.labX].left) {
                clearPlace();
                parms.xStart -= 20;
                drawPers();
                parms.labX--;
            }
        }
        // Если идет вправо
        else if (key == "ArrowRight" && parms.labX < parms.lenLab) {
            if (parms.labX == -1 || !coords[parms.randLab][parms.labY][parms.labX].right) {
                clearPlace();
                parms.xStart += 20;
                drawPers();
                parms.labX++;
            }
            if (parms.labX > 4) win();
        }
        // Если идет наверх
        else if (key == "ArrowUp" && parms.labY - 1 >= 0 && parms.labX < parms.lenLab && parms.labX >= 0) {
            if (parms.labY == 5 || !coords[parms.randLab][parms.labY][parms.labX].top) {
                clearPlace();
                parms.yStart -= 20;
                drawPers();
                parms.labY--;
            }
        }
        // Если идет вниз
        else if (key == "ArrowDown") {
            if (!coords[parms.randLab][parms.labY][parms.labX].bottom) {
                clearPlace();
                parms.yStart += 20;
                drawPers();
                parms.labY++;
            }
            if (parms.labY > 4) win();
        }
        // console.log(parms.labY, parms.labX);
    }

    // Отрисовка лабиринта
    function drawLabirint() {
        for (let i = 0; i < coords[parms.randLab].length; i++) {
            for (let j = 0; j < coords[parms.randLab][i].length; j++) {
                ctx.beginPath();
                if (coords[parms.randLab][i][j].left) ctx.strokeRect(parms.x, parms.y, 0, parms.w);
                if (coords[parms.randLab][i][j].top) ctx.strokeRect(parms.x, parms.y, parms.w, 0);
                if (coords[parms.randLab][i][j].right) ctx.strokeRect(parms.x + parms.w, parms.y, 0, parms.w);
                if (coords[parms.randLab][i][j].bottom) ctx.strokeRect(parms.x, parms.y + parms.w, parms.w, 0);
                parms.x += parms.w;
                ctx.closePath();
            }
            parms.x = 200;
            parms.y += parms.w;
        }
    }

    // Перезапуск игры
    function replay() {
        set();
        ctx.beginPath();
        ctx.clearRect(180, 180, 200, 200);
        ctx.closePath();
        start();
    }

    // Рисование персонажа
    function drawPers() {
        ctx.beginPath();
        ctx.arc(parms.xStart, parms.yStart, 9, 0, 2 * Math.PI);
        ctx.fill();
        ctx.closePath();
    }

    // Запусе игры
    function start() {
        drawLabirint();
        drawPers();
    }

    // Очистка персонажа после соверешния хода
    function clearPlace() {
        ctx.clearRect(parms.xStart - 9, parms.yStart - 9, 18, 18);
    }

    start();

    // Добавление событий ходов
    document.body.addEventListener('keydown', event => moves(event));

});