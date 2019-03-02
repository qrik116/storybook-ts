import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
// import { select, text, boolean } from '@storybook/addon-knobs';

import Example from './';

const textInfo = `
Пример p5.js
`;

storiesOf('paint / Example', module)
    .add(
        'Example',
        withInfo({
            text: textInfo,
            inline: true
        })(() => {
            // const generalProps = {};

            return (
                <div className='stories__content'>
                    <div className='stories__content-item'>
                        <Example />
                    </div>
                </div>
            );
        })
    );
