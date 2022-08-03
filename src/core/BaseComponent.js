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
    this.componentDidMount();
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

    if (isDuplicateUpdate(this.state, nextState)) return;
    this.state = nextState;

    this.render();
    this.componentDidUpdate();
  }

  selectDOM() {}

  setEvent() {}

  render() {
    this.$target.innerHTML = this.template();
    this.selectDOM();
    this.setEvent();
  }
}

function isDuplicateUpdate(obejctA, obejctB) {
  return JSON.stringify(obejctA) === JSON.stringify(obejctB);
}
