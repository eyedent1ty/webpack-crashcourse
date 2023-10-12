import generateJoke from './generate-joke';
import './styles/main.scss';
import laughing from './assets/laughing.svg';

const laughImg = document.getElementById('laughImg');
const jokeBtn = document.getElementById('jokeBtn');

laughImg.setAttribute('src', laughing);
laughImg.style.width = '200px';

window.addEventListener('load', generateJoke);

jokeBtn.addEventListener('click', generateJoke);
