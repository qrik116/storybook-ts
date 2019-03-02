
import React, { FC } from 'react';
import SvgIcon, { ISvgIconProps } from '../SvgIcon';

const Calendar: FC<ISvgIconProps> = (props) => (
    <SvgIcon width='20' height='20' viewBox='0 0 20 20' {...props}>
        <circle cx='17' cy='10' r='2' />
        <circle cx='10' cy='10' r='2' />
        <circle cx='3' cy='10' r='2' />
    </SvgIcon>
);

export default Calendar;
