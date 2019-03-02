import React, { FC } from 'react';
import SvgIcon, { ISvgIconProps } from '../SvgIcon';

const Expand: FC<ISvgIconProps> = (props) => (
    <SvgIcon width='20' height='20' viewBox='0 0 20 20' {...props}>
        {/* tslint:disable-next-line */}
        <path d='M6.586,12 L2,16.586 L2,12 L0,12 L0,20 L8,20 L8,18 L3.414,18 L8,13.414 L6.586,12 Z M12,0 L12,2 L16.586,2 L12,6.586 L13.414,8 L18,3.414 L18,8 L20,8 L20,0 L12,0 Z M18,16.586 L13.414,12 L12,13.414 L16.586,18 L12,18 L12,20 L20,20 L20,12 L18,12 L18,16.586 Z M0,0 L0,8 L2,8 L2,3.414 L6.549,7.963 L7.963,6.549 L3.414,2 L8,2 L8,0 L0,0 Z' />
    </SvgIcon>
);

export default Expand;
