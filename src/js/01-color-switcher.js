const refs = {
    startBtn: document.querySelector("button[data-start]"),
    stopBtn: document.querySelector("button[data-stop]"),
    body: document.querySelector('body'),
}
let intervalId = null;
makeBtnInactive(refs.stopBtn);

refs.startBtn.addEventListener('click', onStartBtnClick);
refs.stopBtn.addEventListener('click', onStopBtnClick);

function onStartBtnClick() {
    startChangingBgColor();

    makeBtnActive(refs.stopBtn);
    makeBtnInactive(this);

    this.removeEventListener('click', onStartBtnClick);
}

function onStopBtnClick() {
    stopChangingBgColor(intervalId); 

    makeBtnActive(refs.startBtn);
    makeBtnInactive(this);

    refs.startBtn.addEventListener('click', onStartBtnClick);
}

function startChangingBgColor() {
intervalId = setInterval(() => {
    refs.body.style.backgroundColor = getRandomHexColor();
}, 1000);
}

function stopChangingBgColor(id) {
clearInterval(id);
}

function makeBtnInactive(btn) {
    btn.classList.add('inactive-btn');
}

function makeBtnActive(btn) {
    btn.classList.remove('inactive-btn');
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}