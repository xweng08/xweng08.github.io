let player_score = 0;
let computer_score = 0;
let message;

var choices = ['Rock', 'Paper', 'Scissors'];

function preload(){
  rock = loadImage('rock.jpeg');
  paper = loadImage('paper.jpeg');
  scissors = loadImage('scissors.jpeg');
}

function setup(){
  canvas = createCanvas(900, 700);
  canvas.parent('PaperContainer');
  player_score = 0;
  computer_score = 0;

  rock = createImg('rock.jpeg', 'rock');
  paper = createImg('paper.jpeg', 'paper');
  scissors = createImg('scissors.jpeg', 'scissors');

  rock.position(width-100, height*0.8);
  rock.size(110, 110);
  rock.mousePressed(function(){winner(0)});

  paper.position(width+100, height*0.8);
  paper.size(110, 110);
  paper.mousePressed(function(){winner(1)});

  scissors.position(width+300, height*0.8);
  scissors.size(110, 110);
  scissors.mousePressed(function(){winner(2)});

  let restart = createButton('Reset Scores');
  restart.position(width+100, height);
  restart.mousePressed(setup)
}

function draw(){

  // Title text
  textFont('Courier New', 30);
  textStyle(BOLD);
  textAlign(CENTER);
  text('Rock, Paper, Scissors, Shoot!', width/2, height/9)

  // Instructions
  textSize(20);
  text('Take your pick below!', width/2, height/1.7);

  // Display
  textSize(25);
  textStyle(NORMAL);
  text(`Player: ${player_score}`, width/1.45, height/4);
  text(`Computer: ${computer_score}`, width/3.75, height/4);

}

function winner(choice){
  clear();
  let computer = random(choices);
  let player = choices[choice];

  if (computer == player){
    message = 'Tie';
  }
  else if (player == 'Rock'){
    if (computer == 'Paper'){
      message = 'Lose';
      computer_score += 1
    }
    else{
      message = 'Win';
      player_score += 1
    }
  }
  else if (player == 'Paper'){
    if (computer == 'Scissors'){
      message = 'Lose';
      computer_score += 1
    }
    else{
      message = 'Win';
      player_score += 1
    }
  }
  else{
    if (computer == 'Rock'){
      message = 'Lose';
      computer_score += 1
    }
    else{
      message = 'Win';
      player_score += 1
    }
  }
  text(`Result: ${message}`, width/2, height/2);
  text(`${player}`, width/1.45, height/3);
  text(`${computer}`, width/3.75, height/3);
}
