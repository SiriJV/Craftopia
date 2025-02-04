import './home.scss';

async function fetchRotatedHeadImage(username: string) {
    const response = await fetch(`/api/skins/${username}/head/-35.0/-45/10/json`);
    const data = await response.json();
    return data.head;
}

async function initializePigHead() {
    const username = "TechnoBlade";
    
    const imageUrl = await fetchRotatedHeadImage(username);
    
    const pigHead = document.getElementById('pig-head') as HTMLImageElement;
    pigHead.src = "data:image/jpeg;base64," + imageUrl;

    pigHead.addEventListener("click", renderUsernameWindow);
}

initializePigHead();

function renderUsernameWindow() {
    const body = document.querySelector('body');
    const inputWrapper = document.createElement('section') as HTMLElement;
    inputWrapper.id = "username-window";
    body?.appendChild(inputWrapper);

    const inputUsernameTitle = document.createElement('p');
    inputUsernameTitle.innerHTML = "Enter an existing Minecraft username:";
    inputWrapper.appendChild(inputUsernameTitle);

    const inputUsername = document.createElement('input');
    inputUsername.type = "text";
    inputUsername.id = "input-username";
    inputUsername.placeholder = "johndoe...";
    inputWrapper.appendChild(inputUsername);

    const inputUsernameAlert = document.createElement('div');
    inputUsernameAlert.id = "input-username-alert";
    inputUsernameAlert.innerHTML = "Username not found. Please try again!";
    inputUsernameAlert.style.display = "none";
    inputWrapper.appendChild(inputUsernameAlert);

    const inputUsernameButton = document.createElement('button');
    inputUsernameButton.id = "input-username-button";
    inputUsernameButton.innerHTML = "Submit";
    inputWrapper.appendChild(inputUsernameButton);
    inputUsernameButton.addEventListener("click", setHeadImage);
}

async function fetchHeadImage(username: string) {
    const response = await fetch(`/api/skins/${username}/head/0.0/0/10/json`);
    const data = await response.json();
    return data.head;
}

async function setHeadImage() {
    const inputUsername = document.getElementById('input-username') as HTMLInputElement;
    const username = inputUsername.value;

    if (username) {
        const imageUrl = await fetchHeadImage(username);
        if (imageUrl) {
            const pigHead = document.getElementById("pig-head") as HTMLImageElement;
            pigHead.src = "data:image/jpeg;base64," + imageUrl;

            const usernameWindow = document.getElementById('username-window') as HTMLElement;
            usernameWindow.remove();
        }
    } else {
        const alert = document.getElementById('input-username-alert') as HTMLElement;
        alert.style.display = "block";
    }
}