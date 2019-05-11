import React, { useState } from 'react';

import { Container, Row, Col } from 'components/__core__/Grid';
import factorizeNumber from './';

const Example = () => {
    const [value, setValue] = useState(0);

    return (
        <Container className='text-center' fluid>
            <Row>
                <Col>
                    <input type='number' onChange={(e) => setValue(+e.target.value)} value={value || ''}/>
                </Col>
            </Row>
            {Boolean(value) &&
                <Row>
                    <Col>
                        <p>Множители: {factorizeNumber(value).join(', ')}</p>
                    </Col>
                </Row>
            }
        </Container>
    );
};

export default Example;
