import React from 'react';
import { storiesOf } from '@storybook/react';

import Example from './example';

const textInfo = `
#### Квадратичная сортировка выборкой.\n
___
Сложность - O(N2).\n
Поиск минимального значения в массиве и обмен его с текущим элементом поиска.\n
По умолчанию 1 элемент минимальный.\n
По итогу последний элемент автоматически отсортирован.\n
Сортируется левая часть.
`;

storiesOf('Algorithms / List / Sort', module)
    .addParameters({
        info: { text: textInfo }
    })
    .add(
        'Choise',
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
