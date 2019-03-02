import React, { FC } from 'react';
import SvgIcon, { ISvgIconProps } from '../SvgIcon';

const Avatar: FC<ISvgIconProps> = (props) => (
    <SvgIcon width='20' height='20' viewBox='0 0 20 20' {...props}>
        {/* tslint:disable-next-line */}
        <path d="M10 10c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4m3.758.673A5.983 5.983 0 0 0 16 6a6 6 0 1 0-9.758 4.673C2.583 12.048 0 15.445 0 20h2c0-5 3.589-8 8-8s8 3 8 8h2c0-4.555-2.583-7.952-6.242-9.327"/>
    </SvgIcon>
);

export default Avatar;
