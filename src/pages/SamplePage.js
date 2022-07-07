import BaseComponent from '../core/BaseComponent.js';
import SampleComponent from '../components/SampleComponent.js';

export default class SamplePage extends BaseComponent {
  componentWillReciveProps() {
    const { testData, movePage } = this.props;

    this.state = {
      data: testData,
      movePage: movePage,
    };
  }

  template() {
    const { data } = this.state;

    return `
      <div class="item-container">
        <h2 class="item-title"></h2>
        <ul class="item">
          ${data.map((item) => `<li>${item}</li>`).join('')}
        </ul>
      </div>
    `;
  }

  selectDOMBeforeRender() {
    this.$title = document.querySelector('.item-title');
  }

  render() {
    const { data, movePage } = this.state;

    if (Array.isArray(data) && data.length === 0) {
      alert('데이터가 유효하지 않습니다.');
    } else {
      this.$target.innerHTML = this.template();

      this.selectDOMBeforeRender();
      new SampleComponent(this.$title, {
        title: 'Test Title',
        movePage,
      })
    }
  }
}