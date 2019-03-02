import React, { FC } from 'react';
import SvgIcon, { ISvgIconProps } from '../SvgIcon';

const Error: FC<ISvgIconProps> = props => (
    <SvgIcon width='20' height='20' viewBox='0 0 20 20' {...props}>
        {/* tslint:disable-next-line */}
        <path d='M14.95 3.636l1.414 1.414L5.05 16.364 3.636 14.95 14.95 3.636zM10 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm0-18C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0z'/>
    </SvgIcon>
);

export default Error;
