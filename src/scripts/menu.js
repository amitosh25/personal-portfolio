/*
* Manage the menu button and toggle option
*/
export default class Menu {
  constructor() {
    this.showMenu = false;
    this.menuBtn = document.querySelector('.menu-btn');
    this.menu = document.querySelector('.menu');
    this.menuBranding = document.querySelector('.menu-branding');
    this.menuNav = document.querySelector('.menu-nav');
    this.navItems = document.querySelectorAll('.nav-item');
    this.downloadEle = document.querySelector('#download-button');
  }
  /* eslint-disable-block */

  onDownloadDivClick() {
    this.downloadEle.classList.add('loading');
    this.downloadEle.classList.remove('finished');
    this.delay(5000).then(() => {
      this.downloadEle.classList.remove('loading');
      this.downloadEle.classList.add('finished');
      this.downloadEle.textContent = 'Open File';
    });
  }

  toggleMenu() {
    const home = document.querySelector('#home');
    const downloadDiv = document.querySelector('#download-button');
    let show = ''; /*eslint-disable-line*/

    if (!this.showMenu) {
      this.menuBtn.classList.add('close');
      this.menu.classList.add('show');
      this.menuNav.classList.add('show');
      this.menuBranding.classList.add('show');
      this.navItems.forEach(item => item.classList.add('show'));
      this.showMenu = true;
      show = home ? home.classList.add('hideElement') : '';
      downloadDiv.classList.add('hideElement');
    } else {
      this.menuBtn.classList.remove('close');
      this.menu.classList.remove('show');
      this.menuNav.classList.remove('show');
      this.menuBranding.classList.remove('show');
      this.navItems.forEach(item => item.classList.remove('show'));
      downloadDiv.classList.remove('hideElement');
      show = home ? home.classList.remove('hideElement') : '';
      this.showMenu = false;
    }
  }
  /*eslint-disable*/
  delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
