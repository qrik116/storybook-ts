import React, { FC } from 'react';
import SvgIcon, { ISvgIconProps } from '../SvgIcon';

const Compare: FC<ISvgIconProps> = (props) => (
    <SvgIcon width='20' height='20' viewBox='0 0 20 20' {...props}>
        <path d='M2,12 L12,12 L12,2 L2,2 L2,12 Z M0,0 L14,0 L14,14 L0,14 L0,0 Z' />
        <path d='M8,18 L18,18 L18,8 L8,8 L8,18 Z M6,6 L20,6 L20,20 L6,20 L6,6 Z' />
    </SvgIcon>
);

export default Compare;
