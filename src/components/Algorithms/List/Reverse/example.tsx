import React, { useState } from 'react';

import { Container, Row, Col } from 'components/__core__/Grid';
import reverse from './';

const Example = () => {
    const [arrValue, setArr] = useState('1, 2, 3, 4');

    return (
        <Container className='text-center' fluid>
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
                        <p>Обращенный массив: {reverse(arrValue.split(', ')).join(', ')}</p>
                    </Col>
                </Row>
            }
        </Container>
    );
};

export default Example;
