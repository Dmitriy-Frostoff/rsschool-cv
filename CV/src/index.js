import { indexHTML, CVstyles } from './app/index.js';
import { logSelfCheck } from './shared/CVSelfCheck/index.js';

window.addEventListener('load', () => {
  logSelfCheck();
});
