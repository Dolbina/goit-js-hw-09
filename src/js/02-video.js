// В HTML есть <iframe> с видео для Vimeo плеера. Напиши скрипт который будет сохранять текущее время воспроизведения видео в локальное хранилище и, при перезагрузке страницы, продолжать воспроизводить видео с этого времени.

import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

// Знаходження iframe
const iframe = document.querySelector('iframe');

// Створення екземпляра
const player = new Player(iframe);

// Відстеження собития timeupdate (обновление времени воспроизведения), записування в локальне сховище час відтворення, використання throttle для того, щоб час у сховище оновлювався не частіше, ніж раз на секунду 

player.on('timeupdate', throttle((event) => { localStorage.setItem('videoplayer-current-time', event.seconds); }, 1000));

// Перевіряємо на наявність данних, коли читаємо з localStorage. Якщо в localStorage немає ключа, який ви намагаєтесь прочитати, метод getItem(key) поверне вам null.

player.setCurrentTime(localStorage.getItem('videoplayer-current-time') || 0);

