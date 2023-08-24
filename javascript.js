let computerchoice = Math.floor((Math.random() * 3) + 1);

if (computerchoice==1){
    computers = 'ROCK'
} else if (computerchoice==2){
    computers = 'PAPER'
} else {
    computers = 'SCISSOR'
}

function RPS(player,computer){
  if (player==computer){
      return 'DRAW! - Try Again'
  } else if (player == 'ROCK' && computer == 'SCISSOR'){
      return 'YOU WIN!'
  } else if (player == 'PAPER' && computer == 'ROCK'){
      return 'YOU WIN!'
  } else if (player == 'SCISSOR' && computer == 'PAPER'){
      return 'YOU WIN!'
  } else {
      return 'YOU LOSE!'
  }
}

let playerchoice;

const btn1 = document.querySelector('.btn1');
btn1.addEventListener('click', () => {
  //trial = 1;
  playerchoice = 'ROCK';
  alert(RPS(playerchoice,computers));
  window.location.reload();
  //console.log(trial);
});

const btn2 = document.querySelector('.btn2');
btn2.addEventListener('click', () => {
  //trial = 2;
  playerchoice = 'PAPER';
  alert(RPS(playerchoice,computers));
  window.location.reload();
  //console.log(trial);
});

const btn3 = document.querySelector('.btn3');
btn3.addEventListener('click', () => {
  //trial = 3;
  playerchoice = 'SCISSOR';
  alert(RPS(playerchoice,computers));
  window.location.reload();
  //console.log(trial);
});





