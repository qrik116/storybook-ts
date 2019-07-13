import React from 'react';
import marked from 'marked';
import { storiesOf } from '@storybook/react';
import { select, boolean } from '@storybook/addon-knobs';

import Icons from './';
import { Container } from '../../__core__/Grid';

const textInfo = marked(`
Иконки

# Usage
~~~js
import { Icons } from 'react-trendagent-ui';
~~~
~~~js
<Icons.EditIcon {...someProps} />
~~~
`);

const style = {
    button: {
        padding: '15px 15px 12px'
    },
    span: {
        display: 'block',
        marginTop: '10px'
    }
};

storiesOf('UI / Icons', module)
    .addParameters({
        info: { text: textInfo }
    })
    .add(
        'Default',
        () => {
            const generalProps = {
                top: boolean('top', false),
                middle: boolean('middle', false),
                bottom: boolean('bottom', false),
                size: select('size', ['xs', 'sm', 'md', 'lg', 'exlg', ''], 'xs')
            };

            return (
                <Container
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(auto, 200px))',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gridGap: '20px',
                        textAlign: 'center'
                    }}
                >
                    {Object.keys(Icons).map((iconName, key) => {
                        const Icon = Icons[iconName];

                        return (
                            <button style={style.button} key={key} onClick={handlerClick}>
                                <Icon {...generalProps} />
                                <span style={style.span}>{iconName}</span>
                            </button>
                        );
                    })}
                </Container>
            );
        }
    );

function handlerClick(e: React.MouseEvent<HTMLButtonElement>) {
    const aux = document.createElement('input');

    aux.value = `<Icons.${e.currentTarget.innerText} />`;
    document.body.appendChild(aux);

    try {
        aux.select();
        document.execCommand('copy');
    } catch (err) {
        console.log(err);
    }
    document.body.removeChild(aux);
}
