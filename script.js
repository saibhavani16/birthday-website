// Customize with your friend's name
function customizeName(friendName) {
    document.getElementById('birthday-title').textContent = `Happy Birthday, ${friendName}!`;
}

// Call this with your friend's name
customizeName('Friend');

// Create floating balloons
function createBalloon() {
    const colors = ['red', 'blue', 'yellow', 'green', 'pink', 'purple'];
    const balloon = document.createElement('div');
    balloon.className = `balloon ${colors[Math.floor(Math.random() * colors.length)]}`;
    balloon.style.animationDelay = Math.random() * 2 + 's';
    document.getElementById('balloons').appendChild(balloon);
    
    setTimeout(() => balloon.remove(), 8000);
}

// Create confetti
function createConfetti() {
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#ffa07a', '#98d8c8', '#f7dc6f'];
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animation = `confetti-fall ${Math.random() * 3 + 2}s ease-in forwards`;
        document.getElementById('confetti-container').appendChild(confetti);
        
        setTimeout(() => confetti.remove(), 5000);
    }
}

// Celebrate function
function celebrate() {
    // Create balloons
    for (let i = 0; i < 6; i++) {
        createBalloon();
    }
    
    // Create confetti
    createConfetti();
    
    // Play sound
    playSound();
}

// Simple beep sound function
function playSound() {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.value = 800;
    oscillator.type = 'sine';
    
    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.1);
}

// Auto-launch balloons every 2 seconds
setInterval(() => {
    if (Math.random() > 0.7) {
        createBalloon();
    }
}, 2000);
