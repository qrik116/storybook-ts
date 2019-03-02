import React, { FC, ReactNode, ReactText, CSSProperties } from 'react';
import classnames from 'classnames';

import './static/styles.scss';

export interface ISvgIconProps {
    /** Дочерний элемент */
    children?: ReactNode;
    /** Имена классов */
    className?: string;
    /** Выравнивание сверху */
    top?: boolean;
    /** Выравнивание по центру */
    middle?: boolean;
    /** Выравнивание снизу */
    bottom?: boolean;
    /** Ширина */
    width?: ReactText;
    /** Высота */
    height?: ReactText;
    /** Размер иконки */
    size?: number | 'xs' | 'sm' | 'md' | 'lg' | 'exlg' | '';
    /** ViewBox */
    viewBox?: string;
    [x: string]: any;
}

const sizeArray = ['xs', 'sm', 'md', 'lg', 'exlg'];
const SvgIcon: FC<ISvgIconProps> = (props) => {
    const {
        children,
        className: classNameProp,
        top,
        middle,
        bottom,
        viewBox,
        size,
        ...otherProps
    } = props;

    const style: CSSProperties = {
        ...otherProps.style,
        fontSize: sizeArray.includes(String(size)) ? undefined : size
    };
    const className = classnames('svg-icon', {
        [`svg-icon_${size}`]: sizeArray.includes(String(size)) && size,
        'svg-icon_top': top,
        'svg-icon_middle': middle,
        'svg-icon_bottom': bottom
    }, classNameProp);

    return (
        <svg
            className={className}
            focusable='false'
            viewBox={viewBox}
            aria-hidden='true'
            role='presentation'
            {...otherProps}
            style={Object.keys(style).length ? style : undefined}
        >
            {children}
        </svg>
    );
};

SvgIcon.defaultProps = {
    width: 20,
    height: 20,
    viewBox: '0 0 20 20',
    size: 'xs'
};

export default SvgIcon;
