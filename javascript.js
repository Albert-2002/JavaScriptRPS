let trial = Number(prompt(" 1 - for ROCK\n 2 - for PAPER\n 3 - for SCISSOR: "));

if (trial==1){
    playerchoice = 'ROCK'
} else if (trial==2){
    playerchoice = 'PAPER'
} else {
    playerchoice = 'SCISSOR'
}

let computerchoice = Math.floor((Math.random() * 3) + 1);

if (computerchoice==1){
    computers = 'ROCK'
} else if (computerchoice==2){
    computers = 'PAPER'
} else {
    computers = 'SCISSOR'
}

console.log(playerchoice,computers)

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

console.log(RPS(playerchoice,computers))
