import BaseComponent from '../core/BaseComponent.js';

export default class TestTitle extends BaseComponent {
  componentWillReciveProps() {
    const { title } = this.props;

    this.state = {
      title,
    }
  }

  template() {
    const { title } = this.state;

    return `<h2>${title}</h2>`;
  }

  setEvent() {
    document.addEventListener('click', () => {
      this.$target.style.color = 'red';
    });
  }
}