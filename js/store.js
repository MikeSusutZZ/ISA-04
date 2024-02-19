import strings from '../lang/en/strings.js';


// Build HTML
document.addEventListener('DOMContentLoaded', () => {
    const form = document.createElement('form');
    form.setAttribute('id', 'definitionForm');

    const inputWord = document.createElement('input');
    inputWord.setAttribute('type', 'text');
    inputWord.setAttribute('id', 'word');
    inputWord.setAttribute('placeholder', strings.placeholderWord); // Using string from strings file

    const textareaDefinition = document.createElement('textarea');
    textareaDefinition.setAttribute('id', 'definition');
    textareaDefinition.setAttribute('placeholder', strings.placeholderDefinition); // Using string from strings file

    const submitButton = document.createElement('button');
    submitButton.setAttribute('type', 'submit');
    submitButton.textContent = strings.submitButtonText; // Using string from strings file

    form.appendChild(inputWord);
    form.appendChild(textareaDefinition);
    form.appendChild(submitButton);

    document.body.appendChild(form);
});


document.getElementById('definitionForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const word = document.getElementById('word').value;
    const definition = document.getElementById('definition').value;

    fetch('https://comp4537-lab-4.vercel.app/api/definitions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({ word, definition }),
    })
    .then(response => response.json())
    .then(data => {
        alert(`${data.error}`);
    })
    .catch(error => console.error('Error:', error));
});
