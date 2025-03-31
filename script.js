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

const keyboardInput = document.getElementById('keyboard-input');
const keyboardMessage = document.getElementById('keyboard-message');
keyboardInput.addEventListener('keyup', (event) => {
    let key = event.key;
    if (keyPressed === '') {
        keyPressed = 'Space';
    } else if (keyPressed === 'Enter') {
        keyPressed = 'Enter key';
    }

    keyboardMessage.textContent = `You pressed: ${keyPressed}`;
    keyboardMessage.style.color = 'beige';
    setTimeout(() => {
        keyboardMessage.style.color = 'light brown';
    }
    , 2000);
});