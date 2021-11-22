# React Google Books

[Протестировать приложение](https://alexkon30.github.io/react-google-books/)

## Основные возможности приложения

- Поиск книг
- Настройка поиска по категориям, релевантности, давности
- Отображение количества результатов поиска
- Просмотр информации отдельно по любой книге
- Пагинация результатов поиска (по 30 результатов)

## Стек технологий

- React
- ReactDOM
- React Router DOM
- MobX
- Bootstrap
- Google Books API

## Запуск приложения

Для запуска приложения необходимо сделать следующее:

- Клонировать репозиторий

```js
git clone https://github.com/Alexkon30/react-google-books.git
```

- Установить зависимости

```bash

npm i


```

- Создать файл `config.js` в директории проекта `src` для хранения Google Books API key

```js
const settings = {
  key: 'key',
};

export default settings;
```

- Запустить приложение

```bash

npm start

```

## Скриншоты приложения

Главная страница

![1](./img/1.png)

Страница выбранной книги

![2](./img/2.png)
