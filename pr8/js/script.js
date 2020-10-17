$(function(){
    
    const canv = document.getElementById('canvas');
    const ctx = canv.getContext('2d');

    ctx.strokeStyle = "#fff";
    ctx.lineWidth = 2;
    ctx.fillStyle = "#fff";

    const parms = {
        x: 200,
        y: 200,
        w: 20,
        xStart: 210,
        yStart: 210,
        labX: 1,
        labY: 1,
        labLen: 5
    };

    const coords = [
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
    ];

    function drawLabirint(){
        for(let i = 0; i < 5; i++){
            for(let j = 0; j < 5; j++){
                ctx.beginPath();
                if (coords[i][j].left) ctx.strokeRect(parms.x, parms.y, 0, parms.w);
                if (coords[i][j].top) ctx.strokeRect(parms.x, parms.y, parms.w, 0);
                if (coords[i][j].right) ctx.strokeRect(parms.x + parms.w, parms.y, 0, parms.w);
                if (coords[i][j].bottom) ctx.strokeRect(parms.x, parms.y + parms.w, parms.w, 0);
                parms.x += parms.w;
                ctx.closePath();
            }
            parms.x = 200;
            parms.y += parms.w;
        }
    }

    function drawPers(){
        ctx.beginPath();
        ctx.arc(parms.xStart, parms.yStart, 5, 0, 2 * Math.PI);
        ctx.fill();
        ctx.closePath();
    }

    function start(){
        drawLabirint();      
        drawPers();
    }

    function clearPlace(){
        ctx.clearRect(parms.xStart - 5, parms.yStart - 5, 10, 10);
    }

    start();

    document.body.addEventListener('keydown', event => {
        const key = event.key;
        if (key == "ArrowLeft"){
            if (parms.labX - 1 > 0){
                clearPlace();
                parms.xStart -= 20;
                drawPers();
                parms.labX--;
            }
        }
        else if (key == "ArrowRight"){
            if (parms.labX < parms.labLen){
                clearPlace();
                parms.xStart += 20;
                drawPers();
                parms.labX++;
            }
        }
        else if (key == "ArrowUp"){
            if (parms.labY - 1 > 0){
                clearPlace();
                parms.yStart -= 20;
                drawPers();
                parms.labY--;
            }
        }
        else if (key == "ArrowDown"){
            if (parms.labY < parms.labLen){
                clearPlace();
                parms.yStart += 20;
                drawPers();
                parms.labY++;   
            }
        }
        console.log(parms.labY, parms.labX);
    });

});