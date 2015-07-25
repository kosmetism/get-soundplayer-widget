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
    var fjs = d.getElementsByTagName(s)[0],
        js = fjs.parentNode.insertBefore(d.createElement(s), fjs);
    js.id = id;
    js.src = '//cdnjs.cloudflare.com/ajax/libs/soundplayer-widget/0.3.6/soundplayer-widget.min.js';
})(document, 'script', 'sb-soundplayer-widget-sdk');
</script>`);

        function selectText (e) {
            const selection = window.getSelection();
            const range = document.createRange();
            range.selectNode(e.delegateTarget);
            selection.removeAllRanges();
            selection.addRange(range);
        }

        return (
            <div>
                <pre onClick={selectText}><code class="html" innerHTML={htmlCode.value.trim()}></code></pre>
            </div>
        );
    }
};
