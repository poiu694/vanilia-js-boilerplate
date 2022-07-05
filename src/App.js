export default class App {
  constructor($target) {
    this.$target = $target;

    this.init();
  }

  init() {
    this.render();
  }

  render() {
    this.$target.innerHTML = '<h2>hi</h2>';
  }
}