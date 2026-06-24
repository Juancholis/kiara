document.addEventListener('DOMContentLoaded', () => {
    // Message rotation
    const messages = document.querySelectorAll('.message');
    const nextBtn = document.getElementById('nextBtn');
    let currentIndex = 0;

    nextBtn.addEventListener('click', () => {
        // Fade out current
        messages[currentIndex].classList.remove('active');
        
        // Move to next
        currentIndex = (currentIndex + 1) % messages.length;
        
        // Fade in next (using a small timeout for smoother transition)
        setTimeout(() => {
            messages[currentIndex].classList.add('active');
        }, 100);
    });

    // Fireflies generation
    const particlesContainer = document.getElementById('particles');
    const particleCount = 40; // Number of concurrent fireflies

    for (let i = 0; i < particleCount; i++) {
        setTimeout(createFirefly, Math.random() * 3000); // Stagger initial creation
    }

    function createFirefly() {
        const firefly = document.createElement('div');
        firefly.classList.add('firefly');
        
        // Random properties
        const size = Math.random() * 5 + 2; // 2px to 7px
        const posX = Math.random() * 100; // 0% to 100vw
        const posY = Math.random() * 100; // 0% to 100vh
        const duration = Math.random() * 5 + 4; // 4s to 9s
        
        // Random color variation (yellow to light orange)
        const hues = [60, 50, 40];
        const hue = hues[Math.floor(Math.random() * hues.length)];
        const color = `hsl(${hue}, 100%, 80%)`;

        firefly.style.width = `${size}px`;
        firefly.style.height = `${size}px`;
        firefly.style.left = `${posX}vw`;
        firefly.style.top = `${posY}vh`;
        firefly.style.background = color;
        firefly.style.boxShadow = `0 0 ${size * 2}px ${color}, 0 0 ${size * 4}px ${color}`;
        firefly.style.setProperty('--duration', `${duration}s`);

        particlesContainer.appendChild(firefly);

        // Remove and recreate
        setTimeout(() => {
            firefly.remove();
            createFirefly();
        }, duration * 1000);
    }
});
