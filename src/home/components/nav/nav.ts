import './nav.scss';
import '../../../home/home.scss';
import { blackBlock } from '../../../minigames/gamepage';
import { uppercaseFirstLetter } from '../../../helpers/helpers';


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

const discs = ["11", "13", "blocks", "cat", "chirp", "far", "mall", "mellohi", "stal", "strad", "wait", "ward", "pigstep", "otherside"];

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
        <div class="disc-container" id="11">
            <img src="https://minecraft-api.vercel.app/images/items/music_disc_11.png" alt="11" class="disc">
            <p class="disc-info">C418 - 11</p>
        </div>
        <div class="disc-container" id="13">
            <img src="https://minecraft-api.vercel.app/images/items/music_disc_13.png" alt="13" class="disc">
            <p class="disc-info">C418 - 13</p>
        </div>
        <div class="disc-container" id="blocks">
            <img src="https://minecraft-api.vercel.app/images/items/music_disc_blocks.png" alt="Blocks" class="disc">
            <p class="disc-info">C418 - Blocks</p>
            </div>
            <div class="disc-container" id="cat">
            <img src="https://minecraft-api.vercel.app/images/items/music_disc_cat.png" alt="Cat" class="disc">
            <p class="disc-info">C418 - Cat</p>
            </div>
        <div class="disc-container" id="chirp">
            <img src="https://minecraft-api.vercel.app/images/items/music_disc_chirp.png" alt="Chirp" class="disc">
            <p class="disc-info">C418 - Chirp</p>
            </div>
            <div class="disc-container" id="far">
            <img src="https://minecraft-api.vercel.app/images/items/music_disc_far.png" alt="Far" class="disc">
            <p class="disc-info">C418 - Far</p>
            </div>
            <div class="disc-container" id="mall">
            <img src="https://minecraft-api.vercel.app/images/items/music_disc_mall.png" alt="Mall" class="disc">
            <p class="disc-info">C418 - Mall</p>
            </div>
            <div class="disc-container" id="mellohi">
            <img src="https://minecraft-api.vercel.app/images/items/music_disc_mellohi.png" alt="Mellohi" class="disc">
            <p class="disc-info">C418 - Mellohi</p>
        </div>
        <div class="disc-container" id="stal">
            <img src="https://minecraft-api.vercel.app/images/items/music_disc_stal.png" alt="Stal" class="disc">
            <p class="disc-info">C418 - Stal</p>
        </div>
        <div class="disc-container" id="strad">
            <img src="https://minecraft-api.vercel.app/images/items/music_disc_strad.png" alt="Strad" class="disc">
            <p class="disc-info">C418 - Strad</p>
        </div>
        <div class="disc-container" id="wait">
        <img src="https://minecraft-api.vercel.app/images/items/music_disc_wait.png" alt="Wait" class="disc">
        <p class="disc-info">C418 - Wait</p>
        </div>
        <div class="disc-container" id="ward">
        <img src="https://minecraft-api.vercel.app/images/items/music_disc_ward.png" alt="Ward" class="disc">
        <p class="disc-info">C418 - Ward</p>
        </div>
        <div class="disc-container" id="pigstep">
        <img src="https://minecraft-api.vercel.app/images/items/music_disc_pigstep.png" alt="Pigstep" class="disc">
        <p class="disc-info">Lena Raine - Pigstep</p>
        </div>
        <div class="disc-container" id="otherside">
        <img src="https://minecraft-api.vercel.app/images/items/music_disc_otherside.png" alt="Otherside" class="disc">
        <p class="disc-info">Lena Raine - Otherside</p>
        </div>
        </section>
        <article>
        <p id="chosen-disc-name"></p>
        <button id="playButton">Play</button>
        <audio id="audio" src="../../../../../public/music/otherside.mp3"></audio>
        </article>
        `;
        const playButton = document.getElementById('playButton') as HTMLButtonElement;
        const audio = document.getElementById('audio') as HTMLAudioElement;
        
        playButton.addEventListener('click', () => {
            if (audio.paused) {
                audio.currentTime = 0;
                audio.play();
                playButton.innerHTML = 'Pause';
            } else {
                audio.pause();
                playButton.innerHTML = 'Play';
            }
        });

        discs.forEach(discName => {
            const discContainer = document.getElementById(discName) as HTMLElement;
            discContainer.addEventListener('click', () => {
                const chosenDisc = document.getElementById('chosen-disc-name') as HTMLElement;
                chosenDisc.innerHTML = `${uppercaseFirstLetter(discName)}`;
                audio.src = `../../../../../public/music/${discName}.mp3`;
        });
    });
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