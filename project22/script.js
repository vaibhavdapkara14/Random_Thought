const URL = 'https://qapi.vercel.app/api/random';

const Quotes = document.querySelector('#quotes');
const Author = document.querySelector('#author');
const btn = document.querySelector('#Button');


let data
async function fetchRandomuotes() {
    try {
        console.log("getting data.....");
        let response = await fetch(URL);
        data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error Fetch the quotes', error);
    }

    Quotes.innerHTML = `${data.quote}`;
    Author.innerHTML = `--${data.author}`

}




