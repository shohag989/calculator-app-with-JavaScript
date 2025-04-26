// Get the input box
let answer = document.getElementById('answer');

// Get all the buttons
let buttons = document.querySelectorAll('button');

// Temporary string to store input
let inputValue = "";

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const btnText = e.target.innerText;

        // Add click effect
        button.classList.add('clicked');
        setTimeout(() => {
            button.classList.remove('clicked');
        }, 150); // effect lasts 150ms

        if (btnText === 'AC') {
            inputValue = "";
            answer.value = "";
        } else if (btnText === 'DEL') {
            inputValue = inputValue.slice(0, -1);
            answer.value = inputValue;
        } else if (btnText === '=') {
            try {
                inputValue = eval(inputValue).toString();
                answer.value = inputValue;
            } catch {
                answer.value = "Error";
                inputValue = "";
            }
        } else {
            inputValue += btnText;
            answer.value = inputValue;
        }
    });
});
