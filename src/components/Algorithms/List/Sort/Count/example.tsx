import React, { useState } from 'react';

import { Container, Row, Col } from 'components/__core__/Grid';
import countSort from './';

const Example = () => {
    const [arrValue, setArr] = useState('3, 5, 1, 2, 1, 9, 5');

    return (
        <Container className='text-center' fluid>
            <Row>
                <Col>
                    <label>
                        <p>Исходный массив, пример: 3, 5, 1, 2, 1, 9, 5</p>
                        <input type='text' onChange={(e) => setArr(e.target.value)} value={arrValue}/>
                    </label>
                </Col>
            </Row>
            {(Boolean(arrValue)) &&
                <Row>
                    <Col>
                        <p>Отсортированный массив: {countSort(arrValue.split(', ').map(item => +item)).join(', ')}</p>
                    </Col>
                </Row>
            }
        </Container>
    );
};

export default Example;
