import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
require('flatpickr/dist/themes/confetti.css');
import Notiflix from 'notiflix';

const refs = {
  spanDays: document.querySelector('span[data-days]'),
  spanHours: document.querySelector('span[data-hours]'),
  spanMinutes: document.querySelector('span[data-minutes]'),
  spanSeconds: document.querySelector('span[data-seconds]'),
  startBtn: document.querySelector('button[data-start]'),
};

makeButtonInactive(refs.startBtn);

let selectedDate = null;
let intervalId = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    selectedDate = selectedDates[0].getTime();
  
    if (selectedDate - Date.now() < 0) {
      Notiflix.Notify.warning('Please choose a date in the future');
      stopTimer(intervalId);
      updateTimer(0);
      return;
    } 

    const timerIsEmpty = refs.spanDays.textContent === '00' && refs.spanHours.textContent === '00' && refs.spanMinutes.textContent === '00' && refs.spanSeconds.textContent === '00';
    
      if (timerIsEmpty) {
        makeButtonActive(refs.startBtn);
        refs.startBtn.addEventListener('click', onButtonClick);
      } 
  },
};

flatpickr('#datetime-picker', options);

function onButtonClick() {
  startTimer();
  makeButtonInactive(refs.startBtn);
  refs.startBtn.removeEventListener('click', onButtonClick);
}

function startTimer() {
  intervalId = setInterval(() => {
    const timeLeft = selectedDate - Date.now();
    if (timeLeft <= 0) {
      clearInterval(intervalId);
      return;
    } 
      updateTimer(timeLeft);
  }, 1000);
}

function stopTimer(id) {
  clearInterval(id);
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

function updateTimer(miliseconds) {
  refs.spanDays.textContent = addLeadingZero(convertMs(miliseconds).days);
  refs.spanHours.textContent = addLeadingZero(convertMs(miliseconds).hours);
  refs.spanMinutes.textContent = addLeadingZero(convertMs(miliseconds).minutes);
  refs.spanSeconds.textContent = addLeadingZero(convertMs(miliseconds).seconds);
}

function makeButtonActive(button) {
  button.classList.remove('inactive-btn');
}

function makeButtonInactive(button) {
  button.classList.add('inactive-btn');
}


