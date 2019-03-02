import React, { FC } from 'react';
import SvgIcon, { ISvgIconProps } from '../SvgIcon';

const Edit: FC<ISvgIconProps> = props => (
    <SvgIcon {...props}>
        {/* tslint:disable-next-line */}
        <path fillRule='evenodd' d='M0 20h19.676v-1.958H0V20zm6.887-6.853v-2.633l8.435-7.869 1.801 1.998-7.713 8.504H6.887zM20 4.645L15.376 0 4.92 9.688v5.417h5.333L20 4.645z'/>
    </SvgIcon>
);

export default Edit;
