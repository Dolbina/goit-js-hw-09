// function createPromise(position, delay) {
//   const shouldResolve = Math.random() > 0.3;
//   if (shouldResolve) {
//     // Fulfill
//   } else {
//     // Reject
//   }
// }

// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });

  // Знаходимо елементи: поля форми та кнопку
const refs = {
form: document.querySelector(".form"),
delay: document.querySelector('[name="delay"]'),
step: document.querySelector('[name="step"]'),
amount: document.querySelector('[name = "amount"]'),
submit: document.querySelector(".form button"),
}

// Додаємо слухача до форми
refs.form.addEventListener('submit', onSubmit);

// Колбек-функція
function onSubmit(event) {
 event.preventDefault();
 const amountValue = refs.amount.value;
const delayValue = refs.delay.value;
  const stepValue = refs.step.value;
  console.log(stepValue);
   
}


refs.submit.addEventListener('click', onClick);
function onClick(event) {
  
}




