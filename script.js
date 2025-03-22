const canvas = document.getElementById("florCanvas");
const ctx = canvas.getContext("2d");
let florX = canvas.width / 2;
let florDirection = 1;

function dibujarPetalo(x, y, rotacion) {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(rotacion);
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.bezierCurveTo(30, -50, 80, -50, 100, 0);
    ctx.bezierCurveTo(80, 50, 30, 50, 0, 0);
    ctx.fillStyle = "yellow";
    ctx.fill();
    ctx.stroke();
    ctx.restore();
}

function dibujarFlor(x) {
    const centroY = 200;
    
    // Tallo fijo
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2, centroY + 20);
    ctx.lineTo(canvas.width / 2, 350);
    ctx.strokeStyle = "green";
    ctx.lineWidth = 5;
    ctx.stroke();
    
    // Pétalos
    for (let i = 0; i < 6; i++) {
        dibujarPetalo(x, centroY, (Math.PI / 3) * i);
    }
    
    // Centro de la flor
    ctx.beginPath();
    ctx.arc(x, centroY, 20, 0, Math.PI * 2);
    ctx.fillStyle = "orange";
    ctx.fill();
    
    // Corazón sobre la flor
    dibujarCorazon(x, centroY - 160);
}

function dibujarCorazon(x, y) {
    ctx.save();
    ctx.translate(x, y);
    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.bezierCurveTo(-20, -20, -40, 10, 0, 40);
    ctx.bezierCurveTo(40, 10, 20, -20, 0, 0);
    ctx.fill();
    ctx.restore();
}

function animar() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    dibujarFlor(florX);

    florX += florDirection * 0.5;
    if (florX >= canvas.width / 2 + 10 || florX <= canvas.width / 2 - 10) {
        florDirection *= -1;
    }

    requestAnimationFrame(animar);
}

window.onload = function() {
    animar();
};
