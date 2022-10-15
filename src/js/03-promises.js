import { Notify } from 'notiflix/build/notiflix-notify-aio';

const formEl = document.querySelector('.form');

formEl.addEventListener('submit', onSubmitButtonClick);

function onSubmitButtonClick(evt) {
  evt.preventDefault();

  const { delay, step, amount } = evt.target.elements;
  if (delay.value < 0 || step.value < 0 || amount.value < 0) {
    alert('Please enter non-negative values');
    return;
  }

  for (let i = 1; i <= Number(amount.value); i += 1) {
    const newDelay = Number(delay.value) + (i - 1) * Number(step.value);

    createPromise(i, newDelay)
      .then(displaySuccessfulNotification)
      .catch(displayFailureNotification);
  }
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

function displaySuccessfulNotification({ position, delay }) {
  Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
}

function displayFailureNotification({ position, delay }) {
  Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);  
}