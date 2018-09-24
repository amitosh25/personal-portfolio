export default class Home {
  constructor() {
    this.elements = document.getElementsByClassName('txt-rotate');
  }

  static init(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    Home.tick();
    this.isDeleting = false;
  }

  static tick() {
    const i = this.loopNum % this.toRotate.length;
    const fullTxt = this.toRotate[i];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = `<span class="wrap">${this.txt}</span>`;

    const that = this;
    let delta = 200 - Math.random() * 200;

    if (this.isDeleting) {
      delta /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum += 1;
      delta = 500;
    }

    setTimeout(() => {
      that.tick();
    }, delta);
  }

  loadTyping() {
    for (let i = 0; i < this.elements.length; i++) { // eslint-disable-line no-plusplus
      const toRotate = this.elements[i].getAttribute('data-rotate');
      const period = this.elements[i].getAttribute('data-period');
      if (toRotate) {
        Home.init(this.elements[i], JSON.parse(toRotate), period);
      }
    }

    const css = document.createElement('style');
    css.type = 'text/css';
    css.innerHTML = '.txt-rotate > .wrap { border-right: 0.08em solid #000; padding: 0 5px; }';
    document.body.appendChild(css);
  }
}
