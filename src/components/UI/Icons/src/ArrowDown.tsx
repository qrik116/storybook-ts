

import React, { FC } from 'react';
import SvgIcon, { ISvgIconProps } from '../SvgIcon';

const ArrowDown: FC<ISvgIconProps> = (props) => (
    <SvgIcon width='11' height='6' viewBox='0 0 11 6' {...props}>
        {/* tslint:disable-next-line */}
        <path d="M0.2,0.2L0.2,0.2c-0.2,0.2 0.2,0.6,0,0.8l4.5,4.7c0.4,0.4,1.1,0.4,1.6,0 L10.8,1c0.2-0.2,0.2-0.6,0-0.8c-0.2-0.2-0.6-0.2-0.8,0L5.9,4.5c-0.2,0.2-0.6,0.2-0.8,0L0.9,0.2C0.7,0,0.4,0,0.2,0.2"/>
    </SvgIcon>
);

export default ArrowDown;
