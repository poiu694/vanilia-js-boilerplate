import BaseComponent from '../core/BaseComponent.js';
import { PATHS } from '../utils/constant.js';

export default class TestTitle extends BaseComponent {
  componentWillReciveProps() {
    const { title, movePage } = this.props;
    
    this.state = {
      title,
      movePage,
    }
  }

  template() {
    const { title } = this.state;

    return `<header>
      <h2 class="title">${title}</h2>
      <button type="button" class="move-btn">nextPage</button>
    </header>`;
  }

  setEvent() {
    const { movePage } = this.state;

    this.$target.addEventListener('click', (event) => {
      if (event.target.className === 'title') {
        this.$target.style.color = 'red';
      } else if (event.target.className === 'move-btn') {
        movePage(PATHS.LIST);
      }
    });

  }
}