export default class Home {
  init(el, words, wait) {
    this.words = words;
    this.el = el;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
  }
  /*
   Get current word
   Check if deleting remove char from text else add char
   */

  type() {
    const current = this.wordIndex % this.words.length;
    const fullTxt = this.words[current];
    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
    this.el.innerHTML = `<span class="typing">${this.txt} </span>`;

    // Manage speed
    let typeSpeed = 100;

    if (this.isDeleting) {
      typeSpeed /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
      // pause at delete end

      typeSpeed = this.wait;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      // Deleted full word now change it .
      this.isDeleting = false;
      this.wordIndex += 1;
    }

    setTimeout(() => {
      this.type();
    }, typeSpeed);
  }

  loadTyping() {
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-word'));
    const wait = txtElement.getAttribute('data-period');
    if (words) {
      this.init(txtElement, words, wait);
    }
  }
}
