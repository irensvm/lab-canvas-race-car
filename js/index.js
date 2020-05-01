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
    this.img.onload = this.mostrar();
  },

  mostrar: function () {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  },

  //createObstacles: function(){
    
  //}


  

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
  x: 0,
  height: 25,
  speed: 10,
  y: 0,
  width: Math.floor(Math.random() * 150) + 50,

  mostrar: function(){
    ctx.fillRect(this.x, this.y, this.width, this.height);


  }

  


}



function updateCanvas() {
  //ctx.clearRect(0,0,canvas.width,canvas.height);
  road.mostrar();
  car.mostrar();
  obstacles.mostrar();
  
  requestAnimationFrame(updateCanvas);
}

function startGame() {
  setInterval(function () { road.createObstacle() }, 2000);
  updateCanvas();
}

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
    document.onkeydown = driveCar;

  };

};
function driveCar(event) {
  document.addEventListener("keydown", event => {
    switch (event.key) {
      case "ArrowRight":
        if (car.x < 450) {
          car.x += 40;
          break;
        }

      case "ArrowLeft":
        if (car.x > 30) {
          car.x -= 40;
          break;
        }
    }
  })
}