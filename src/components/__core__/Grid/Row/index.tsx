import React, { FC, ReactType } from 'react';
import classnames from 'classnames';

interface IRow {
    direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
    wrap?: 'wrap' | 'nowrap' | 'wrap-reverse';
    align?: 'start' | 'end' | 'center' | 'baseline' | 'stretch';
    justify?: 'start' | 'end' | 'center' | 'between' | 'around';
}

export interface IRowProps extends React.HTMLAttributes<HTMLElement> {
    /** Базовый класс */
    bsPrefix?: string;
    /** Удаляет отступы между Col, а также любые добавленные отрицательные внешние отступы. */
    noGutters?: boolean;
    /** Вы можете использовать пользовательский элемент для этого компонента */
    component?: ReactType<IRowProps>;
    /** Количество столбцов для расширения на очень маленьких устройствах (<576 пикселей) */
    xs?: IRow;
    /** Количество столбцов для охвата на небольших устройствах (≥576px) */
    sm?: IRow;
    /** Количество столбцов для охвата на средних устройствах (≥768px) */
    md?: IRow;
    /** Количество столбцов для охвата на больших устройствах (≥992px) */
    lg?: IRow;
    /** Количество столбцов для расширения на очень больших устройствах (≥1200 пикселей) */
    xl?: IRow;
}

export const DEVICE_SIZES = ['xl', 'lg', 'md', 'sm', 'xs'];

const Row: FC<IRowProps> = (props) => {
    const {
        bsPrefix,
        noGutters,
        component: ComponentProps,
        className,
        ...otherProps
    } = props;

    const classes: string[] = [];

    DEVICE_SIZES.forEach(brkPoint => {
        const propValue: IRow | undefined = otherProps[brkPoint];
        let direction, wrap, align, justify;
        const infix = brkPoint !== 'xs' ? `-${brkPoint}` : '';

        delete otherProps[brkPoint];

        if (propValue !== undefined && typeof propValue === 'object') {
            ({ direction, wrap, justify, align } = propValue);
        }

        if (direction !== undefined) classes.push(`flex${infix}-${direction}`);
        if (wrap !== undefined) classes.push(`flex${infix}-${wrap}`);
        if (justify !== undefined) classes.push(`justify-content${infix}-${justify}`);
        if (align !== undefined) classes.push(`align-items${infix}-${align}`);
    });

    const Component = ComponentProps as any;
    const classNames = classnames(
        className,
        bsPrefix,
        noGutters && 'no-gutters',
        ...classes
    );

    return (
        <Component {...otherProps} className={classNames} />
    );
};

Row.defaultProps = {
    bsPrefix: 'row',
    component: 'div',
    noGutters: false,
};

export default Row;
