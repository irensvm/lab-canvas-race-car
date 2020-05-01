let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2D');


const road = {
  img: new Image(),
  x: 0,
  y: 0,
  width: canvas.width,
  height: canvas.height,
  speed: 5,
  obstacles: [],
  score: 0,
  mostrar: function () {
    this.img.src = "images/road.png";
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);

  }


}

const car = {
  img: new Image(),
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  speed: 15,
  mostrar: function () {
    this.img.src = "/images/car.png";
    this.width = 75;
    this.height = (this.img.height / this.img.width) * this.width;
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);

  }

}

const obstacles = {
  obstacles: [],
  mostrar: function(){

    
  }


}


window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
    document.onkeydown = driveCar;

    function startGame() {
      requestAnimationFrame(updateCanvas);
    }
  };






};

function updateCanvas() {
  road.mostrar();
  car.mostrar();
  requestAnimationFrame(updateCanvas);
}

// document.onkeydown = teclado
function driveCar(event) {
  event.key === "ArrowLeft";
  event.key === "ArrowRight";
}