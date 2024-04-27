"use strict";
document.addEventListener("DOMContentLoaded", () => {
  const app = new App();
});

class App {
  constructor() {
    this.htmlEl = document.querySelector("html");
    this.state = { default: 375, large: 1440 };
    this.borderline = 600;
    this.init();
  }

  init() {
    const { width } = this.htmlEl.getBoundingClientRect();
    const fontSize =
      width < this.borderline
        ? (width / this.state.default) * 100
        : (width / this.state.large) * 100;
    this.htmlEl.style.fontSize = `${fontSize}%`;

    this.resize();
  }

  resize() {
    addEventListener("resize", () => {
      const { width } = this.htmlEl.getBoundingClientRect();
      console.log(width);
      const fontSize =
        width < this.borderline
          ? (width / this.state.default) * 100
          : (width / this.state.large) * 100;
      this.htmlEl.style.fontSize = `${fontSize}%`;
    });
  }
}
