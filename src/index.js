/** @jsx dom */

import 'babel/polyfill';
import dom from 'magic-virtual-element'; // eslint-disable-line no-unused-vars
import deku from 'deku';
import App from './App';

const app = deku.tree(<App />);

deku.render(app, document.getElementById('get-soundplayer'));
