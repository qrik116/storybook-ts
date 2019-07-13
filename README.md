# Storybook 5 with typescript

version: 2.5.1;

# Темы
Модуль поставляется с готовым пресетом стилей для компонентов, по необходимости нужно подключать файлик темы в точку входа приложения.

```js
// app.js

import 'react-ui/dist/components/__theme__/preset-1.scss';
```

Готовый набор пресетов:
- preset-1.scss - Тема 1

Так же, существует возможность подключить отдельные файлы стили компонентов.

```js
import 'react-ui/dist/components/AnyComponent/static/styles/style';
```
___
**PS**: _Для корректной работы `develop mode`, в настройках webpack необходимо создать отдельную конфигурацию загрузки стилей темы_
```js
const sassGenLoaders = [
    {
        loader: 'css-loader',
        options: { sourceMap: true }
    },
    'resolve-url-loader',
    {
        loader: 'postcss-loader',
        options: {
            plugins: [require('autoprefixer')]
        }
    },
    {
        loader: 'sass-loader',
        options: { sourceMap: true }
    }
];


{
    test: /react-ui.+\.scss$/, // Для файлов UI
    use: [
        {
            loader: 'style-loader',
            options: {
                insertAt: 'top',
                sourceMap: true
            }
        },
        ...sassGenLoaders
    ]
}, {
    test: /(?<!react-ui.+)\.scss$/, // Для остальных файлов
    use: [
        {
            loader: 'style-loader',
            options: {
                sourceMap: true
            }
        },
        ...sassGenLoaders
    ]
},
```

# Установка версии проекта UI-компонентов
Лучше делать из ветки master.

**Обязательно** нужно изменить версию в package.json. И в других местах проекта тоже не помешает.

На нужный коммит устанавливаем метку - tag:

```bash
git tag -a v1.3.1 6646d23 -m "Изменяем версию: v1.3.1 - DetectCity"
```

Закидываем метки в удаленный репозиторий:

```bash
git push origin --tags || git push origin v1.3.1
```

Теперь они доступны. Посмотреть список меток:

```bash
git tag
```

Посмотреть детали конкретной метки:

```bash
git show v1.3.5
```

# Использование UI-компонентов в другом проекте#
В `config` webpack'а для девелопмента и продакшна изменить правило для babel, в связи с тем, что webpack не проходит по npm-модулям:

```js
{
    test: /\.jsx?$/,
    include: [
        path.resolve('src'),
        path.resolve('node_modules', 'react-ui')
    ],
    loader: 'babel-loader'
}
```

# Установка #
1.Устанавливаем зависимости
```bash
npm install
```
Для Windows:
```bash
npm install --msvs_version=2015
```
### Windows: проблемы установки, которые придется решить сначала: ###
* node-gyp [https://www.npmjs.com/package/node-gyp#installation](https://www.npmjs.com/package/node-gyp#installation)
* node-canvas [https://github.com/Automattic/node-canvas/wiki/Installation---Windows](https://github.com/Automattic/node-canvas/wiki/Installation---Windows)

# Разработка
- В проекте существует файлики `index.d.ts` и `declare.d.ts`, они отвечают за описание компонентов для build версии проекта, их необходимо держать в актуальном состоянии, для правильной работы IntelliSense.
- После каждой итерации разработки, необходимо актуализировать информацию.

> ВНИМАНИЕ!

При импорте интерфейсов и типов с помощью алиасов
```js
import * from '@component/Button';
```
возникает проблема с генерацией документации для story's. Чтобы избежать данной проблемы следует использовать относительную маршрутизацию.
```js
import * from '../../../Button';
```

### Иконки
Не нужно иконки вставлять в стили как фон или в псевдоэлементы. Используйте компоненты иконок.

### Цвета и брейкпоинт
В дизайн системе присутствует конфигурационный файл со всеми цветами `(src|dist)/components/__core__/variables/_styles.scss`.

# Запуск в дев-режиме без документации
    $ npm run story
    $ npm run story-bsync // BrowserSync

# Запуск в дев-режиме с документацией
    $ npm run story-doc
    $ npm run story-bsync-doc // BrowserSync

# Build сборка storybook
    $ npm run story-build

# Сборка проекта
    $ npm run build
После сборки build версии проставляется метка версии.
