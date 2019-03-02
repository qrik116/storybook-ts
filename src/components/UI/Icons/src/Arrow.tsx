import React, { FC } from 'react';
import SvgIcon, { ISvgIconProps } from '../SvgIcon';

const Arrow: FC<ISvgIconProps> = (props) => (
    <SvgIcon width='15' height='15' viewBox='0 0 15 15' {...props}>
        <path fillRule='evenodd' d='M7.5 0l1.076 1.045L2.871 6.75H15v1.5H2.871l5.69 5.69L7.5 15 0 7.5 7.5 0'/>
    </SvgIcon>
);

export default Arrow;
