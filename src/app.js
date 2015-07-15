/** @jsx deku.dom */
import 'babel/polyfill';

import deku from 'deku';
import SoundPlayer from 'soundplayer-widget';
import Code from './Code';

const App = {
    initialState() {
        return {
            dataUrl: 'https://soundcloud.com/shura/shura-white-light',
            clientId: '08f79801a998c381762ec5b15e4914d5'
        };
    },

    render({ state }, updateState) {
        const { dataUrl, clientId } = state;
        let form = Object.assign({}, state);


        function getTrackUrl (e) {
            form.dataUrl = e.target.value;
        }

        function getClientId (e) {
            form.clientId = e.target.value;
        }

        function getPlayer () {
            updateState(form);
        }

        return (
            <div>
                <div>
                    <h2 id="Track" class="h3 caps mt4">
                        <a href="#Track" class="black">Step 1. SoundCloud Track Url</a>
                    </h2>
                    <hr class="mt1 mb1 b2 border-darken-2" />

                    <div class="mt2">
                        <input id="track" type="text" class="field-light full-width" placeholder="https://soundcloud.com/shura/shura-indecision-12-edit-1" onChange={getTrackUrl} value={form.dataUrl} />
                    </div>
                </div>

                <div>
                    <h2 id="ClientId" class="h3 caps mt4">
                        <a href="#ClientId" class="black">Step 2. SoundCloud Client ID</a>
                    </h2>
                    <hr class="mt1 mb1 b2 border-darken-2" />
                    <div class="mt2">
                        <input id="clientId" type="text" class="field-light full-width" placeholder="08f79801a998c381762ec5b15e4914d5" onChange={getClientId} value={form.clientId} />
                    </div>
                </div>

                <div class="center mt3">
                    <button class="button button-outline button-big border-olive olive b2 caps" onClick={getPlayer}>
                        Get Player
                    </button>
                </div>

                {dataUrl && clientId ? (
                    <div>
                        <h2 id="Player" class="h3 caps mt4">
                            <a href="#Player" class="black">Step 3. Copy/Paste Player Code</a>
                        </h2>
                        <hr class="mt1 mb1 b2 border-darken-2" />

                        {/* Preview */}
                        <div class="mt2">
                            <SoundPlayer class="wrap" resolveUrl={dataUrl} clientId={clientId} />
                        </div>

                        {/* Get Code */}
                        <div class="mt2">
                            <Code dataUrl={dataUrl} clientId={clientId} />
                        </div>
                    </div>
                ) : <span />}
            </div>
        );
    }
};

const app = deku.tree(<App />);
deku.render(app, document.getElementById('get-soundplayer'));
