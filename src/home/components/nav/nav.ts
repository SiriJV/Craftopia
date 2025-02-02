import './nav.scss';
import '../../../home/home.scss';
import { randomizeTextColors } from '../../../helpers/helpers';
import { blackBlock } from '../../../minigames/gamepage';


///////////////////////////////////////
//////////// Info Button //////////////
///////////////////////////////////////

const infoButton = document.getElementById('info-button') as HTMLButtonElement;

const renderInfoWindow = (): void => {
    const element = document.createElement('article') as HTMLElement;
    element.id = "info-window";
    const body = document.querySelector('body') as HTMLElement;
    body.appendChild(element);
    element.style.display = "none";
    
    element.innerHTML = `
    <h2>Welcome to Craftopia!</h2>
    <p>Not sure where to start? Just type the name of a block, item, mob, or biome in the search bar!</p>
    <p>Need a break from all that knowledge? Check out the fun minigames section!</p>
    <p>Want to contribute? Visit the <a href="https://github.com/SiriJV/Craftopia" target="_blank">GitHub repository</a> to report bugs, 
    suggest features, or submit pull requests. Contributions are welcome and appreciated!</p>
    `;
}
// randomizeTextColors();

infoButton.addEventListener('click', async (e) => {
    renderInfoWindow();
    
    const infoWindow = document.getElementById('info-window') as HTMLElement;
    if (infoWindow.style.display === "none") {
        infoWindow.style.display = "block";
        blackBlock.style.display = "block"
    } else {
        infoWindow.style.display = "none";
        blackBlock.style.display = "none";
    }
});

///////////////////////////////////////
/////////// Jukebox Button ////////////
///////////////////////////////////////

const jukeboxButton = document.getElementById('jukebox-button') as HTMLButtonElement;

const renderJukeboxWindow = (): void => {
    const element = document.createElement('article') as HTMLElement;
    element.id = "jukebox-window";
    const body = document.querySelector('body') as HTMLElement;
    body.appendChild(element);
    element.style.display = "none";
    
    element.innerHTML = `
    <h2 class="color-change">Jukebox</h2>
    <p>Choose a disc to play!</p>
    <section>
        <div class="disc-container">
            <img src="https://minecraft-api.vercel.app/images/items/music_disc_11.png" alt="C418 - 11">
            <p class="disc-info">C418 - 11</p>
        </div>
        <div class="disc-container">
            <img src="https://minecraft-api.vercel.app/images/items/music_disc_13.png" alt="C418 - 13">
            <p class="disc-info">C418 - 13</p>
        </div>
        <div class="disc-container">
            <img src="https://minecraft-api.vercel.app/images/items/music_disc_blocks.png" alt="C418 - C418 - Blocks">
            <p class="disc-info">C418 - Blocks</p>
        </div>
        <div class="disc-container">
            <img src="https://minecraft-api.vercel.app/images/items/music_disc_cat.png" alt="C418 - Cat">
            <p class="disc-info">C418 - Cat</p>
        </div>
        <div class="disc-container">
            <img src="https://minecraft-api.vercel.app/images/items/music_disc_chirp.png" alt="C418 - Chirp">
            <p class="disc-info">C418 - Chirp</p>
        </div>
        <div class="disc-container">
            <img src="https://minecraft-api.vercel.app/images/items/music_disc_far.png" alt="C418 - Far">
            <p class="disc-info">C418 - Far</p>
        </div>
        <div class="disc-container">
            <img src="https://minecraft-api.vercel.app/images/items/music_disc_mall.png" alt="C418 - Mall">
            <p class="disc-info">C418 - Mall</p>
        </div>
        <div class="disc-container">
            <img src="https://minecraft-api.vercel.app/images/items/music_disc_mellohi.png" alt="C418 - Mellohi">
            <p class="disc-info">C418 - Mellohi</p>
        </div>
        <div class="disc-container">
            <img src="https://minecraft-api.vercel.app/images/items/music_disc_stal.png" alt="C418 - Stal">
            <p class="disc-info">C418 - Stal</p>
        </div>
        <div class="disc-container">
            <img src="https://minecraft-api.vercel.app/images/items/music_disc_strad.png" alt="C418 - Strad">
            <p class="disc-info">C418 - Strad</p>
        </div>
        <div class="disc-container">
            <img src="https://minecraft-api.vercel.app/images/items/music_disc_wait.png" alt="C418 - Wait">
            <p class="disc-info">C418 - Wait</p>
        </div>
        <div class="disc-container">
            <img src="https://minecraft-api.vercel.app/images/items/music_disc_ward.png" alt="C418 - Ward">
            <p class="disc-info">C418 - Ward</p>
        </div>
        <div class="disc-container">
            <img src="https://minecraft-api.vercel.app/images/items/music_disc_pigstep.png" alt="C418 - Pigstep">
            <p class="disc-info">Lena Raine - Pigstep</p>
        </div>
        <div class="disc-container">
            <img src="https://minecraft-api.vercel.app/images/items/music_disc_otherside.png" alt="C418 - Otherside">
            <p class="disc-info">Lena Raine - Otherside</p>
        </div>
    </section>
    <article>
        <button id="playButton">Play</button>
        <input type="range" id="audioSlider" min="0" max="100" value="0" step="1">
        <audio id="audio" src="../../../../../public/music/Otherside.ogg"></audio>
    </article>
    `;
}

jukeboxButton.addEventListener('click', async (e) => {
    renderJukeboxWindow();
    
    const jukeboxWindow = document.getElementById('jukebox-window') as HTMLElement;
    if (jukeboxWindow.style.display === "none") {
        jukeboxWindow.style.display = "block";
    } else {
        jukeboxWindow.style.display = "none";
    }
});



///////////////////////////////////////
/////////// Jukebox Player ////////////
///////////////////////////////////////

const playButton = document.getElementById('playButton') as HTMLButtonElement;
const audio = document.getElementById('audio') as HTMLAudioElement;
const audioSlider = document.getElementById('audioSlider') as HTMLInputElement;

playButton.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playButton.innerHTML = 'Pause';
    } else {
        audio.pause();
        playButton.innerHTML = 'Play';
    }
});

audio.addEventListener('timeupdate', () => {
    if (audio.duration > 0) { 
        const progress = (audio.currentTime / audio.duration) * 100;
        audioSlider.value = progress.toString();
    }
});

audioSlider.addEventListener('input', () => {
    const newTime = (parseFloat(audioSlider.value) / 100) * (audio.duration as number);
    audio.currentTime = newTime;
});

