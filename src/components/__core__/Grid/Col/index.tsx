import React, { FC, ReactType } from 'react';
import classnames from 'classnames';

import { DEVICE_SIZES } from '../Row';

type TColSize = boolean | number | string;
type TColumn = TColSize | {
    span?: TColSize
    order?: string | number;
    offset?: string | number;
    align?: 'auto' | 'start' | 'end' | 'center' | 'baseline' | 'stretch';
};

export interface IColProps extends React.HTMLAttributes<HTMLElement> {
    /** Базовый класс */
    bsPrefix?: string;
    /** Вы можете использовать пользовательский элемент для этого компонента */
    component?: ReactType<IColProps>;
    /** Количество столбцов для расширения на очень маленьких устройствах (<576 пикселей) */
    xs?: TColumn;
    /** Количество столбцов для охвата на небольших устройствах (≥576px) */
    sm?: TColumn;
    /** Количество столбцов для охвата на средних устройствах (≥768px) */
    md?: TColumn;
    /** Количество столбцов для охвата на больших устройствах (≥992px) */
    lg?: TColumn;
    /** Количество столбцов для расширения на очень больших устройствах (≥1200 пикселей) */
    xl?: TColumn;
}

const Col: FC<IColProps> = (props) => {
    const {
        bsPrefix,
        className,
        component: ComponentProps,
        ...otherProps
    } = props;

    const spans: string[] = [];
    const classes: string[] = [];

    DEVICE_SIZES.forEach(brkPoint => {
        const propValue: TColumn | undefined = otherProps[brkPoint];
        let span, offset, order, align;
        const infix = brkPoint !== 'xs' ? `-${brkPoint}` : '';

        delete otherProps[brkPoint];

        if (propValue !== undefined && typeof propValue === 'object') {
            ({ span = true, offset, order, align } = propValue);
        } else {
            span = propValue;
        }

        if (span !== undefined) {
            spans.push(span === true ? `${bsPrefix}${infix}` : `${bsPrefix}${infix}-${span}`);
        }

        if (order !== undefined) classes.push(`order${infix}-${order}`);
        if (offset !== undefined) classes.push(`offset${infix}-${offset}`);
        if (align !== undefined) classes.push(`align-self${infix}-${align}`);
    });

    if (!spans.length && bsPrefix) {
        spans.push(bsPrefix); // plain 'col'
    }

    const Component = ComponentProps as any;
    const classNames = classnames(className, ...spans, ...classes);

    return (
        <Component {...otherProps} className={classNames} />
    );
};

Col.defaultProps = {
    bsPrefix: 'col',
    component: 'div',
};

export default Col;
