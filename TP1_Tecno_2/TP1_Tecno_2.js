//Comision Lisandro_Lisi, Ramirez Cancillieri, Delgadino, Martinez, Montozzi, Slomka
//https://www.youtube.com/watch?v=Gi5rHjCg0Ow

let fondo;

let imagenes = [];
let tints = [];

let objetos = [];   // imágenes en pantalla
let activa = -1;    // índice de la imagen activa
let velocidad = 5;

function preload() {
  for (let i = 0; i <= 12; i++) {
    imagenes[i] = loadImage('data/' + i + '.jpg');
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  fondo = color(92, 128, 158);

  tints = [
    color(60, 93, 128),   // 0 azul
    color(174, 131, 56),  // 1 amarillo
    color(120, 151, 159), // 2 azul
    color(78, 112, 137),  // 3 azul
    color(187, 81, 81),   // 4 rojo
    color(60, 93, 128),   // 5 azul
    color(123, 111, 68),  // 6 amarillo
    color(39, 42, 45),    // 7 negro
    color(60, 93, 128),   // 8 azul
    color(174, 131, 56),  // 9 amarillo
    color(120, 151, 159), // 10 azul
    color(187, 81, 81),   // 11 rojo
    color(60, 93, 128),   // 12 azul
  ];
}

function draw() {
  background(fondo);

  moverActiva();

  imageMode(CENTER);

  for (let i = 0; i < objetos.length; i++) {
    tint(tints[objetos[i].img]);

    image(
      imagenes[objetos[i].img],
      objetos[i].x,
      objetos[i].y,
      width * 0.3,
      height * 0.3
    );
  }

  noTint();
}

// ─────────────────────────────
// CREAR IMÁGENES CON LETRAS
// ─────────────────────────────
function keyPressed() {
  let mapa = {
    'a': 0,
    's': 1,
    'd': 2,
    'f': 3,
    'g': 4,
    'h': 5,
    'j': 6,
    'k': 7,
    'l': 8,
    'q': 9,
    'w': 10,
    'e': 11,
    'r': 12
  };

  let k = key.toLowerCase();

  if (mapa[k] !== undefined) {
    objetos.push({
      img: mapa[k],
      x: random(width),
      y: random(height)
    });

    activa = objetos.length - 1; // la última es la activa
  }
}

// ─────────────────────────────
// MOVER SOLO LA IMAGEN ACTIVA
// ─────────────────────────────
function moverActiva() {
  if (activa === -1) return;

  if (keyIsDown(LEFT_ARROW))  objetos[activa].x -= velocidad;
  if (keyIsDown(RIGHT_ARROW)) objetos[activa].x += velocidad;
  if (keyIsDown(UP_ARROW))    objetos[activa].y -= velocidad;
  if (keyIsDown(DOWN_ARROW))  objetos[activa].y += velocidad;
}
