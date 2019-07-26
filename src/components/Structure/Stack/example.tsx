import React, { FC, Fragment } from 'react';
import marked from 'marked';

import Stack from './';
import ListStack from '../ListStack';

const Example: FC = () => {
    const theStack = new Stack<number>(10);

    theStack.push(20);
    theStack.push(40);
    theStack.push(60);
    theStack.push(80);

    theStack.pop();

    let result = marked(`
~~~ts
const theStack = new Stack<number>(10);\n
theStack.push(20);
theStack.push(40);
theStack.push(60);
theStack.push(80);\n
theStack.pop();\n
const result = [${theStack.display().toString()}] // Результат
~~~
`);

    const theStack2 = new ListStack<string>();
    const word = 'Привет';
    let reverse = '';

    for (const char of word) {
        theStack2.push(char);
    }
    while (!theStack2.isEmpty()) {
        reverse += theStack2.pop();
    }

    result += marked(`
### Реверс слова:

~~~ts
const theStack2 = new Stack<string>(30);
const word = 'Привет';
let reverse = '';\n
for (const char of word) {
    theStack2.push(char);
}
while (!theStack2.isEmpty()) {
    reverse += theStack2.pop();
}
const result = '${reverse}'; // Результат
`);
    const [error, setError] = React.useState('');

    result += marked(`
### Поиск парных скобок:

~~~ts
const theStack3 = new Stack<string>(30);
const code = e.target.value;

for (let i = 0; i < code.length; i++) {
    const char = code[i];

    switch (char) {
        case '{':
        case '[':
            theStack3.push(char);
            break;
        case '}':
        case ']':
            if (theStack3.isEmpty()) {
                setError(\`Error: "\${char}" as \${i}\`);
                break;
            }
            const chx = theStack3.pop();

            if (
                char === '}' && chx !== '{' ||
                char === ']' && chx !== '['
            ) {
                setError(\`Error: "\${char}" at \${i}\`);
                break;
            }
            break;
        default: break;
    }
}
if (!theStack3.isEmpty()) {
    setError('Error: missing right delimiter');
} else {
    setError('Success: search');
}
`);

    const handlerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const theStack3 = new ListStack<string>();
        const code = e.target.value;

        for (let i = 0; i < code.length; i++) {
            const char = code[i];

            switch (char) {
                case '{':
                case '[':
                    theStack3.push(char);
                    break;
                case '}':
                case ']':
                    if (theStack3.isEmpty()) {
                        setError(`Error: "${char}" as ${i}`);
                        return;
                    }
                    const chx = theStack3.pop();

                    if (
                        char === '}' && chx !== '{' ||
                        char === ']' && chx !== '['
                    ) {
                        setError(`Error: "${char}" at ${i}`);
                        return;
                    }
                    break;
                default: break;
            }
        }

        if (!theStack3.isEmpty()) {
            setError('Error: missing right delimiter');
        } else {
            setError('Success: search');
        }
    };

    return (
        <Fragment>
            <div dangerouslySetInnerHTML={{ __html: result }} />
            <input type='text' onChange={handlerChange}/>
            <br/>
            Результат: {error}
        </Fragment>
    );
};

export default Example;
