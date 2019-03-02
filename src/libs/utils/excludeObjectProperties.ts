import { Omit } from 'react-router';

/**
 * Удаление указанных свойств объекта.
 * Исходный объект остается неизменным.
 */
function excludeObjectProperties<P extends object, U extends string & keyof P>(obj: P, keys: U[]): Omit<P, U> {
    const target = Object.keys(obj).reduce((accum, value) => {
        if (!keys.includes(value as any)) accum[value] = obj[value];
        return accum;
    }, {});

    return target as any;
}

export default excludeObjectProperties;
