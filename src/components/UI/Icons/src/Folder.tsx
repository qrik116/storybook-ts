import React, { FC } from 'react';
import SvgIcon, { ISvgIconProps } from '../SvgIcon';

const Folder: FC<ISvgIconProps> = (props) => (
    <SvgIcon width='24' height='24' viewBox='0 0 24 24' {...props}>
        {/* tslint:disable-next-line */}
        <path fillRule='evenodd' d='M 21.6 9.6L 2.4 9.6L 2.4 2.4L 8.3748 2.4L 10.7244 7.2L 21.6 7.2L 21.6 9.6ZM 2.4 21.6L 21.6 21.6L 21.6 12L 2.4 12L 2.4 21.6ZM 12 4.8L 9.6 0L 0 0L 0 24L 24 24L 24 4.8L 12 4.8Z' />
    </SvgIcon>
);

export default Folder;
