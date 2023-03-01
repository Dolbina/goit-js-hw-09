// В HTML есть разметка формы. Напиши скрипт который будет сохранять значения полей в локальное хранилище когда пользователь что-то печатает.
// Отслеживай на форме событие input, и каждый раз записывай в локальное хранилище объект с полями email и message, в которых сохраняй текущие значения полей формы. Пусть ключом для хранилища будет строка "feedback-form-state".
// При загрузке страницы проверяй состояние хранилища, и если там есть сохраненные данные, заполняй ими поля формы. В противном случае поля должны быть пустыми.
// При сабмите формы очищай хранилище и поля формы, а также выводи объект с полями email, message и текущими их значениями в консоль.
// Сделай так, чтобы хранилище обновлялось не чаще чем раз в 500 миллисекунд. Для этого добавь в проект и используй библиотеку lodash.throttle.

import throttle from "lodash.throttle";

const STORAGE_KEY = 'feedback-form-state';

// створює пустий об'єкт для запису данних
let formData = {};

function getFormData () {return{ email: refs.input.value, message: refs.textarea.value }}; 

// Знаходить form та textarea, input
const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form textarea'),
  input: document.querySelector('.feedback-form input'),
};

// Додає слухачів до form
refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormInput, 500));

// Визиває функцію, що отримує зі сховища повідомлення з ключем 'feedback-form-state' та перевіряє є повідомлення з таким ключем. Якщо є, то оновлюємо DOM.

populateTextarea();

//  Скидає дефолтне перезавантаження сторінки при submit, перевіряє чи заповненні imput та textarea(якщо не заповненні, то видає повідомлення, що повинні бути заповненні), відправляє форму та очищує

function onFormSubmit(event) {
    event.preventDefault();
    if (refs.textarea.value === "" || refs.input.value === "") {
        return alert('Please fill in all the fields!');
    }
    console.log('отправляем форму');
    console.log(formData);
    event.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
}

// Отримання значення полів та збереження їх у локальному сховищі
 function onFormInput(event) {
   event.preventDefault();
   // записує до об'єкту ім'я поля та його значення
   //formData[event.target.name] = event.target.value;
formData = getFormData();

   // Данні перетворює на рядок та записує у локальне сховище
   let formDataJSON = JSON.stringify(formData);
   localStorage.setItem(STORAGE_KEY, formDataJSON);
 }

// функція, що отримує зі сховища повідомлення з ключем 'feedback-form-state' та перевіряє є повідомлення з таким ключем. Якщо є, то оновлюємо DOM.
// Використовує конструкцію try... catch, щоб запобігти "падіння" скрипта, якщо протитали не валідний JSON

function populateTextarea() {
  let formDataParse = {};
try{
     formDataParse = JSON.parse(localStorage.getItem(STORAGE_KEY));
    
    if (formDataParse.message) {
      refs.textarea.value = formDataParse.message;
    }
    if (formDataParse.email) {
      refs.input.value = formDataParse.email;
      
    }
    formData = getFormData();
  }
catch(err){console.log(err);}
 
}



