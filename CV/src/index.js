import './app/index.js';

import logSelfCheck from './shared/CVSelfCheck/index.js';

import burgerMenu from './widgets/burger-menu/index.js';

window.addEventListener('load', () => {
  logSelfCheck();
  burgerMenu();
});
