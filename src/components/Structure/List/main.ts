import List from './';

/**
 * Добавление элементов в начало списка.
 *
 * Вывод элементов.
 */
function ListApp() {
    const list = new List<number>();

    list.insertFirst(22);
    list.insertFirst(44);
    list.insertFirst(66);
    list.insertFirst(88);

    console.log(`Before: ${list.getValue()}`);

    console.log('--------------------------');
    while (!list.isEmpty()) {
        const dLink = list.deleteFirst();

        if (dLink) {
            console.log(`Deleted: ${dLink.getValueToPrint()}`);
        }
    }
    console.log('--------------------------');

    console.log(`After: ${list.getValue()}`);
}

/**
 * Добавление элементов в начало списка.
 *
 * Вывод элементов.
 *
 * Поиск и удаление элемента.
 */
function ListApp2() {
    const list = new List<number>();

    list.insertFirst(22);
    list.insertFirst(44);
    list.insertFirst(66);
    list.insertFirst(88);

    console.log(`Before: ${list.getValue()}`);

    console.log('--------------------------');
    const findLink = list.find(44);

    if (findLink) console.log(`Found link value ${findLink.getValueToPrint()};`);
    else console.log('Can\'t find link value 44;');

    const findLink2 = list.delete(66);

    if (findLink2) console.log(`Delete link value ${findLink2.getValueToPrint()};`);
    else console.log('Can\'t delete link value 66;');
    console.log('--------------------------');

    console.log(`After: ${list.getValue()}`);
}

/**
 * Добавление элементов вставкой (упорядоченный список).
 *
 * Добавление элемента по значению.
 */
function ListApp3() {
    const list = new List<number>();

    list.insert(20);
    list.insert(40);
    console.log(`Before: ${list.getValue()}`);

    list.insert(10);
    list.insert(30);
    list.insert(50);

    console.log(`Insert Also: ${list.getValue()}`);

    const dLink = list.deleteFirst();

    if (dLink) {
        console.log(`Deleted: ${dLink.getValueToPrint()}`);
    }

    console.log(`After: ${list.getValue()}`);
}

/**
 * Добавление элементов в начало и в конец списка.
 *
 * Вывод элементов.
 *
 * Удаление первых 2 элементов.
 */
function FirstLastApp() {
    const list = new List<number>();

    list.insertFirst(22);
    list.insertFirst(44);
    list.insertFirst(66);

    list.insertLast(11);
    list.insertLast(33);
    list.insertLast(55);

    console.log(`Before: ${list.getValue()}`);

    console.log('--------------------------');
    let dLink = list.deleteFirst();
    if (dLink) {
        console.log(`Deleted: ${dLink.getValueToPrint()}`);
    }
    dLink = list.deleteFirst();
    if (dLink) {
        console.log(`Deleted: ${dLink.getValueToPrint()}`);
    }
    console.log('--------------------------');

    console.log(`After: ${list.getValue()}`);
}

/**
 * Добавление элементов в начало и в конец списка.
 *
 * Вывод элементов в 2-х направления.
 *
 * Удаление элементов.
 */
function DoublyLinkedApp() {
    const list = new List<number>();

    list.insertFirst(22);
    list.insertFirst(44);
    list.insertFirst(66);

    list.insertLast(11);
    list.insertLast(33);
    list.insertLast(55);

    console.log(`Before:`);
    console.log(`List (first --> last): ${list.getValue()}`);
    console.log(`List (last --> first): ${list.getValue('backward')}`);

    console.log('--------------------------');
    let dLink = list.deleteFirst();
    if (dLink) {
        console.log(`Deleted: ${dLink.getValueToPrint()}`);
    }
    dLink = list.deleteLast();
    if (dLink) {
        console.log(`Deleted: ${dLink.getValueToPrint()}`);
    }
    dLink = list.delete(11);
    if (dLink) {
        console.log(`Deleted: ${dLink.getValueToPrint()}`);
    }
    console.log(`List (first --> last): ${list.getValue()}`);
    list.insertAfter(22, 77);
    list.insertAfter(33, 88);
    console.log('--------------------------');

    console.log(`After:`);
    console.log(`List (first --> last): ${list.getValue()}`);
}

/**
 * Работа с итератором.
 *
 * Добаление и удаление кратных 3 элементов
 */
function InterIterApp() {
    const list = new List<number>();
    const iter = list.getIterator();

    iter.insertAfter(21);
    iter.insertAfter(40);
    iter.insertAfter(30);
    iter.insertAfter(7);
    iter.insertAfter(45);

    console.log(`Before: ${list.getValue()}`);

    console.log('--------------------------');
    iter.reset();
    let link = iter.getCurrent();

    while (link) {
        if (link && !(link.data % 3)) {
            const dLink = iter.deleteCurrent();

            if (dLink) {
                console.log(`Deleted: ${dLink.getValueToPrint()}`);
            }
        }

        link = iter.nextLink();
    }
    console.log('--------------------------');

    console.log(`After: ${list.getValue()}`);
}

/**
 * Забиваем память компа.
 */
function ListOutOfMemory() {
    const list = new List<number>();
    let i = 0;

    while (true) {
        list.insertLast(Math.random() * 100000);
        i++;

        if (!(i % 1000000)) console.log(i / 1000000);
    }
}

(function main(args: string[]) {
    for (const arg of args) {
        switch (arg) {
            case 'ListApp':
                ListApp();
                break;
            case 'ListApp2':
                ListApp2();
                break;
            case 'ListApp3':
                ListApp3();
                break;
            case 'FirstLastApp':
                FirstLastApp();
                break;
            case 'DoublyLinkedApp':
                DoublyLinkedApp();
                break;
            case 'InterIterApp':
                InterIterApp();
                break;
            case 'ListOutOfMemory':
                ListOutOfMemory();
                break;
            default: break;
        }
    }
})(process.argv.slice(2));
