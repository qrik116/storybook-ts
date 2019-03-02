import React, { FC } from 'react';
import SvgIcon, { ISvgIconProps } from '../SvgIcon';

const Zoom: FC<ISvgIconProps> = (props) => (
    <SvgIcon width='16' height='16' viewBox='0 0 16 16' {...props}>
        {/* tslint:disable-next-line */}
        <path d="M9 6H8V5a1 1 0 0 0-2 0v1H5a1 1 0 0 0 0 2h1v1a1 1 0 0 0 2 0V8h1a1 1 0 0 0 0-2m-2.01 5.987a4.996 4.996 0 1 1 0-9.993 4.996 4.996 0 0 1 0 9.993m8.696 2.309l-3.005-3.011c-.027-.027-.062-.038-.091-.061a6.961 6.961 0 0 0 1.422-4.218 7.006 7.006 0 1 0-7.006 7.006 6.96 6.96 0 0 0 4.224-1.427c.024.03.036.066.063.094l3.004 3.01c.396.398 1.028.408 1.411.023.384-.385.374-1.019-.022-1.416"/>
    </SvgIcon>
);

export default Zoom;
