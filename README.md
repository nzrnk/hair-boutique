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
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" alt="GH" width="50" height="50"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg" alt="GH" width="50" height="50"/>
  <img src="https://github.com/allure-framework/allure2/blob/main/.idea/icon.png" alt="Allure" width="50" height="50"/>
</div>

Репозиторий содержит в себе набор UI и API тестов, напианных на JavaScript c использованием фреймворка автоматизации Playwright. Настроен Jenkins как CI-система: реализован запуск автотестов, генерация Allure-отчетов, интеграция с ТестОпс и отправка уведомлений в Telegram.
