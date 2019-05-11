import React, { useState } from 'react';

import { Container, Row, Col } from 'components/__core__/Grid';
import linearSearch from './';

const Example = () => {
    const [arrValue, setArr] = useState('1, 2, 3, 4');
    const [value, setValue] = useState('');

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
            <Row>
                <Col>
                    <label>
                        <p>Искомый элемент</p>
                        <input type='number' onChange={(e) => setValue(e.target.value)} value={value || ''}/>
                    </label>
                </Col>
            </Row>
            {(Boolean(arrValue) && Boolean(value)) &&
                <Row>
                    <Col>
                        <p>Порядковый номер элемента: {linearSearch(arrValue.split(', '), value)}</p>
                    </Col>
                </Row>
            }
        </Container>
    );
};

export default Example;
