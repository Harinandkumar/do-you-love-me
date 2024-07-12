//click yes btn
function clickYesButton() {
    alert('I love you too ! 💖');
}

// Move button on hover
document.getElementById('btn2').onmouseover = function() {
    let x = Math.random() * (window.innerWidth - this.clientWidth); // Adjusted to prevent overflow
    let y = Math.random() * (window.innerHeight - this.clientHeight); // Adjusted to prevent overflow

    this.style.position = 'absolute'; // Set position to absolute for precise control
    this.style.left = x + 'px';
    this.style.top = y + 'px';
};
