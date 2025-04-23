
function updateTimer() {
    const startDate = new Date("2024-02-24T00:00:00");
    const now = new Date();
    const diff = now - startDate;

    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
    const years = Math.floor(months / 12);

    document.getElementById("timer").textContent =
        `${years} anos, ${months % 12} meses, ${days % 30} dias, ${hours % 24} horas, ${minutes % 60} minutos e ${seconds % 60} segundos`;
}

setInterval(updateTimer, 1000);
updateTimer();

// Corações animados no canvas
const canvas = document.getElementById("heartCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let hearts = [];

function createHeart() {
    return {
        x: Math.random() * canvas.width,
        y: canvas.height + Math.random() * 100,
        size: Math.random() * 10 + 10,
        speed: Math.random() * 1 + 0.5,
        alpha: Math.random() * 0.5 + 0.5
    };
}

function drawHeart(h) {
    ctx.globalAlpha = h.alpha;
    ctx.fillStyle = "#ff5e99";
    ctx.beginPath();
    ctx.moveTo(h.x, h.y);
    ctx.bezierCurveTo(h.x - h.size / 2, h.y - h.size / 2, h.x - h.size, h.y + h.size / 3, h.x, h.y + h.size);
    ctx.bezierCurveTo(h.x + h.size, h.y + h.size / 3, h.x + h.size / 2, h.y - h.size / 2, h.x, h.y);
    ctx.fill();
}

function animateHearts() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    hearts.forEach((h, index) => {
        h.y -= h.speed;
        drawHeart(h);
        if (h.y + h.size < 0) hearts[index] = createHeart();
    });
    requestAnimationFrame(animateHearts);
}

for (let i = 0; i < 100; i++) hearts.push(createHeart());
animateHearts();

// Música (sem áudio por enquanto)
document.getElementById("playButton").addEventListener("click", () => {
    alert("Música ainda será adicionada quando enviada!");
});
