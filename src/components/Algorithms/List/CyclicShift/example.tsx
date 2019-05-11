import React, { useState } from 'react';

import { Container, Row, Col } from 'components/__core__/Grid';
import cyclicShift from './';

const Example = () => {
    const [arrValue, setArr] = useState('1, 2, 3, 4');
    const [dir, setDir] = useState(true);

    return (
        <Container className='text-center' fluid>
            <Row>
                <Col>
                    <label>
                        <input type='checkbox' onChange={(e) => setDir(e.target.checked)} checked={dir}/>
                        Направление (true - влево, false - вправо)
                    </label>
                </Col>
            </Row>
            <Row>
                <Col>
                    <label>
                        <p>Исходный массив, пример: 1, 2, 3, 4</p>
                        <input type='text' onChange={(e) => setArr(e.target.value)} value={arrValue || ''}/>
                    </label>
                </Col>
            </Row>
            {Boolean(arrValue) &&
                <Row>
                    <Col>
                        <p>Сдвинутый массив: {cyclicShift(arrValue.split(', '), dir).join(', ')}</p>
                    </Col>
                </Row>
            }
        </Container>
    );
};

export default Example;
