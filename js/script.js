// Parameters of canvas
const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")
//Defining the image

window.onload = function () {
  document.getElementById("start-button").onclick = function () {

    startGame();
  };


  function startGame() {
    let background = new Image()
    background.src = "images/bg.png"

    let bird = new Image()
    bird.src = "images/flappy.bg"
    //Drawing the images

    ctx.drawImage(background, 0, 0, canvas.width, canvas.height)
  }

};
class Faby {
  constructor(w, h, speedX, speedY, gravity, gravitySpeed, image) {
    this.w = w;
    this.h = h;
    this.speedX = speedX;
    this.speedY = speedY;
    this.gravity = gravity;
    this.gravitySpeed = gravitySpeed;
    this.image = image;
  }

  drawFaby = () => {
    ctx.drawImage(this.image, this.w, this.h, this.x, this.y)
  }
  update = () => ;
  newPos = () => ;


  window.onkeydown = function (e) {
    switch (e.key) {
      case " ":
        faby.gravity
    }
  }

}