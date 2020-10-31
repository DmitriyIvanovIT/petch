'use strict';
import openMobailMenu from './Components/openMobailMenu.js';
import generateColor from './Components/generateColor.js';
import openModal from './Components/openModal.js';

openMobailMenu();
generateColor();

document.body.addEventListener('click', e => {
    const target = e.target;

    if (target.closest('.additionally__card') ||
        target.closest('.kit__card') ||
        target.closest('.dyes__card')) {
            openModal();
        }
});