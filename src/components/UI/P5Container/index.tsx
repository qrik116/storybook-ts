import React, { Component, createRef } from 'react';
import p5 from 'p5';

export interface IP5ContainerProps {
    sketch: any;
}

class P5Container extends Component<IP5ContainerProps> {
    private ref = createRef<HTMLDivElement>();
    // @ts-ignore
    private canvas: p5 | undefined = undefined;

    componentDidMount() {
        if (this.ref.current) {
            this.canvas = new p5(this.props.sketch, this.ref.current);
        }
    }

    render() {
        return <div className='p5-container' ref={this.ref} />;
    }
}

export default P5Container;
