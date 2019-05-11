import React from 'react';
import { storiesOf } from '@storybook/react';

import Example from './example';

const textInfo = `
Решето Эратосфена, поиск простых чисел.
`;

storiesOf('Algorithms / Eratosfen', module)
    .addParameters({
        info: { text: textInfo }
    })
    .add(
        'default',
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
