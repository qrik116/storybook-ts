import React, { useState } from 'react';

import { Container, Row, Col } from 'components/__core__/Grid';
import factorial from './';

const Example = () => {
    const [value, setValue] = useState(2);

    return (
        <Container className='text-center' fluid>
            <Row>
                <Col>
                    <label>
                        <input type='number' onChange={(e) => setValue(+e.target.value)} value={value}/>
                    </label>
                </Col>
            </Row>
            {(Boolean(value)) &&
                <Row>
                    <Col>
                        <p>Факторил числа {value}: <b>{factorial(value)}</b></p>
                    </Col>
                </Row>
            }
        </Container>
    );
};

export default Example;
