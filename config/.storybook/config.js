import React from 'react';
import { setOptions } from 'marked';
import { highlightAuto } from 'highlight.js';
import { configure, addDecorator, addParameters } from '@storybook/react';
import { configureActions } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import Container from './Container';

setOptions({
    headerIds: false,
    highlight: (code, lang) => {
        if (lang === 'tsx' || lang === 'jsx') lang = 'html';

        return highlightAuto(code, lang ? [lang] : undefined).value;
    }
});

addDecorator(withInfo({
    inline: true
}));
addDecorator(withKnobs);
addDecorator(story => <Container story={story} />);
configureActions({
    // Limit the number of items logged into the actions panel
    limit: 20
});

addParameters({
    options: {
        /**
         * show addon panel as a vertical panel on the right
         * @type {Boolean}
         */
        panelPosition: 'right'
    }
});

function loadStories() {
    const req = require.context('components', true, /story\.(t|j)sx$/);

    req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
