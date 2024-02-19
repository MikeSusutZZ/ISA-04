document.getElementById('definitionForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const word = document.getElementById('word').value;
    const definition = document.getElementById('definition').value;

    fetch('https://comp4537-lab-4.vercel.app/api/definitions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ word, definition }),
    })
    .then(response => response.json())
    .then(data => {
        alert(`Request #${data.requestNumber}, ${data.message}`);
    })
    .catch(error => console.error('Error:', error));
});
