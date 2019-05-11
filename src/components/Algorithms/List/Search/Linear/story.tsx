import React from 'react';
import { storiesOf } from '@storybook/react';

import Example from './example';

const textInfo = `
Линейный поиск.
`;

storiesOf('Algorithms / List / Search', module)
    .addParameters({
        info: { text: textInfo }
    })
    .add(
        'Linear',
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
