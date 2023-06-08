var score = 0;
var x_pos_ball;
var y_pos_ball;
var ball_size = 20;

let x_speed = 3.0;
let y_speed = 3.7;

let x_direction = 1;
let y_direction = 1;

let player_size = 90;
let player_width = 15;
let player_distance_wall = 20;

let game_started = true;

function setup() {
    createCanvas(400, 400);
    x_pos_ball = width / 2;
    y_pos_ball = height / 2;
}

function mouseReleased() {
 if(!game_started){
    x_direction = 1;
    y_direction = 1;
    x_pos_ball= 200;
    y_pos_ball= 200;
    game_started = true;
  }
}

function draw() {
   
  createArea();
    player();
    ball();
    showScore();
    
}

function showScore() {
    textSize(20);
    fill(0)
    text('Score:' + score, 320, 20);
}

function player() {

    var pos_player_y = mouseY;

    if (mouseY <= 0) {
        pos_player_y = 0
    }
    if (mouseY > height - player_size) {
        pos_player_y = height - player_size;
    }

    fill(0)
    rect(player_distance_wall, pos_player_y, player_width, player_size);

    if (x_pos_ball < player_distance_wall + player_width + (ball_size / 2)
        && y_pos_ball >= pos_player_y
        && y_pos_ball <= pos_player_y + player_size) {

       if(x_pos_ball < player_distance_wall + (ball_size / 2)){
            stop()
      }
        x_direction *= -1;
        score++;
    }

    if (x_pos_ball < (ball_size / 2) && (y_pos_ball < pos_player_y ||
        (y_pos_ball > pos_player_y + player_size))) {
        stop();
    }
}

function stop(){
        textSize(32);
        fill(0)
        text('YOU DIE', height / 2 - 96, width / 2);
        
        x_direction = 0;
        y_direction = 0;

        x_pos_ball = -10;
        y_pos_ball = -10;
        
        game_started = false;
}

function createArea() {
    fill(300);
    rect(0, 0, 399, 399);
}

function ball() {

    x_pos_ball = x_pos_ball + x_speed * x_direction;
    y_pos_ball = y_pos_ball + y_speed * y_direction;

    if (x_pos_ball > width - (ball_size / 2) || x_pos_ball < ball_size / 2) {
        x_direction *= -1;
    }
    if (y_pos_ball > height - (ball_size / 2) || y_pos_ball < ball_size / 2) {
        y_direction *= -1;
    }

    fill(300);
    ellipse(x_pos_ball, y_pos_ball, ball_size, ball_size);
}





