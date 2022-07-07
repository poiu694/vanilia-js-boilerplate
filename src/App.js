import Router from './utils/router.js';

export default class App {
  constructor($target) {
    this.$target = $target;

    this.init();
  }

  init() {
    this.router = new Router(this.$target);
    this.render();
  }

  render() {
    this.router.switchRenderPage();
  }
}