import ListStack from './';

/**
 * Добавление/Удаление элементов стэка.
 *
 * Вывод элементов.
 */
function ListStackApp() {
    const stack = new ListStack([20, 40]);

    stack.display();

    stack.push(60);
    stack.push(80);
    stack.display();

    stack.pop();
    stack.pop();
    stack.display();
}

(function main(args: string[]) {
    for (const arg of args) {
        switch (arg) {
            case 'ListStackApp':
                ListStackApp();
                break;
            default: break;
        }
    }
})(process.argv.slice(2));
