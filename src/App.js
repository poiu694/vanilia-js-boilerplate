import SamplePage from './pages/SamplePage.js';

export default class App {
  constructor($target) {
    this.$target = $target;

    this.init();
  }

  init() {
    this.render();
  }

  render() {
    new SamplePage(this.$target, {
      testData: ['1', '2', '3', '4', '5'], 
    })
  }
}