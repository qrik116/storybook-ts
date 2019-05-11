import React from 'react';
import { storiesOf } from '@storybook/react';

import Example from './example';

const textInfo = `
Разложение числа на множетели.
`;

storiesOf('Algorithms / BruteForce', module)
    .addParameters({
        info: { text: textInfo }
    })
    .add(
        'factorizeNumber',
        () => {
            return (
                <div className='stories__content'>
                    <div className='stories__content-item'>
                        <Example />
                    </div>
                </div>
            );
        }
    );
