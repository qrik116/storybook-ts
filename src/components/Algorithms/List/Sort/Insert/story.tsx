import React from 'react';
import { storiesOf } from '@storybook/react';

import Example from './example';

const textInfo = `
#### Квадратичная сортировка вставками.\n
___
Сложность - O(N2).\n
Сравнение текущего и предыдущего элемента, если предыдущий меньше текущего меняем их местами.\n
Когда текущий больше или равен предыдущему пропускаем итерацию.
`;

storiesOf('Algorithms / List / Sort', module)
    .addParameters({
        info: { text: textInfo }
    })
    .add(
        'Insert',
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
