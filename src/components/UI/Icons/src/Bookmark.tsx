import React, { FC } from 'react';
import SvgIcon, { ISvgIconProps } from '../SvgIcon';

const Bookmark: FC<ISvgIconProps> = ({ full = false, ...props }) => (
    <SvgIcon width='20' height='20' viewBox='0 0 20 20' {...props}>
        {full ? (
            <path transform='translate(3, 0)' fillRule='evenodd' d='M 0 0L 14 0L 14 20L 7 14.872L 0 20L 0 0Z'/>
        ) : (
            <path
                transform='translate(3, 0)'
                fillRule='evenodd'
                d='M 12 16L 7 12.708L 2 16L 2 2L 12 2L 12 16ZM 0 0L 0 20L 7 14.872L 14 20L 14 0L 0 0Z'
            />
        )}
    </SvgIcon>
);

export default Bookmark;
