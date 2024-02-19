//ALL FILES IN THIS PROJECT ARE CHAT GPT ASSISTED
//import strings from '../lang/en/strings.js';
console.log("index loaded")

document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;

    // Welcome Heading
    const heading = document.createElement('h1');
    heading.textContent = strings.welcomeText; // From strings file
    body.appendChild(heading);

    // Container div for buttons
    const buttonsDiv = document.createElement('div');
    body.appendChild(buttonsDiv);

    // Create Definition Button
    const createButton = document.createElement('button');
    createButton.classList.add('button');
    createButton.textContent = strings.createButtonText; // From strings file
    createButton.onclick = () => location.href = '../html/store.html';
    buttonsDiv.appendChild(createButton);

    // Search Definitions Button
    const searchButton = document.createElement('button');
    searchButton.classList.add('button');
    searchButton.textContent = strings.searchButtonText; // Adjusted to reuse existing string naming
    searchButton.onclick = () => location.href = '../html/search.html';
    buttonsDiv.appendChild(searchButton);
});
