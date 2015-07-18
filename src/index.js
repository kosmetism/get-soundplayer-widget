/** @jsx deku.dom */
import 'babel/polyfill';

import deku from 'deku';
import App from './App';

const app = deku.tree(
    <App />
);
deku.render(app, document.getElementById('get-soundplayer'));
