let player_score = 0;
let computer_score = 0;
let message ="";
let player="";
let computer="";
let win = null;
let radius = 55;

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
  textStyle(NORMAL);
  text('Refresh the page to reset!', width/2, height/1.06);
  textSize(25);
  text(`Player: ${player_score}`, width/1.45, height/4);
  text(`Computer: ${computer_score}`, width/3.75, height/4);
  text(`Result: ${message}`, width/2, height/2);
  text(`${player}`, width/1.45, height/3);
  text(`${computer}`, width/3.75, height/3);

  // Radius 55
  image(rock,(width/4), height/1.5, 110, 110);
  image(paper,(width/2.3), height/1.5, 110, 110);
  image(scissors,(width/1.6), height/1.5, 110, 110);
}

function mousePressed() {

  let imageY = height / 1.5 + 55;
  let rockX = width / 4 + 55;
  let scissorsX = width / 1.6 + 55;
  let paperX = width / 2.3 + 55;

  if (dist(mouseX, mouseY, rockX, imageY) < 55) {
    winner(0);
  }

  if (dist(mouseX, mouseY, paperX, imageY) < 55) {
    winner(1);
  }

  if (dist(mouseX, mouseY, scissorsX, imageY) < 55) {
    winner(2);
  }
}

function winner(choice){
  clear();
  computer = random(choices);
  player = choices[choice];

  if (computer == player){
    message = 'Tie';
    win = null;
  }
  else if (player == 'Rock'){
    if (computer == 'Paper'){
      message = 'Lose';
      win = false;
    }
    else{
      message = 'Win';
      win = true;
    }
  }
  else if (player == 'Paper'){
    if (computer == 'Scissors'){
      message = 'Lose';
      win = false;
    }
    else{
      message = 'Win';
      win = true;
    }
  }
  else{
    if (computer == 'Rock'){
      message = 'Lose';
      win = false;
    }
    else{
      message = 'Win';
      win = true;
    }
  }

  if (win == true){
    player_score += 1
  }
  else if (win == false){
    computer_score +=1
  }
}
