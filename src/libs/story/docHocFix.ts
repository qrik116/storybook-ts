/**
 * Исправление документации, обернутых декоратором компонентов
 * @param компонент, обернутый декоратором
 * @param исходный компонент
 */
export default function docHocFix(hoc: any, defaultComp: any) {
    hoc.displayName = defaultComp.prototype.constructor.name;
    Object.keys(defaultComp).forEach((name) => {
        hoc[name] = defaultComp[name];
    });
}
