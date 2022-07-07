import SamplePage from '../pages/SamplePage.js';
import { PATHS } from './constant.js';

export default class Router {
  constructor($target) {
    this.$target = $target;
    this.movePage = this.movePage.bind(this);
    this.switchRenderPage = this.switchRenderPage.bind(this);
    
    this.setWindowEvent();
  }

  setWindowEvent() {
    window?.addEventListener('popstate', () => {
      this.switchRenderPage();
    })
  }

  movePage(url, data = {}) {
    const originUrl = window?.location.origin;
    window?.history.pushState(data, url, originUrl + url);
    this.$target.innerHTML = '';
    this.switchRenderPage();
  }

  switchRenderPage() {
    const { pathname } = window.location;

    switch (pathname) {
      case PATHS.MAIN:
        new SamplePage(this.$target, {
          testData: ['1', '2', '3', '4', '5'],
          movePage: this.movePage,
        });
        break;
      case PATHS.LIST:
        new SamplePage(this.$target, {
          testData: ['가', '나', '다', '라', '마'],
          movePage: this.movePage,
        });
        break;
      default:
        alert('유효하지 않은 location 입니다.');
        this.movePage(PATHS.MAIN);
    }
  }
};