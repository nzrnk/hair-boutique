## Проект автоматизации тестирования для сайта hair-boutique
---
## Содержание
- [Описание](#Описание)
- [Стек](#Стек)
- [Тест-кейсы](#Тест-кейсы)
- [Запуск тестов и генерация отчетов](#Запуск-тестов-и-генерация-отчетов)
- [Запуск пайплайна автотестов в Jenkins](#Запуск-пайплайна-автотестов-в-Jenkins)
- [Пример Allure отчета](#Пример-Allure-отчета)

---
## Описание

Данный репозиторий демонстрирует пример полного цикла автоматизации тестирования для проекта [Hair-Boutique.com](https://hair-boutique.ru/). Сайт относится к категории e-commerce (b2c) и является интернет-магазином для продажи искусственных волос, товаров и аксессуаров к ним, a так же оказанию различного вида услуг, связанных с данной областью.

---
## Стек
<div align="center">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="JS" width="50" height="50"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/playwright/playwright-original.svg" alt="PW" width="50" height="50" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" alt="GH" width="50" height="50" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg" alt="Jenkins" width="50" height="50"/>
  <img src="https://github.com/allure-framework/allure2/blob/main/.idea/icon.png" alt="Allure" width="50" height="50"/>
  <img src="https://camo.githubusercontent.com/626a8a0d75f12feb6d876c5bfb3528f3af7fdcb65a996fa7d51c7b5236b3420f/68747470733a2f2f736f667466696e6465722e72752f75706c6f61642f7374796c65732f6c6f676f2f7075626c69632f6c6f676f2f6c6f676f2d323630352e706e673f69746f6b3d767156713163376a" alt="TestOps" width="50" height="50"/>
  <img src="https://upload.wikimedia.org/wikipedia/commons/8/83/Telegram_2019_Logo.svg" alt="Telegram" width="50" height="50"/>
</div>

Репозиторий содержит в себе набор UI и API тестов, напиcанных на JavaScript c использованием фреймворка автоматизации Playwright. Настроен Jenkins как CI-система: реализован запуск автотестов, генерация Allure-отчетов, интеграция с ТестОпс и отправка уведомлений в Telegram.

---
## Тест-кейсы
- UI
  - Добавить товар в корзину
  - Добавить товар в избранное
  - Рассчитать стоимость наращивания волос и отправить форму рассчета
  - Зарегистрировать тип пользователя "частное лицо"
  - Авторизоваться на сайте с типом пользователя "частное лицо" c помощью пароля
- API
  - Добавить товар в избренное
  - Отправить форму "Купить в 1 клик"
  - Получить список адресов доставки текущего пользователя
  - Добавить новый адрес в список адресов доставки текущего пользователя
  - Сделать выбранный адрес доставки избранным
---
## Запуск тестов и генерация отчетов

Команда для локального запуска всех тестов
```
npm run allTests 
```
Команда для локального запуска UI тестов
```
npm run uiTests
```
Команда для локального запуска API тестов
```
npm run apiTests
```

Команда для локального формирования отчета

```
npm run create-report
npm run open-report
```
---
## Запуск пайплайна автотестов в Jenkins

Для запуска пайплайна необходимо авторизоваться на сайте [Jenkins](https://jenkins.autotests.cloud/login?from=%2F), перейти в соответствующую [джобу](https://jenkins.autotests.cloud/job/002-nzrnk-HB/) и нажать Build Now. После завершения сборки в разделе Builds напротив номера сборки появятся иконки Allure (cсылка на Allure-отчет так же есть на основной странице) и ТестОпс, перейдя по которым можно посмотреть результаты сборки. Ссылка на Allure-отчет так же есть на основной странице. Так же после завершения сборки Jenkins отправит уведомление с результатами в Telegram.
