# Онлайн-сервис поиска книг с помощью Google Books API  

## Использованный стек/ технические требования:
+ React
+ MobX
+ React hook form 
+ Axios для взаимодействия с [Google Books API](https://developers.google.com/books/docs/v1/using "Документация Google Books API"). Сгенерирован [Google API key](https://developers.google.com/books/docs/v1/using#APIKey "https://developers.google.com/books/docs/v1/using#APIKey")
+ Адаптивность от 320px до 1920px  
+ максимально переиспользуемые компоненты (организация архитектуры, структуры приложения )  `(использован Feature-Sliced Design)`
+ обработка ошибок - некорректных данных при ошибках API-запроса   
+ Покрытие тестами `(в процессе покрытия тестами)`
+ Typescript  

## **Функционал**
+ форма для поиска - поле и кнопка поиска. По введенной пользователем подстроке производится поиск книг. Триггером к поиску является либо нажатие Enter (когда текстовое поле в фокусе), либо нажатие кнопки поиска.
+ Фильтрация по категориям. Ниже текстового поля располагается селект с категориями: all, art, biography, computers, history, medical, poetry. Если выбрано "all" (выбрано изначально), то поиск производится по всем категориям.
+ Сортировка. Рядом с селектом категорий находится селект с вариантами сортировки: relevance (выбран изначально), newest.
+ Найденные книги отображаются карточками, каждая из которых состоит из изображения обложки книги, названия книги, названия категории и имен авторов. Если для книги приходит несколько категорий, то отображается только первая. Авторы отображаются все. Если не приходит какой-либо части данных, то вместо нее просто пустое место.
Над блоком с карточками отображается количество найденных по запросу книг.
+ Пагинация реализована по принципу 'load more'. Ниже блока с карточками находится кнопка 'Load more', по клику на нее к уже загруженным книгам подгружаются еще. Шаг пагинации - 30.
+ При клике на карточку происходит переход на детальную страницу книги, на которой выводятся ее данные: изображение обложки, название, все категории, все авторы, описание.
+ Во время загрузки книг показывается индикатор загрузки
+ Обработка ошибок - некорректных данных в promise.data при отрисовке, при получении

## **Макет**

![image](https://user-images.githubusercontent.com/96003382/175954085-023509eb-7b9f-424e-9fc8-a418643c727e.png)
![image](https://user-images.githubusercontent.com/96003382/175954113-d94a34b3-c3ac-43f9-b353-70f211410aa1.png)






# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
