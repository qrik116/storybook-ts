import React, { FC } from 'react';
import SvgIcon, { ISvgIconProps } from '../SvgIcon';

const Search: FC<ISvgIconProps> = (props) => (
    <SvgIcon width='24' height='24' viewBox='0 0 24 24' {...props}>
        {/* tslint:disable-next-line */}
        <path fillRule='evenodd' d='M 18.4477 18.4514C 22.6678 14.2304 22.6678 7.38677 18.4477 3.16576C 14.2275 -1.05525 7.38529 -1.05525 3.16513 3.16575C -1.05503 7.38676 -1.05505 14.2304 3.16511 18.4514C 7.38528 22.6724 14.2275 22.6724 18.4477 18.4514ZM 16.5374 16.5407C 19.7025 13.3749 19.7025 8.24221 16.5374 5.07646C 13.3722 1.9107 8.24055 1.9107 5.07544 5.07646C 1.91032 8.24221 1.91032 13.3749 5.07544 16.5407C 8.24056 19.7064 13.3722 19.7064 16.5374 16.5407Z'/>
        <path d='M 17.5928 18.996L 18.9709 17.6213L 24 22.6253L 22.6218 24L 17.5928 18.996Z' />
    </SvgIcon>
);

export default Search;
