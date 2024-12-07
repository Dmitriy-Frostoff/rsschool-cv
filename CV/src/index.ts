import './app/index';

import logSelfCheck from './shared/CVSelfCheck/index';

import burgerMenu from './widgets/burger-menu/index';

window.addEventListener('load', () => {
  logSelfCheck();
  burgerMenu();
});
