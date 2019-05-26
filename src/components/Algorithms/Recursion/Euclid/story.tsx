import React from 'react';
import { storiesOf } from '@storybook/react';

import Example from './example';

const textInfo = `
#### Алгорит Эвклида.
___
Нахождение наибольшего общего делителя (Grand Command Divisor).
`;

storiesOf('Algorithms / Recursion', module)
    .addParameters({
        info: { text: textInfo }
    })
    .add(
        'Euclid',
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
