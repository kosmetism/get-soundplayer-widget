/** @jsx deku.dom */

import deku from 'deku'; // eslint-disable-line no-unused-vars
import SoundPlayer from 'soundplayer-widget';
import Code from './Code';

export default {
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
            const value = e.target.value;
            if (value) {
                form.dataUrl = value;
            }
        }

        function getClientId (e) {
            const value = e.target.value;
            if (value) {
                form.clientId = value;
            }
        }

        function getPlayer () {
            updateState(form);
        }

        return (
            <div>
                <div>
                    <h2 id="Track" class="h3 caps mt3">
                        <a href="#Track" class="black">1. Add SoundCloud Track Url</a>
                    </h2>
                    <hr class="mt1 mb1 b2 border-darken-2" />

                    <div class="mt2">
                        Choose the song you want to listen and insert its' SoundCloud url:
                    </div>

                    <div class="mt2">
                        <input id="track" type="text" class="field col-12" placeholder="SoundCloud track link" onChange={getTrackUrl} value={form.dataUrl} />
                    </div>
                </div>

                <div>
                    <h2 id="ClientId" class="h3 caps mt3">
                        <a href="#ClientId" class="black">2. Get SoundCloud Client ID</a>
                    </h2>
                    <hr class="mt1 mb1 b2 border-darken-2" />

                    <div class="mt2">
                        Register for an app and get SoundCloud API clientId at <a href="https://developers.soundcloud.com" target="_blank">SoundCloud developers portal</a> and paste it below:
                    </div>

                    <div class="mt2">
                        <input id="clientId" type="text" class="field col-12 mb1" placeholder="SoundCloud client id" onChange={getClientId} value={form.clientId} />
                    </div>
                </div>

                <div class="mt2 center">
                    <button class="btn btn-primary py2 caps h6 bg-teal" onClick={getPlayer}>
                        Generate Player
                    </button>
                </div>

                {dataUrl && clientId ? (
                    <div class="clearfix">
                        <h2 id="Player" class="h3 caps mt3">
                            <a href="#Player" class="black">3. Preview and Embed Player</a>
                        </h2>
                        <hr class="mt1 mb1 b2 border-darken-2" />

                        {/* Preview */}
                        <div class="mt2 preview-box">
                            <SoundPlayer class="wrap" resolveUrl={dataUrl} clientId={clientId} />
                        </div>

                        <div class="mt2">
                            Place the following code where you'd like Player to load:
                        </div>

                        {/* Get Code */}
                        <div class="mt2">
                            <Code dataUrl={dataUrl} clientId={clientId} />
                        </div>
                    </div>
                ) : <span />}

                <h2 id="Troubleshooting" class="h3 caps mt2">
                    <a href="#Troubleshooting" class="black">Troubleshooting</a>
                </h2>
                <hr class="mt1 mb1 b2 border-darken-2" />
                <div class="mt2 mb2">
                    Please keep in mind that SoundCloud provides an option for users to prevent streaming to third-party apps.If your sound isn't playing check the <a href="https://developers.soundcloud.com/docs/api/reference#tracks">track</a> <code class="black bg-darken-1 rounded">streamable</code> property. If it is set to <code class="black bg-darken-1 rounded">false</code>, there is no way to play that sound with the API.
                </div>
            </div>
        );
    }
};
