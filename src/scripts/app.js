import particles from "particles.js";
import "../scss/main.scss";

// Select DOM Items
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuBranding = document.querySelector(".menu-branding");
const menuNav = document.querySelector(".menu-nav");
const navItems = document.querySelectorAll(".nav-item");
const home = document.querySelector("#home");
const particlejs = document.querySelector("#particles-js");

const json = require("../assets/external/particle.json");

//Set Initial state of menu
let showMenu = false;

function TxtRotate(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = "";
  this.tick();
  this.isDeleting = false;
}

TxtRotate.prototype.tick = function() {
  let i = this.loopNum % this.toRotate.length;
  let fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

  let that = this;
  let delta = 200 - Math.random() * 200;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === "") {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  let elements = document.getElementsByClassName("txt-rotate");
  for (let i = 0; i < elements.length; i++) {
    let toRotate = elements[i].getAttribute("data-rotate");
    let period = elements[i].getAttribute("data-period");
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }

  let css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML =
    ".txt-rotate > .wrap { border-right: 0.08em solid #000; padding: 0 5px; }";
  document.body.appendChild(css);
};

menuBtn.addEventListener("click", toggleMenu);

if (particlejs) {
  particlesJS("particles-js", json);
}

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    if (home) {
      home.classList.add("hideElement");
    }
    navItems.forEach(item => item.classList.add("show"));
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    if (home) {
      home.classList.remove("hideElement");
    }
    navItems.forEach(item => item.classList.remove("show"));
    showMenu = false;
  }
}
