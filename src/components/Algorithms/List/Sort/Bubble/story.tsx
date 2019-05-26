import React from 'react';
import { storiesOf } from '@storybook/react';

import Example from './example';

const textInfo = `
#### Квадратичная сортировка методом пузырька.\n
___
Сложность - O(N2).\n
Сравнение текущего и следующего элемента, если следующий меньше текущего меняем их местами.\n
Тем самым поднимаеся самое большое значение.\n
После каждой итерации правая часть становится не нужной для проверки.\n
Добавлен флаг обмена, если обмена не произошло за итерацию, значит массив отсортирован и можно завершать выполнение.
`;

storiesOf('Algorithms / List / Sort', module)
    .addParameters({
        info: { text: textInfo }
    })
    .add(
        'Bubble',
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
