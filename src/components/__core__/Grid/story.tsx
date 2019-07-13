import React from 'react';
import marked from 'marked';
import { storiesOf } from '@storybook/react';

import { Container, Row, Col } from './';

const textInfo = marked(`
## Grid system.

Система сетки [Bootstrap](https://getbootstrap.com/docs/4.3/layout/grid/) использует ряд контейнеров,
строк и столбцов для размещения и выравнивания содержимого.\n
Построено с помощью [flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)
и полностью отзывчиво.

~~~ts
type TColSize = boolean | number | string;
type TColumn = TColSize | {
    span: TColSize
    order: string | number;
    offset: string | number;
    align?: 'auto' | 'start' | 'end' | 'center' | 'baseline' | 'stretch';
};
interface IRow {
    direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
    wrap?: 'wrap' | 'nowrap' | 'wrap-reverse';
    align?: 'start' | 'end' | 'center' | 'baseline' | 'stretch';
    justify?: 'start' | 'end' | 'center' | 'between' | 'around';
}
~~~
`);

storiesOf('core / Grid', module)
    .addParameters({
        info: { text: textInfo }
    })
    .add(
        'Auto-layout columns',
        () => {
            return (
                <div className='example-grid'>
                    <Container>
                        <Row>
                            <Col>1 of 2</Col>
                            <Col>2 of 2</Col>
                        </Row>
                        <Row>
                            <Col>1 of 3</Col>
                            <Col>2 of 3</Col>
                            <Col>3 of 3</Col>
                        </Row>
                    </Container>
                </div>
            );
        }
    )
    .add(
        'Setting one column width',
        () => {
            return (
                <div className='example-grid'>
                    <Container>
                        <Row>
                            <Col>1 of 3</Col>
                            <Col xs={6}>2 of 3 (wider)</Col>
                            <Col>3 of 3</Col>
                        </Row>
                        <Row>
                            <Col>1 of 3</Col>
                            <Col xs={5}>2 of 3 (wider)</Col>
                            <Col>3 of 3</Col>
                        </Row>
                    </Container>
                </div>
            );
        }
    )
    .add(
        'Variable width content',
        () => {
            return (
                <div className='example-grid'>
                    <Container>
                        <Row lg={{ justify: 'end' }} xl={{ justify: 'center' }}>
                            <Col xs lg='2'>1 of 3</Col>
                            <Col md='auto'>Variable width content</Col>
                            <Col xs lg='2'>3 of 3</Col>
                        </Row>
                        <Row>
                            <Col>1 of 3</Col>
                            <Col md='auto'>Variable width content</Col>
                            <Col xs lg='2'>3 of 3</Col>
                        </Row>
                    </Container>
                </div>
            );
        }
    )
    .add(
        'Responsive grids',
        () => {
            return (
                <div className='example-grid'>
                    <Container>
                        <Row>
                            <Col sm={8}>sm=8</Col>
                            <Col sm={4}>sm=4</Col>
                        </Row>
                        <Row>
                            <Col sm>sm=true</Col>
                            <Col sm>sm=true</Col>
                            <Col sm>sm=true</Col>
                        </Row>
                    </Container>
                </div>
            );
        }
    )
    .add(
        'Responsive grids 2',
        () => {
            return (
                <div className='example-grid'>
                    <Container>
                        {/* Stack the columns on mobile by making one full-width and the other half-width */}
                        <Row>
                            <Col xs={12} md={8}>
                                xs=12 md=8
                            </Col>
                            <Col xs={6} md={4}>
                                xl=6 md=4
                            </Col>
                        </Row>

                        {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
                        <Row>
                            <Col xs={6} md={4}>
                                xs=6 md=4
                            </Col>
                            <Col xs={6} md={4}>
                                xs=6 md=4
                            </Col>
                            <Col xs={6} md={4}>
                                xs=6 md=4
                            </Col>
                        </Row>

                        {/* Columns are always 50% wide, on mobile and desktop */}
                        <Row>
                            <Col xs={6}>xs=6</Col>
                            <Col xs={6}>xs=6</Col>
                        </Row>
                    </Container>
                </div>
            );
        }
    )
    .add(
        'Order, Offset',
        () => {
            return (
                <div className='example-grid'>
                    <Container>
                        <Row>
                            <Col xs>First, but unordered</Col>
                            <Col sm md={{ order: 12 }}>Second, but last, md</Col>
                            <Col sm md={{ order: 1 }}>Third, but second, md</Col>
                        </Row>
                        <br/><br/>
                        <Row>
                            <Col md={4}>md=4</Col>
                            <Col md={{ span: 4, offset: 4 }}>{`md={{ span: 4, offset: 4 }}`}</Col>
                        </Row>
                        <Row>
                            <Col md={{ span: 3, offset: 3 }}>{`md={{ span: 3, offset: 3 }}`}</Col>
                            <Col md={{ span: 3, offset: 3 }}>{`md={{ span: 3, offset: 3 }}`}</Col>
                        </Row>
                        <Row>
                            <Col md={{ span: 6, offset: 3 }}>{`md={{ span: 6, offset: 3 }}`}</Col>
                        </Row>
                    </Container>
                </div>
            );
        }
    )
    .add(
        'Col - self position',
        () => {
            return (
                <div className='example-grid'>
                    <Container>
                        <Row style={{ height: 200 }}>
                            <Col md={{ align: 'start' }}>align-items: start md</Col>
                            <Col md={{ align: 'center' }}>align-items: center md</Col>
                            <Col md={{ align: 'end' }}>align-items: end md</Col>
                        </Row>
                        <br/><br/>
                        <Row style={{ height: 200 }}>
                            <Col sm={{ align: 'start' }} md={{ align: 'center' }} lg={{ align: 'end' }}>align-items: start lg</Col>
                            <Col sm={{ align: 'center' }} md={{ align: 'center' }} lg={{ align: 'center' }}>align-items: center lg</Col>
                            <Col sm={{ align: 'end' }} md={{ align: 'center' }} lg={{ align: 'start' }}>align-items: end lg</Col>
                        </Row>
                    </Container>
                </div>
            );
        }
    );
