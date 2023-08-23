let computerchoice = Math.floor((Math.random() * 3) + 1);

if (computerchoice==1){
    computers = 'ROCK'
} else if (computerchoice==2){
    computers = 'PAPER'
} else {
    computers = 'SCISSOR'
}

const btn1 = document.querySelector('.btn');
btn1.addEventListener('click', () => {
  trial = 1;
});

const btn2 = document.querySelector('#btn');
btn.addEventListener('click', () => {
  trial = 2;
});

const btn3 = document.querySelector('#btn');
btn.addEventListener('click', () => {
  trial = 3;
});

if (trial==1){
    playerchoice = 'ROCK'
} else if (trial==2){
    playerchoice = 'PAPER'
} else {
    playerchoice = 'SCISSOR'
}

