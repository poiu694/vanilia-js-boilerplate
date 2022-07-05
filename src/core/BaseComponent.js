export default class BaseComponent {
  state;
  props;
  $target;

  constructor($target, props = {}) {
    this.state = {};
    this.props = props;
    this.$target = $target;

    this.componentWillReciveProps();
    this.init();
  }

  init() {
    this.render();
  }

  template() {
    return '';
  }

  componentWillReciveProps() {}
  
  componentDidMount() {}

  componentDidUpdate() {}

  componentWillUnmount() {}

  setState(newState) {
    const nextState = { ...this.state, ...newState };

    this.state = nextState;

    this.componentDidUpdate();
  }

  selectDOMBeforeRender() {}

  setEvent() {}

  render() {
    this.$target.innerHTML = this.template();

    this.selectDOMBeforeRender();
    this.setEvent();

    this.componentDidMount();
  }
}