import React from 'react';
import { storiesOf } from '@storybook/react';

import Example from './example';

const textInfo = `
Проверка на простоту числа.
`;

storiesOf('Algorithms / BruteForce', module)
    .addParameters({
        info: { text: textInfo }
    })
    .add(
        'isSimpleNumber',
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
