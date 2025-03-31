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
const keyMessage = document.getElementById('key-message');
keyboardInput.addEventListener('keyup', (event) => {
    let key = event.key;
    if (key === '') {
        key = 'Space';
    } else if (key === 'Enter') { 
        key = 'Enter key';
    }

    keyMessage.textContent = `You pressed: ${keyPressed}`;
    keyMessage.style.color = 'beige';
    setTimeout(() => {
        keyboardMessage.style.color = 'brown';
    }
    , 2000);
});

const demoForm = document.getElementById('demo-form');
const formMessage = document.getElementById('form-message');

demoForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const formInput = document.getElementById('name');
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

        event.target.style.backgroundColor = 'gray';
        event.target.style.color = 'white'; 

        setTimeout(() => { 
            event.target.style.backgroundColor = 'purple'; 
            delegationMessage.style.backgroundColor = 'orange'; 
        }, 1000); 
    } 
}); 