/** @jsx deku.dom */

import deku from 'deku'; // eslint-disable-line no-unused-vars
import hljs from 'highlight.js';

export default {
    render({ props }) {
        const { dataUrl, clientId } = props;
        const htmlCode = hljs.highlight('html', `<div data-url="${dataUrl}" class="sb-soundplayer-widget"></div>
<script>
/* * * CONFIGURATION VARIABLES * * */
var sb_soundplayer_client_id = '${clientId}';

/* * * DON'T EDIT BELOW THIS LINE * * */
(function(d, s, id) {
    if (d.getElementById(id)) return;
    var js, p, fjs = d.getElementsByTagName(s)[0];
    p = /^http:/.test(d.location) ? 'http' : 'https';
    js = d.createElement(s);
    js.id = id;
    js.src = p + '://cdnjs.cloudflare.com/ajax/libs/soundplayer-widget/0.1.3/soundplayer-widget.min.js';
    fjs.parentNode.insertBefore(js, fjs);
})(document, 'script', 'sb-soundplayer-widget-sdk');
</script>`);

        return (
            <div>
                <pre><code class="html" innerHTML={htmlCode.value.trim()}></code></pre>
            </div>
        );
    }
};
