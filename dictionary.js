const serverUrl = 'https://yourDomainName2.wyz/api/definitions';

function storeDefinition() {
    const word = document.getElementById('word').value;
    const definition = document.getElementById('definition').value;

    if (!word || !definition) {
        alert('Both word and definition are required.');
        return;
    }

    fetch(serverUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ word, definition }),
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('response').innerText = data.message;
    })
    .catch(error => console.error('Error:', error));
}

function searchDefinition() {
    const word = document.getElementById('searchWord').value;

    if (!word) {
        alert('Word is required.');
        return;
    }

    fetch(`${serverUrl}?word=${word}`)
    .then(response => response.json())
    .then(data => {
        if (data.definition) {
            document.getElementById('searchResponse').innerText = `${word}: ${data.definition}`;
        } else {
            document.getElementById('searchResponse').innerText = data.message;
        }
    })
    .catch(error => console.error('Error:', error));
}
