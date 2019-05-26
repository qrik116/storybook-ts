import React from 'react';
import { storiesOf } from '@storybook/react';

import Example from './example';

const textInfo = `
#### Факториал числа.\n
___
Лучше использовать цикл.
`;

storiesOf('Algorithms / Recursion', module)
    .addParameters({
        info: { text: textInfo }
    })
    .add(
        'Factorial',
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
