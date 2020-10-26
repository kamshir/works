$(() => {
    
    const gameField = document.querySelector('.gameField');

    const set = {
        step: 20,
        width: gameField.clientWidth,
        height: gameField.clientHeight,
        x: Math.floor(Math.random() * gameField.clientWidth),
        y: Math.floor(Math.random() * gameField.clientHeight),
        smooth: 10,
        blocksCount: 3,
        blockWidth: 40,
        enemiesCount: 3
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
        blockSpawn();
        man();
    }

    function isCrash(){
        let blocks = set.blocks;
        let man = $('.man');
        blocks.forEach(block => {
            // if ((block.y + set.blockWidth) < parseInt(man.css('top')) && (b)){
            //     alert('Game Over!')
            // }
        });
    }

    function moves(e){
        let key = e.key;
        console.log(key);
        let man = $('.man');
        if ((key == "ArrowUp" || key == "w") && parseInt(man.css('top')) - set.smooth > 0){
            isCrash();
            let top = parseInt(man.css('top')) - set.step + 'px';
            man.css({'top': top});
            console.log(set.x, set.y);
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

    function blockSpawn(){
        let blocks = [];
        for (let i = 0; i < set.blocksCount; i++){
            let block = {
                x: Math.floor(Math.random() * ((set.width - set.blockWidth) - set.smooth) + set.smooth),
                y: Math.floor(Math.random() * ((set.height - set.blockWidth) - set.smooth) + set.smooth)
            }
            blocks.push(block);
        }
        set.blocks = blocks;
        set.blocks.forEach(block => {
            let square = document.createElement('div');
            square.classList.add('block');
            square.style.top = block.y + 'px';
            square.style.left = block.x + 'px';
            gameField.appendChild(square);
        });
        console.log(set.blocks);
    }

    start();

    console.log(set.x, set.y);

    document.body.addEventListener('keydown', event => moves(event));

});