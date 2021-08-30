var c = document.getElementById("planet-model");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(150, 150, 90, 0, 2 * Math.PI, false);
ctx.fillStyle = 'green';
ctx.fill();
ctx.lineWidth = 5;
ctx.strokeStyle = '#003300';
ctx.stroke();