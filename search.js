function searchDefinition() {
    const word = document.getElementById('searchWord').value;
    fetch(`https://comp4537-lab-4.vercel.app/api/definitions?word=${word}`)
    .then(response => response.json())
    .then(data => {
        if (data.definition) {
            document.getElementById('result').textContent = `Definition of ${word}: ${data.definition}`;
        } else {
            document.getElementById('result').textContent = `Request #${data.requestNumber}, ${data.message}`;
        }
    })
    .catch(error => console.error('Error:', error));
}
