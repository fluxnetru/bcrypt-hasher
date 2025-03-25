# Password Hasher

![GitHub License](https://img.shields.io/github/license/fluxnetru/bcrypt-hasher?style=flat-square)  
![GitHub Issues](https://img.shields.io/github/issues/fluxnetru/bcrypt-hasher?style=flat-square)  
![GitHub Stars](https://img.shields.io/github/stars/fluxnetru/bcrypt-hasher?style=flat-square)  
![Made with Love](https://img.shields.io/badge/Made%20with-%E2%9D%A4-red?style=flat-square)

Бесплатный сервис для безопасного хеширования паролей с использованием bcrypt. Разработан командой [Fluxnet.ru](https://github.com/fluxnetru) для упрощения передачи данных HR-специалистам.

## О проекте

Password Hasher — это веб-инструмент, который позволяет безопасно хешировать временные пароли с помощью bcrypt прямо в браузере. Никаких внешних запросов, всё локально — ваши данные в безопасности.

### Особенности
- Простой и интуитивный интерфейс на React
- Настраиваемое количество раундов (от 8 до 12)
- Интерактивные элементы и плавные анимации
- Полная совместимость с форматом bcrypt (<code>$2a$...</code>)

## Как использовать

1. Открой сайт по ссылке: <a href="https://fluxnetru.github.io/bcrypt-hasher">https://fluxnetru.github.io/bcrypt-hasher</a>.
2. Введи временный пароль в поле ввода.
3. Выбери количество раундов (рекомендуем 10).
4. Нажми <code>Захешировать</code>.
5. Скопируй полученный хеш и передай его HR.

Пример хеша для пароля <code>123</code> с 10 раундами:  
<code>$2a$10$W5z5X8Y8Z8Y8Z8Y8Z8Y8Z.Ou9vX8Y8Z8Y8Z8Y8Z8Y8Z8Y8Z8Y8Z8Y</code>

## Установка

Сайт находится в папке <code>/docs</code> (это единственный выход для деплоя на GitHub Pages). Для локального запуска:

1. Склонируй репозиторий:
   <code>git clone https://github.com/fluxnetru/bcrypt-hasher.git</code>
2. Установи зависимости:
   <code>npm install</code>
3. Запусти проект:
   <code>npm run dev</code>
4. Открой <code>http://localhost:5173</code> в браузере.

### Доступ через GitHub Pages
Сайт доступен по адресу: <a href="https://fluxnetru.github.io/bcrypt-hasher">https://fluxnetru.github.io/bcrypt-hasher</a>.  
Просто открой ссылку и пользуйся!

## Структура проекта

- <code>index.html</code> — Основная страница
- <code>src/App.jsx</code> — Главный компонент
- <code>src/components/</code> — Компоненты (Hasher, InfoSection, Toast)
- <code>src/styles.css</code> — Стили с анимациями и интерактивностью
- <code>src/main.jsx</code> — Точка входа

## Технологии

- React 18
- Vite
- <code>bcryptjs</code> для локального хеширования
- <code>react-icons</code> для иконок
- CSS3 с анимациями

## Вклад

Хочешь улучшить проект? Мы рады любым предложениям!
1. Форкни репозиторий.
2. Создай ветку: <code>git checkout -b feature/awesome-idea</code>
3. Сделай изменения и закоммить: <code>git commit -m "Добавил крутую фичу"</code>
4. Запушь: <code>git push origin feature/awesome-idea</code>
5. Создай Pull Request.

## Лицензия

Проект распространяется под лицензией MIT. Подробности в файле <code>LICENSE</code>.

## Контакты

Разработано командой [Fluxnet.ru](https://github.com/fluxnetru).  
Вопросы? Пиши на [fluxnet.ru@gmail.com](mailto:fluxnet.ru@gmail.com).

Сделано с ❤️ для безопасной передачи данных!