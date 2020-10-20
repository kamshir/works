$(function() {
    const cnv = document.getElementById("canvas");
    const ctx = cnv.getContext("2d");

    // drawEllipse
    function drawEllipse(ctx, x, y, a, b) {
        // Запоминаем положение системы координат (CК) и масштаб
        ctx.save();
        ctx.beginPath();

        // Переносим СК в центр будущего эллипса
        ctx.translate(x, y);

        /*
         * Масштабируем по х.
         * Теперь нарисованная окружность вытянется в a / b раз
         * и станет эллипсом
         */

        ctx.scale(a / b, 1);

        // Рисуем окружность, которая благодаря масштабированию станет эллипсом
        ctx.arc(0, 0, b, 0, Math.PI * 2, true);

        // Восстанавливаем СК и масштаб
        ctx.restore();

        ctx.closePath();
        ctx.fill();
    }

    // style
    let gradient = ctx.createRadialGradient(0, 0, 200, 200, 200, 20);
    gradient.addColorStop(0, "rgb(255, 255, 240)");
    gradient.addColorStop(1, "rgb(255, 217, 0)");
    ctx.fillStyle = gradient;
    ctx.strokeStyle = "#000";
    ctx.lineWidth = 0;

    /* body */
    ctx.beginPath();
    ctx.arc(150, 65, 50, 0, 2 * Math.PI);
    ctx.shadowColor = "#999";
    ctx.shadowBlur = 5;
    ctx.shadowOffsetX = 3;
    ctx.shadowOffsetY = 0;
    ctx.fill();
    // ctx.stroke();
    ctx.closePath();
    // eyes style
    ctx.fillStyle = "#000";
    ctx.strokeStyle = "#000";
    ctx.shadowColor = "transparent";
    // eyes
    drawEllipse(ctx, 133, 45, 4, 12);
    drawEllipse(ctx, 167, 45, 4, 12);

    // mouth
    ctx.beginPath();
    ctx.lineWidth = 4;
    ctx.moveTo(120, 80);
    ctx.bezierCurveTo(150, 110, 180, 80, 180, 80);
    ctx.stroke();
    ctx.closePath();

    // cheeks
    ctx.rotate((45 * Math.PI) / 180);
    drawEllipse(ctx, 140, -28, 1.5, 7);
    ctx.rotate((90 * Math.PI) / 180);
    drawEllipse(ctx, -70, -183, 1.5, 7);
    ctx.rotate((225 * Math.PI) / 180);

    // image
    let img = new Image();
    img.src = "./img/blood.png";
    img.onload = () => {
        ctx.drawImage(img, 105, 25, 45, 35);
    }

    // text
    ctx.font = "800 12px Tahoma";
    ctx.fillStyle = "black";
    ctx.fillText("It's a joke. It's all a joke", 85, 135);
})