const dustThrottle = { last: 0, interval: 16 };

document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    const images = document.querySelectorAll('.galeria img');

    images.forEach((img, index) => {
        const depth = (index + 1) * 0.02; // small movement for depth effect
        const x = (mouseX - 0.5) * depth * window.innerWidth * -1;
        const y = (mouseY - 0.5) * depth * window.innerHeight * -1;
        img.style.transform = `translate(${x}px, ${y}px)`;
    });

    createDust(e.clientX, e.clientY);
});

function createDust(x, y) {
    const now = performance.now();
    if (now - dustThrottle.last < dustThrottle.interval) return;
    dustThrottle.last = now;

    const dot = document.createElement('span');
    dot.className = 'mouse-dust';
    const size = 2 + Math.random() * 4;
    dot.style.width = `${size}px`;
    dot.style.height = `${size}px`;
    dot.style.opacity = `${0.3 + Math.random() * 0.4}`;
    dot.style.left = `${x}px`;
    dot.style.top = `${y}px`;

    document.body.appendChild(dot);

    requestAnimationFrame(() => {
        const driftX = (Math.random() - 0.5) * 40;
        const driftY = (Math.random() - 0.5) * 40;
        dot.style.transform = `translate(calc(-50% + ${driftX}px), calc(-50% + ${driftY}px))`;
        dot.style.opacity = '0';
    });

    setTimeout(() => {
        dot.remove();
    }, 700);
}