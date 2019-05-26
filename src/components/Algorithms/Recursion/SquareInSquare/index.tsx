import React, { Component, createRef } from 'react';

import './static/styles/_style.scss';

class SquareInSquare extends Component {
    private canvasRef = createRef<HTMLCanvasElement>();
    private ctx: CanvasRenderingContext2D | null = null;
    private alpha = 0.1;
    private width = 600;

    constructor(props: any) {
        super(props);
    }

    componentDidMount() {
        if (!this.canvasRef.current) return;

        this.ctx = this.canvasRef.current.getContext('2d');

        this.paint();
    }

    paint() {
        const { ctx } = this;

        if (!ctx) return;

        this.recursive(ctx, [
            [this.width * 0.05, this.width * 0.05],
            [this.width * 0.95, this.width * 0.05],
            [this.width * 0.95, this.width * 0.95],
            [this.width * 0.05, this.width * 0.95],
        ], 100);
    }

    /** Рисуем квадрат */
    square(ctx: CanvasRenderingContext2D, points: number[][]) {
        ctx.lineWidth = 1;

        ctx.beginPath();
        ctx.moveTo(points[0][0], points[0][1]);
        ctx.lineTo(points[1][0], points[1][1]);
        ctx.lineTo(points[2][0], points[2][1]);
        ctx.lineTo(points[3][0], points[3][1]);
        ctx.closePath();
        ctx.stroke();
    }

    recursive(ctx: CanvasRenderingContext2D, points: number[][], deep: number = 3) {
        if (deep < 1) return;

        this.square(ctx, points);

        const A = [
            points[0][0] * (1 - this.alpha) + points[1][0] * this.alpha,
            points[0][1] * (1 - this.alpha) + points[1][1] * this.alpha
        ];
        const B = [
            points[1][0] * (1 - this.alpha) + points[2][0] * this.alpha,
            points[1][1] * (1 - this.alpha) + points[2][1] * this.alpha
        ];
        const C = [
            points[2][0] * (1 - this.alpha) + points[3][0] * this.alpha,
            points[2][1] * (1 - this.alpha) + points[3][1] * this.alpha
        ];
        const D = [
            points[3][0] * (1 - this.alpha) + points[0][0] * this.alpha,
            points[3][1] * (1 - this.alpha) + points[0][1] * this.alpha
        ];

        this.recursive(ctx, [A, B, C, D], deep - 1);
    }

    render() {
        return (
            <div>
                <canvas className='canvas' width={this.width} height={this.width} ref={this.canvasRef} />
            </div>
        );
    }
}

export default SquareInSquare;
