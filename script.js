const hoverButton = document.getElementById('hover-button');
const mouseMessage = document.getElementById('mouse-message');

hoverButton.addEventListener('mouseenter', () => {
    mouseMessage.textContent = 'Mouse is over the button!';
    mouseMessage.style.color = 'brown';
});

hoverButton.addEventListener('mouseleave', () => {
    mouseMessage.textContent = 'Mouse is outside the button!';
    mouseMessage.style.color = 'beige';
});
