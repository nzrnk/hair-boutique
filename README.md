## Проект автоматизации тестирования для сайта hair-boutique
---
## Содержание
- [Описание](#Описание)
- [Стек](#Стек)
- [Тест-кейсы](#Тест-кейсы)
- [Запуск тестов и генерация отчетов](#Запуск-тестов-и-генерация-отчетов)
- [Запуск workflow в GitHub Actions](#Запуск-workflow-в-Github-Actions)
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

Репозиторий содержит в себе набор UI и API тестов, напианных на JavaScript c использованием фреймворка автоматизации Playwright. Настроен Jenkins как CI-система: реализован запуск автотестов, генерация Allure-отчетов, интеграция с ТестОпс и отправка уведомлений в Telegram.
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
