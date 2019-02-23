import { observable, action } from 'mobx';

export default class UI {

  @observable showSplashScreen = true;
  @observable showFilters = false;
  @observable breakpoints = {
    xs: '(max-width: 375px)',
    xm: '(max-width: 30em)',
    su: '(min-width: 768px)',
    sm: '(min-width: 768px) and (max-width: 959px)',
    md: '(min-width: 960px) and (max-width: 1199px)',
    mu: '(min-width: 960px)',
    lg: '(min-width: 1200px)',
  }

  @action ready() {
    this.showSplashScreen = false;
  }

  @action toggleFilters() {
    this.showFilters = !this.showFilters;
  }
}
