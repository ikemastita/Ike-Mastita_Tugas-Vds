let bird1X = 150; // Koordinat X untuk burung yang diam
let bird1Y = 250; // Koordinat Y untuk burung yang diam
let bird2X = 250; // Koordinat X untuk burung yang bergerak
let bird2Y = 150; // Koordinat Y untuk burung yang bergerak
let isBird2Moving = true; // Status pergerakan burung yang bergerak

function setup() {
    createCanvas(400, 300);
}

function draw() {
    background(220);
    drawBird(bird1X, bird1Y, false); // Gambar burung yang diam
    if (isBird2Moving) {
        bird2X += 1; // Atur kecepatan bergerak burung di sini
        // Reset posisi burung jika mencapai batas kanan layar
        if (bird2X > width) {
            bird2X = 0;
        }
    }
    drawBird(bird2X, bird2Y, true); // Gambar burung yang bergerak
}

function drawBird(x, y, isMoving) {
    // Gambar burung
    fill(255, 255, 0); // Warna kuning
    ellipse(x, y, 50, 30); // Tubuh
    triangle(x - 25, y, x - 50, y - 15, x - 50, y + 15); // Sayap kiri
    triangle(x + 25, y, x + 50, y - 15, x + 50, y + 15); // Sayap kanan
    fill(0); // Warna hitam
    ellipse(x - 15, y - 5, 10, 10); // Mata kiri
    ellipse(x + 15, y - 5, 10, 10); // Mata kanan
}

function keyPressed() {
    if (keyCode === 32) { // Tombol spasi
        isBird2Moving = !isBird2Moving; // Toggle antara bergerak dan diam
    }
}