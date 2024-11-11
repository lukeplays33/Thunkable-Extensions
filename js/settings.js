import { PichaiUX } from 'https://lukeplays33.github.io/Pichai-UX/imports.js';

import { settings } from '../assets/jsonFiles/supportSettings.js';

let about = document.getElementById('What is Mod Docs?');
let donate = document.getElementById('Donate to Mod Docs!');

about.innerHTML = about.innerHTML.replace('What is Mod Docs?',settings.about.message);
donate.innerHTML = donate.innerHTML.replace('What is Mod Docs?',settings.donations.message);

if(!settings.about.message) {
    about.remove();
}

if(!settings.donations.message) {
    donate.remove();
}

let pichai = new PichaiUX();

document.getElementById('settingsListView').addEventListener('itemSelected', function (e) {
    if (e.detail.index == 1) {
        window.open(settings.about.url);
    } else if (e.detail.index == 2) {
        window.open(settings.donations.url);
    }
});