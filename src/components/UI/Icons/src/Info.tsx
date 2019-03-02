import React, { FC } from 'react';
import SvgIcon, { ISvgIconProps } from '../SvgIcon';

const Info: FC<ISvgIconProps> = (props) => (
    <SvgIcon width={20} height={20} {...props}>
        <path fillRule='evenodd' d='M2 18h16V2H2v16zm-2 2h20V0H0v20zM9 7h2V5H9v2zm0 8h2V9H9v6z'/>
    </SvgIcon>
);

export default Info;
