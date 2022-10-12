function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}


// import flatpickr from 'flatpickr';
// import 'flatpickr/dist/flatpickr.min.css';
// require('flatpickr/dist/themes/confetti.css');
// import Notiflix from 'notiflix';

// const refs = {
//   spanDays: document.querySelector('span[data-days]'),
//   spanHours: document.querySelector('span[data-hours]'),
//   spanMinutes: document.querySelector('span[data-minutes]'),
//   spanSeconds: document.querySelector('span[data-seconds]'),
//   startBtn: document.querySelector('button[data-start]'),
// };

// makeButtonInactive(refs.startBtn);

// let selectedDate = null;
// let intervalId = null;
// let previousSelectedDate = null;

// const options = {
//   enableTime: true,
//   time_24hr: true,
//   defaultDate: new Date(),
//   minuteIncrement: 1,
//   onClose(selectedDates) {
//     selectedDate = selectedDates[0];
//     numberOfSelectedDates = selectedDates.length;

//     if (selectedDate.getTime() - Date.now() < 0) {
//       Notiflix.Notify.warning('Please choose a date in the future');
//       selectedDate = 0;
//       updateTimer(0);
//     } else {
//       if (previousSelectedDate === selectedDate.getTime()) {
//         return;
//       }
//       makeButtonActive(refs.startBtn);
//       stopTimer(intervalId);
//       refs.startBtn.addEventListener('click', onButtonClick);
//     }
//   },
// };

// flatpickr('#datetime-picker', options);

// function onButtonClick() {
//   previousSelectedDate = selectedDate.getTime();
//   makeButtonInactive(refs.startBtn);
//     startTimer();
//     refs.startBtn.removeEventListener('click', onButtonClick);
// }

// function startTimer() {
//   intervalId = setInterval(() => {
//     const timeLeft = selectedDate.getTime() - Date.now();
//     if (timeLeft <= 1100) {
//       clearInterval(intervalId);
//     }
//     updateTimer(timeLeft);
//   }, 1000);
// }

// function stopTimer(id) {
//   clearInterval(id);
// }

// function convertMs(ms) {
//   // Number of milliseconds per unit of time
//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;

//   // Remaining days
//   const days = Math.floor(ms / day);
//   // Remaining hours
//   const hours = Math.floor((ms % day) / hour);
//   // Remaining minutes
//   const minutes = Math.floor(((ms % day) % hour) / minute);
//   // Remaining seconds
//   const seconds = Math.floor((((ms % day) % hour) % minute) / second);

//   return { days, hours, minutes, seconds };
// }

// function addLeadingZero(value) {
//   return value.toString().padStart(2, '0');
// }

// function updateTimer(miliseconds) {
//   refs.spanDays.textContent = addLeadingZero(convertMs(miliseconds).days);
//   refs.spanHours.textContent = addLeadingZero(convertMs(miliseconds).hours);
//   refs.spanMinutes.textContent = addLeadingZero(convertMs(miliseconds).minutes);
//   refs.spanSeconds.textContent = addLeadingZero(convertMs(miliseconds).seconds);
// }

// function makeButtonActive(button) {
//   button.classList.remove('inactive-btn');
// }

// function makeButtonInactive(button) {
//   button.classList.add('inactive-btn');
// }


// // for (let i = 1; i > -1000; i -= 1) {
// //   const result = (1 + 60 * i) / 7;
// //   console.log(i, result)
// //   if (Math.floor(result) === result) {
// //     console.log("I found it")
// //     console.log(i)
// //     break;
// //   }
// // }