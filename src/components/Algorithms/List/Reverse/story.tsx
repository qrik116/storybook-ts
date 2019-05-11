import React from 'react';
import { storiesOf } from '@storybook/react';

import Example from './example';

const textInfo = `
Обращение массив.
`;

storiesOf('Algorithms / List', module)
    .addParameters({
        info: { text: textInfo }
    })
    .add(
        'Reverse',
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
