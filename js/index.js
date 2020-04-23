let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");


const coche = {
  img: null,
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  inicializar: function () {
    this.img= new Image();
    this.img.src = "/images/car.png";
    //this.img.onload = this.mostrar;
    this.widht = canvas.widht;
    this.height = canvas.height;


  },

  mostrar: function () {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);

  }


}

const road = {
  img: null,
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  inicializar: function () {
    this.img= new Image();
    this.img.src = "/images/road.png";
    //this.img.onload = this.mostrar;
    this.widht = canvas.widht;
    this.height = canvas.height;


  },

  mostrar: function () {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);

  }
}


window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    road.inicializar();
    road.mostrar();
    coche.inicializar();
    coche.mostrar();


  }
};