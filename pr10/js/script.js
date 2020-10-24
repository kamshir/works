$(() => {
    
    const gameField = document.querySelector('.gameField');

    const set = {
        step: 20,
        width: gameField.clientWidth,
        height: gameField.clientHeight,
        x: Math.floor(Math.random() * gameField.clientWidth),
        y: Math.floor(Math.random() * gameField.clientHeight),
        smooth: 10,
    }

    function man(){
        let man = new Image();
        man.alt = 'man';
        man.src = './img/man.png';
        man.classList.add('man');
        man.style.top = set.x + 'px';
        man.style.left = set.y + 'px';
        gameField.appendChild(man);
    }

    function start() {
        man();
    }

    function moves(e){
        let key = e.key;
        console.log(key);
        let man = $('.man');
        if ((key == "ArrowUp" || key == "w") && parseInt(man.css('top')) - set.smooth > 0){
            let top = parseInt(man.css('top')) - set.step + 'px';
            man.css({'top': top});
        }
        else if ((key == "ArrowDown" || key == "s") && parseInt(man.css('top')) + parseInt(man.css('height')) + set.smooth < set.height){
            let top = parseInt(man.css('top')) + set.step + 'px';
            man.css({'top': top});
        }
        else if ((key == "ArrowLeft" || key == "a") && parseInt(man.css('left')) - set.smooth > 0){
            let left = parseInt(man.css('left')) - set.step + 'px';
            man.css({'left': left});
        }
        else if ((key == "ArrowRight" || key == "d") && parseInt(man.css('left')) + parseInt(man.css('width')) + set.smooth < set.width){
            let left = parseInt(man.css('left')) + set.step + 'px';
            man.css({'left': left});
        }
    }

    start();

    console.log(set.x, set.y);

    document.body.addEventListener('keydown', event => moves(event));

});