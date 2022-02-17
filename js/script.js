let order = [];
let clickedOrder = [];
let score = 0;

// 0 - green
// 1 - red
// 2 - yellow
// 3 - blue

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

//Create random color order
let shuffleOrder = ()=> {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for (let i in order){
        let elementColor = createColorElement (order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}

//trigger the next color
let lightColor = (element, number) => {
    number = number * 500;
    setTimeout(()=> {
        element.classList.add('selected');

    }, number - 250);
    setTimeout(() => {
    element.classList.remove('selected');
    });
}

//checks if the clicked buttons are correct
let checkOrder = () => {
    for (let i in clickedOrder) {
        if(clickedOrder[i] != order[i]){
            gamerOver();
            break;
        }
    }
    if (clickedOrder.length == order.length){
        alert (`Pontuação: ${score}\n Você acertou! Iniciando próximo nível!`);
        nextLevel();
    }
}

//function for user click
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected'); 
        checkOrder();
    },250);
}

//function that returns color
let createColorElement = (color) => {
    if (color ==0 ){
        return green;
    } else if (color ==1){
        return red;
    } else if (color==2){
        return yellow;
    } else if (color==3){
        return blue;
    }
}

//Function next level
let nextLevel= ()=>{
    score++;
    shuffleOrder();
}

//Function game over
let gamerOver = () => {
    alert(`Pontuação: ${score}! \nVocê perdeu o jogo!\nclique em OK para iniciar um novo jogo`);
    order = [];
    clickedOrder=[];

    playGame();
}

//Function play game
let playGame = ()=> {
    alert('Bem vindo ao Genius! Iniciando um novo jogo...');
    score=0;

    nextLevel();
}

//click events for colors
green.onclick=() => click(0);
red.onclick=() => click(1);
yellow.onclick=() => click(2);
blue.onclick=() => click(3);


//Play game
playGame();