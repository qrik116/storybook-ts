import React, { useState } from 'react';

import { Container, Row, Col } from 'components/__core__/Grid';
import gcd from './';

const Example = () => {
    const [valueA, setValueA] = useState(25);
    const [valueB, setValueB] = useState(10);

    return (
        <Container className='text-center' fluid>
            <Row>
                <Col>
                    <label>
                        <p>A</p>
                        <input type='number' onChange={(e) => setValueA(+e.target.value)} value={valueA}/>
                    </label>
                </Col>
                <Col>
                    <label>
                        <p>B</p>
                        <input type='number' onChange={(e) => setValueB(+e.target.value)} value={valueB}/>
                    </label>
                </Col>
            </Row>
            {(Boolean(valueA)) &&
                <Row>
                    <Col>
                        <p>Наибольший общий делитель чисел {valueA} и {valueB}: <b>{gcd(valueA, valueB)}</b></p>
                    </Col>
                </Row>
            }
        </Container>
    );
};

export default Example;
