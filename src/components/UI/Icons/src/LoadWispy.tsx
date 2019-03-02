import React, { FC } from 'react';
import SvgIcon, { ISvgIconProps } from '../SvgIcon';

const LoadWispy: FC<ISvgIconProps> = (props) => (
    <SvgIcon width='20' height='20' viewBox='0 0 40 40'  {...props}>
        <g id='SystemStyle' transform='translate(-440.000000, -5396.000000)'>
            {/* tslint:disable-next-line */}
            <path d='M460,5436 C448.972,5436 440,5427.028 440,5416 L442,5416 C442,5425.925 450.075,5434 460,5434 C469.925,5434 478,5425.925 478,5416 C478,5406.075 469.925,5398 460,5398 L460,5396 C471.028,5396 480,5404.972 480,5416 C480,5427.028 471.028,5436 460,5436' id='Page-1' />
        </g>
    </SvgIcon>
);

export default LoadWispy;
