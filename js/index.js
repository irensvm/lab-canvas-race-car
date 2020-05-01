let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2D');


const road = {
  img: new Image(),
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  obstacles: [],
  score: 0,

  inicializar: function () {
    this.img = new Image();
    this.img.src = "/images/road.png";
    this.width = canvas.width;
    this.height = canvas.height;
  },

  mostrar: function () {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    ctx.drawImage(this.img, this.x, this.y - canvas.height, this.width, this.height);
  },

  

}

const car = {
  img: new Image(),
  x: 300,
  y: 500,
  width: 0,
  height: 0,
  speed: 15,

  inicializar: function () {
    this.img = new Image();
    this.img.src = "/images/car.png";
    this.width = 50;
    this.height = 50;
  },

  mostrar: function () {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);

  },

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
  obstacles.mostrar();
  
  requestAnimationFrame(updateCanvas);
}

// document.onkeydown = teclado
function driveCar(event) {
  event.key === "ArrowLeft";
  event.key === "ArrowRight";
}