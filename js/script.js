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
});