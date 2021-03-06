import React, { FC } from 'react';
import SvgIcon, { ISvgIconProps } from '../SvgIcon';

const Profile: FC<ISvgIconProps> = (props) => (
    <SvgIcon width='20' height='20' viewBox='0 0 20 20' {...props}>
        {/* tslint:disable-next-line */}
        <path d="M18 18h-.037c.152-2.903-1.672-6.231-4.968-7.578a3.997 3.997 0 0 0 .974-2.601 4.006 4.006 0 0 0-4-4.007c-2.209 0-4 1.788-4 3.997 0 .993.382 1.888.981 2.587C4.133 11.548 2 14.252 2 17.449V2h16v16zM7.969 7.808c0-1.103.897-2 2-2s2 .897 2 2a2 2 0 0 1-1.958 1.996l-.042-.002-.043.002a2 2 0 0 1-1.957-1.996zM15.963 18H3.975c-.001 0-.006-.115-.006-.156 0-3.161 2.494-5.974 6.042-6.034 3.289.023 5.958 2.74 5.958 6.034 0 .041-.005.156-.006.156zM0 20h20V0H0v20z"/>
    </SvgIcon>
);

export default Profile;
