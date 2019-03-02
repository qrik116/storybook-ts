import React, { FC } from 'react';
import SvgIcon, { ISvgIconProps } from '../SvgIcon';

const Cross2: FC<ISvgIconProps> = (props) => (
    <SvgIcon width='10' height='10' viewBox='0 0 10 10' {...props}>
        <path d='M9.667 8.818l-.849.849L5 5.849 1.182 9.667l-.849-.849L4.151 5 .333 1.182l.849-.849L5 4.151 8.818.333l.849.849L5.849 5z'/>
    </SvgIcon>
);

export default Cross2;
