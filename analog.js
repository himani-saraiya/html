var canvas = document.getElementById("clock");
var ctx = canvas.getContext("2d");
var centerX = canvas.width / 2;
var centerY = canvas.height / 2;
function drawClock() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    ctx.beginPath();
    ctx.arc(centerX, centerY, 80, 0, 2 * Math.PI);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.lineWidth = 2;
    ctx.strokeStyle = "black";
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(centerX + Math.sin(hours * (Math.PI / 6)) * 50, centerY - Math.cos(hours * (Math.PI / 6)) * 50);
    ctx.lineWidth = 4;
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(centerX + Math.sin(minutes * (Math.PI / 30)) * 70, centerY - Math.cos(minutes * (Math.PI / 30)) * 70);
    ctx.lineWidth = 3;
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(centerX + Math.sin(seconds * (Math.PI / 30)) * 80, centerY - Math.cos(seconds * (Math.PI / 30)) * 80);
    ctx.lineWidth = 2;
    ctx.strokeStyle = "red";
    ctx.stroke();
}
setInterval(drawClock, 1000);