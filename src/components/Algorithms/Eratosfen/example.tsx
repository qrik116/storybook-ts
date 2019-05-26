import React, { useState } from 'react';

import { Container, Row, Col } from 'components/__core__/Grid';

import Worker from 'worker-loader!./index.worker';

const worker = new Worker();

const Example = () => {
    const [value, setValue] = useState(0);
    const [result, setResult] = useState('');

    worker.onmessage = ({ data }) => {
        setResult(data.join(', '));
    };

    worker.postMessage(value);

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
                        <p>{result}</p>
                    </Col>
                </Row>
            }
        </Container>
    );
};

export default Example;
