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

const focusInput = document.getElementById('focus-input'); 
const focusMessage = document.getElementById('focus-message');  

focusInput.addEventListener('focus', () => { 
    focusMessage.textContent = 'Ready to type...'; 
    focusMessage.style.backgroundColor = '#e8f4fc'; 
    focusInput.style.borderColor = '#3498db'; 
}); 

focusInput.addEventListener('blur', () => { 
    const inputValue = focusInput.value.trim(); 
    if (inputValue) { 
        focusMessage.textContent = `Input field lost focus with text: "${inputValue}"`; 
    } else { 
        focusMessage.textContent = 'No text entered...'; 
    } 
    focusMessage.style.backgroundColor = '#f5f5f5'; 
    focusInput.style.borderColor = '#ddd'; 
}); 

const buttonContainer = document.getElementById('button-container'); 
const delegationMessage = document.getElementById('delegation-message'); 

buttonContainer.addEventListener('click', (event) => { 
    if (event.target.tagName === 'BUTTON') { 

        const buttonText = event.target.textContent;

        delegationMessage.textContent = `Clicked: ${buttonText}`; 
        delegationMessage.style.backgroundColor = '#e8f4fc'; 

        event.target.style.backgroundColor = '#darkorange'; 

        setTimeout(() => { 
            event.target.style.backgroundColor = '#darkred'; 
            delegationMessage.style.backgroundColor = '#lightred'; 
        }, 1000); 
    } 
}); 

const buttonData = ['Button 1', 'Button 2', 'Button 3']; 

buttonData.forEach(text => { 
    const newButton = document.createElement('button'); 
    newButton.className = 'delegated-btn'; 
    newButton.textContent = text; 
    buttonContainer.appendChild(newButton); 
}); 