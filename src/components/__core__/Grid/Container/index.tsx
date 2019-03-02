import React, { FC, ReactType } from 'react';
import classnames from 'classnames';

export interface IContainerProps extends React.HTMLAttributes<HTMLElement> {
    /** Базовый класс */
    bsPrefix?: string;
    /** Разрешить контейнеру заполнить все доступное горизонтальное пространство */
    fluid?: boolean;
    /** Вы можете использовать пользовательский элемент для этого компонента */
    component?: ReactType<IContainerProps>;
}

const Container: FC<IContainerProps> = (props) => {
    const {
        bsPrefix,
        fluid,
        component: ComponentProps,
        className,
        ...otherProps
    } = props;

    const Component = ComponentProps as any;
    const classNames = classnames(
        className,
        fluid ? `${bsPrefix}-fluid` : bsPrefix,
    );

    return (
        <Component {...otherProps} className={classNames} />
    );
};

Container.defaultProps = {
    bsPrefix: 'container',
    component: 'div',
    fluid: false,
};

export default Container;
