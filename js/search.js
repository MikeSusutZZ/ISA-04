//import strings from '../lang/en/strings.js';


document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;

    // Heading
    const heading = document.createElement('h1');
    heading.textContent = strings.headingText; // Assuming strings are imported or defined earlier
    body.appendChild(heading);

    // Input for search word
    const inputSearchWord = document.createElement('input');
    inputSearchWord.type = 'text';
    inputSearchWord.id = 'searchWord';
    inputSearchWord.placeholder = strings.placeholderSearchWord; // Using string from strings file
    body.appendChild(inputSearchWord);

    // Search button
    const searchButton = document.createElement('button');
    searchButton.textContent = strings.searchButtonText; // Using string from strings file
    searchButton.onclick = searchDefinition; // Assuming searchDefinition function is defined elsewhere
    body.appendChild(searchButton);

    // Result div
    const resultDiv = document.createElement('div');
    resultDiv.id = 'result';
    body.appendChild(resultDiv);
});


// Ensure searchDefinition function is defined globally or imported if modular JS is used
function searchDefinition() {
    // Functionality to search for a definition
    console.log('Search function triggered');
}


function searchDefinition() {
    const word = document.getElementById('searchWord').value;
    fetch(`https://comp4537-lab-4.vercel.app/api/definitions?word=${word}`)
    .then(response => response.json())
    .then(data => {
        if (data.definition) {
            document.getElementById('result').textContent = `Definition of ${word}: ${data.definition}`;
        } else {
            document.getElementById('result').textContent = `${data.error}`;
        }
    })
    .catch(error => console.error('Error:', error));
}
