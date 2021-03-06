import React, { FC } from 'react';
import SvgIcon, { ISvgIconProps } from '../SvgIcon';

const Building: FC<ISvgIconProps> = (props) => (
    <SvgIcon width='20' height='20' viewBox='0 0 20 20' {...props}>
        <path d='M9 8h2V6H9v2zm0 4h2v-2H9v2zm2 6v-4H9v4H6V5h8v13h-3zm7-2v2h-2V3h-5V0H9v3H4v15H2v-2H0v4h20v-4h-2z'/>
    </SvgIcon>
);

export default Building;
