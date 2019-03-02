import React, { FC } from 'react';
import SvgIcon, { ISvgIconProps } from '../SvgIcon';

const Calendar: FC<ISvgIconProps> = (props) => (
    <SvgIcon width='24' height='24' viewBox='0 0 24 24' {...props}>
        {/* tslint:disable-next-line */}
        <path fillRule='evenodd' d='M17.971 8H1.997V4.971A.97.97 0 0 1 2.967 4h1.027v2H5.99V4h7.988v2h1.996V4h.999a1 1 0 0 1 .998 1v3zm0 9c0 .55-.449 1-.998 1H2.995a1 1 0 0 1-.998-1v-7H17.97v7zm-17.907.761c0 1.104.957 2.239 2.06 2.239h15.974C19.201 20 20 18.979 20 17.761c0-.389-.032-12.401-.032-13.053 0-2.082-.28-2.708-3.994-2.708V0h-1.996v2H5.99V0H3.994v2H1.997C.899 2 0 2.9 0 4l.064 13.761z' />
    </SvgIcon>
);

export default Calendar;
