import { initNavbar } from './navbar.js';
import { initAssistant } from './assistant.js';
import { initCumples } from './cumples.js';

document.addEventListener('DOMContentLoaded', () => {
    initNavbar();
    initAssistant();
    initCumples();
});