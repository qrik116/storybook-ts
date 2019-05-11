import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { configureActions } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { withOptions } from '@storybook/addon-options';

import Container from './Container';

addDecorator(withInfo({
    inline: true
}));
addDecorator(withKnobs);
addDecorator(story => <Container story={story} />);
configureActions({
    // Limit the number of items logged into the actions panel
    limit: 20
});

addDecorator(withOptions({
    /**
     * show addon panel as a vertical panel on the right
     * @type {Boolean}
     */
    addonPanelInRight: true
}));

function loadStories() {
    const req = require.context('components', true, /story\.(t|j)sx$/);

    req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
