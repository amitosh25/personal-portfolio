export default class Skills {
  constructor() {
    this.bars = document.querySelectorAll('#skill-bars .bar');
  }

  initialEle(element) {
    this.context = element.getContext('2d');
    this.refElement = element.parentNode;
    this.loaded = 0;
    this.start = 4.72;
    this.width = this.context.canvas.width;
    this.height = this.context.canvas.height;
    this.total = parseInt(this.refElement.dataset.percent, 10);
    this.timer = null;
    this.diff = 0;

    const timer = setInterval(() => {
      this.run(timer);
    }, 25);
  }


  run(timer) {
    this.timer = timer;
    this.diff = (this.loaded / 100 * Math.PI * 2 * 10).toFixed(2);
    this.context.clearRect(0, 0, this.width, this.height);
    this.context.lineWidth = 10;
    this.context.fillStyle = '#000';
    this.context.strokeStyle = '#d30000';
    this.context.textAlign = 'center';

    this.context.fillText(
      `${this.loaded}%`,
      this.width * 0.5,
      this.height * 0.5 + 2,
      this.width,
    );
    this.context.beginPath();
    this.context.arc(
      35,
      35,
      30,
      this.start,
      this.diff / 10 + this.start,
      false,
    );
    this.context.stroke();

    if (this.loaded >= this.total) {
      clearInterval(this.timer);
    }

    this.loaded += 1;
  }


  init() {
    if (this.bars.length > 0) {
      this.tick = 25;
      this.progress();
    }
  }


  progress() {
    let index = 0;
    const firstCanvas = this.bars[0].querySelector('canvas');
    this.initialEle(firstCanvas); // eslint-disable-line no-new
    const timer = setInterval(() => {
      index += 1;
      if (index === this.bars.length) {
        clearInterval(timer);
      }
      if (index < this.bars.length) {
        const canvas = this.bars[index].querySelector('canvas');
        this.initialEle(canvas); // eslint-disable-line no-new
      }
    }, this.tick * 100);
  }
}
