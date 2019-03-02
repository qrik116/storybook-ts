import React, { Component } from 'react';
import p5 from 'p5';

import P5Container from '../../UI/P5Container';

class Example extends Component {
    sketch(p5: p5) {
        let frame: number = 0;
        const pos: { x: number; y: number }[] = [
            { x: 10, y: 10 },
            { x: 10, y: 10 },
            { x: 590, y: 10 },
            { x: 590, y: 10 },
            { x: 10, y: 390 },
            { x: 10, y: 390 },
            { x: 590, y: 390 },
            { x: 590, y: 390 },
        ];
        let prev: { x: number; y: number }[] = pos.map(_item => ({ x: p5.random(590), y: p5.random(390) }));

        p5.setup = () => {
            p5.createCanvas(600, 400);
        };

        p5.draw = () => {
            p5.background(0, 0, 0);
            p5.stroke('#fff');
            p5.strokeWeight(2);

            p5.noFill();
            p5.rect(5, 5, p5.width - 10, p5.height - 10);

            p5.stroke(p5.floor(p5.random(1, 3)) === 1 ? 'rgba(255, 255, 255, .5)' : '#fff');

            if (frame === 1) {
                prev = [];
                frame = 0;

                for (const item of pos) {
                    const pos = { x: p5.random(590), y: p5.random(390) };

                    prev.push(pos);
                    p5.line(item.x, item.y, pos.x, pos.y);
                }
            } else {
                frame++;

                for (const [i, item] of pos.entries()) {
                    p5.line(item.x, item.y, prev[i].x, prev[i].y);
                }
            }
        };
    }

    render() {
        return <P5Container sketch={this.sketch} />;
    }
}

export default Example;
