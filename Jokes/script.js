const jokeEl = document.getElementById('joke');
const jokerBtn = document.getElementById('jokeBtn');


jokerBtn.addEventListener('click', generateJoke);

generateJoke();

// Usando async e await...
async function generateJoke() {
    const config = {
        headers: {
            Accept: 'application/json',
        },
    }

    const res = await fetch('https://icanhazdadjoke.com/', config);

    const data = await res.json();
    jokeEl.innerHTML = data.joke;
}

// Usando -> .then...
/*
function generateJoke() {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    }

    fetch('https://icanhazdadjoke.com/', config).then((res) => res.json())
    .then((data) => {
        jokeEl.innerHTML = data.joke;
    });
}
*/
