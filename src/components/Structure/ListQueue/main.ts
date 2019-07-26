import ListQueue from './';

/**
 * Добавление/Удаление элементов стэка.
 *
 * Вывод элементов.
 */
function ListQueueApp() {
    const stack = new ListQueue([20, 40]);

    stack.display();

    stack.insert(60);
    stack.insert(80);
    stack.display();

    stack.remove();
    stack.remove();
    stack.display();
}

(function main(args: string[]) {
    for (const arg of args) {
        switch (arg) {
            case 'ListQueueApp':
                ListQueueApp();
                break;
            default: break;
        }
    }
})(process.argv.slice(2));
