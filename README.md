# Storybook 4 with typescript

version: 0.0.1;

# Установка #
1.Устанавливаем зависимости
```
npm install
```

# Запуск в дев-режиме без генерации документации
    $ npm run story

# Запуск в дев-режиме с генерацией документации
    $ npm run story-doc

# Сборка проекта
    $ npm run build

# Структура:
- config - Конфиги для node, webpack, etc.
- src
    - сomponents - Компоненты
        - \_\_core\_\_ - простые
        - UI - составные
    - libs - вспомогательные модули
