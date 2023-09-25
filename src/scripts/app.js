import particles from 'particles.js'; // eslint-disable-line no-unused-vars
import Menu from './menu';
import Home from './home';
import Skills from './skills';
import '../scss/main.scss';

const json = require('../assets/external/particle.json');

const particlejs = document.querySelector('#particles-js');
const menuBtn = document.querySelector('.menu-btn');
const homeDiv = document.querySelector('#home');
const skillDiv = document.querySelector('#skill');
// const downloadDiv = document.querySelector('#download-button');


if (particlejs) {
  particlesJS('particles-js', json);// eslint-disable-line no-undef
}
const menu = new Menu();// eslint-disable-line no-new
menuBtn.addEventListener('click', evt => menu.toggleMenu(evt));
// downloadDiv.addEventListener('click', evt => menu.onDownloadDivClick(evt));
document.addEventListener('DOMContentLoaded', (evt) => {
  if (homeDiv) {
    const home = new Home();
    home.loadTyping(evt);
  }
  if (skillDiv) {
    const skills = new Skills();
    skills.init(evt);
  }
});
