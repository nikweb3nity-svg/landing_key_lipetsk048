# Золотой Ключик — лендинг аварийного вскрытия замков в Липецке

Одностраничный SEO-friendly лендинг на Next.js, TypeScript и Tailwind CSS. Проект не завязан на serverless-only возможности Vercel: форма отправляется в обычный API route с `runtime = "nodejs"`, а production-запуск выполняется через `npm run build` и `npm run start`.

## Локальный запуск

```bash
npm install
npm run dev
```

Сайт откроется на `http://localhost:3000`.

Production-проверка:

```bash
npm run build
npm run start
```

На Windows, если PowerShell блокирует `npm.ps1`, можно использовать те же команды через `npm.cmd`:

```bash
npm.cmd install
npm.cmd run dev
npm.cmd run build
npm.cmd run start
```

## Структура проекта

```text
src/app/page.tsx             Главная страница лендинга
src/app/layout.tsx           SEO metadata, OpenGraph, общий layout
src/app/api/lead/route.ts    Универсальный backend handler заявки
src/app/privacy/page.tsx     Политика конфиденциальности
src/app/agreement/page.tsx   Согласие на обработку персональных данных
src/components               Переиспользуемые компоненты
src/data/site.ts             Телефоны, цены, услуги, отзывы, FAQ, районы
public/images                Легкие SVG-визуалы, которые можно заменить фото
.env.example                 Переменные окружения для будущих интеграций
```

## Где менять данные

Телефоны, город, режим работы, цены, услуги, отзывы, FAQ и районы находятся в:

```text
src/data/site.ts
```

Основные поля:

- `company.primaryPhone` — мобильный номер и ссылка `tel:`.
- `company.cityPhone` — городской номер и ссылка `tel:`.
- `prices` — список цен.
- `gallery` — подписи и пути к визуалам.

## Подключение отправки заявок

Форма отправляет POST-запрос на:

```text
src/app/api/lead/route.ts
```

В файле уже оставлены комментарии, куда вставить:

- email для заявок;
- SMTP-доступы;
- Telegram Bot Token;
- `chat_id`;
- VK API параметры.

Переменные перечислены в `.env.example`. Для локального запуска создайте `.env.local` и заполните нужные значения.

## Деплой на Vercel

1. Загрузите проект в GitHub/GitLab.
2. Создайте новый проект в Vercel и выберите репозиторий.
3. Framework Preset: `Next.js`.
4. Build Command: `npm run build`.
5. Output Directory оставьте пустым.
6. Добавьте переменную `NEXT_PUBLIC_SITE_URL` с будущим доменом.
7. После подключения домена обновите `NEXT_PUBLIC_SITE_URL`.

## Перенос на Beget/VPS

На VPS нужен Node.js 20+ и процесс-менеджер, например PM2 или systemd.

Базовый сценарий:

```bash
npm install
npm run build
npm run start
```

Для постоянной работы на сервере обычно добавляют:

- reverse proxy через Nginx;
- запуск `npm run start` через PM2 или systemd;
- переменные окружения в `.env` или настройках сервера;
- домен и SSL-сертификат через Nginx/Certbot или панель хостинга.

Важно: в `next.config.mjs` не используется `output: "export"`, потому что проекту нужен Node.js API route для формы.
