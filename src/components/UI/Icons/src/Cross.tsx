import React, { FC } from 'react';
import SvgIcon, { ISvgIconProps } from '../SvgIcon';

const Cross: FC<ISvgIconProps> = (props) => (
    <SvgIcon width='15' height='15' viewBox='0 0 15 15' {...props}>
        <path d='M7.5,8.3.8,15,0,14.1,6.7,7.4,0,.8.8,0,7.5,6.7,14.1,0l.9.8L8.3,7.5,15,14.2l-.9.8Z' />
    </SvgIcon>
);

export default Cross;
