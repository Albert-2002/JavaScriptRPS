let computerchoice = Math.floor((Math.random() * 3) + 1);

if (computerchoice==1){
    computers = 'ROCK'
} else if (computerchoice==2){
    computers = 'PAPER'
} else {
    computers = 'SCISSOR'
}

let trial = 0;

const btn1 = document.querySelector('.btn1');
btn1.addEventListener('click', () => {
  trial = 1;
  console.log(trial);
});

const btn2 = document.querySelector('.btn2');
btn2.addEventListener('click', () => {
  trial = 2;
  console.log(trial);
});

const btn3 = document.querySelector('.btn3');
btn3.addEventListener('click', () => {
  trial = 3;
  console.log(trial);
});

if (trial==1){
    playerchoice = 'ROCK'
} else if (trial==2){
    playerchoice = 'PAPER'
} else {
    playerchoice = 'SCISSOR'
}

