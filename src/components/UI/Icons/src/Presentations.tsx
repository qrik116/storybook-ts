import React, { FC } from 'react';
import SvgIcon, { ISvgIconProps } from '../SvgIcon';

const Presentations: FC<ISvgIconProps> = (props) => (
    <SvgIcon width='20' height='20' viewBox='0 0 20 20' {...props}>
        <path fillRule='evenodd' d='M2 18h16v-8H2v8zm-2 2h20V8H0v12zm5-6h10v-2H5v2zM2 6h16V4H2v2zm2-4h12V0H4v2z' />
    </SvgIcon>
);

export default Presentations;
