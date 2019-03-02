import React, { FC } from 'react';
import SvgIcon, { ISvgIconProps } from '../SvgIcon';

const Load: FC<ISvgIconProps> = (props) => (
    <SvgIcon width='20' height='20' viewBox='0 0 20 20'  {...props}>
        <g transform='translate(10, 10) rotate(45.000000) translate(-10.000000, -10)'>
            {/* tslint:disable-next-line */}
            <path d='M6.4226737,17.1546526 L5.52686135,18.9462773 C2.24966262,17.3045439 -3.09974268e-13,13.915076 -3.09974268e-13,10 C-3.09974268e-13,4.477 4.477,7.10542736e-15 10,7.10542736e-15 C15.523,7.10542736e-15 20,4.477 20,10 C20,13.915076 17.7503374,17.3045439 14.4731387,18.9462773 L13.5773263,17.1546526 C16.1974977,15.8391567 18,13.1259948 18,10 C18,5.589 14.411,2 10,2 C5.589,2 2,5.589 2,10 C2,13.1259948 3.80250233,15.8391567 6.4226737,17.1546526 Z'/>
        </g>
    </SvgIcon>
);

export default Load;
