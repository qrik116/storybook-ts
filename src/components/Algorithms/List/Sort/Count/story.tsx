import React from 'react';
import { storiesOf } from '@storybook/react';

import Example from './example';

const textInfo = `
#### Сортировка подсчётом.\n
___
Сложность - O(N).\n
Минусы данного алгоритма заключаются в том, что необходимо передавать максимальное значение в массиве,
для частотного анализа.\n
Числа не могут быть отрицательными.\n
Для больших чисел необходимо большое кол-во памяти.\n
В данном случае частотный анализ проводится от 0 до 9.\n
`;

storiesOf('Algorithms / List / Sort', module)
    .addParameters({
        info: { text: textInfo }
    })
    .add(
        'Count',
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
