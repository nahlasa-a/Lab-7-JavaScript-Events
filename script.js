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

const demoForm = document.getElementById('demo-form');
const formMessage = document.getElementById('form-message');

demoForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const formInput = document.getElementById('form-input');
    const inputValue = formInput.value.trim();
    if (inputValue) {
        formMessage.textContent = `Form submitted.: ${inputValue}`;
        formMessage.style.color = 'green';
    } else {
        formMessage.textContent = 'Please enter a name before submitting.';
        formMessage.style.color = 'red';
    }

    formInput.value = '';
    setTimeout(() => {
        formMessage.textContent = '';
    }, 2000);
});