import React from 'react';
import { storiesOf } from '@storybook/react';

import SquareInSquare from './';

const textInfo = '';

storiesOf('Algorithms / Recursion', module)
    .addParameters({
        info: { text: textInfo }
    })
    .add(
        'SquareInSquare',
        () => {
            return (
                <div className='stories__content'>
                    <div className='stories__content-item'>
                        <SquareInSquare />
                    </div>
                </div>
            );
        }
    );
