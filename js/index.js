const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

let x = 100;
let y = 100;

const circle = function (x, y, radius, fillCircle) {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2, false);

  if (fillCircle) {
    ctx.fill();
  } else {
    ctx.stroke();
  }
};

const drawBee = function (x, y) {
  ctx.lineWidth = 2;
  ctx.strokeStyle = "Black";
  ctx.fillStyle = "Gold";

  circle(x, y, 8, true);
  circle(x, y, 8, false);
  circle(x - 5, y - 11, 5, false);
  circle(x + 5, y - 11, 5, false);
  circle(x - 2, y - 1, 5, false);
  circle(x + 2, y - 1, 5, false);
};

const update = function (coordinate) {
  const offset = Math.random() * 4 - 2;
  console.log(offset);

  coordinate += offset;

  if (coordinate > 250) {
    coordinate = 250;
  }
  if (coordinate < 0) {
    coordinate = 0;
  }

  return coordinate;
};

setInterval(() => {
  ctx.clearRect(0, 0, 200, 200);
  drawBee(x, y);
  x = update(x);
  y = update(y);
  ctx.strokeRect(0, 0, 200, 200);
}, 50);
