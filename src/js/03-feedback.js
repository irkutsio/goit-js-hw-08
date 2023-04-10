import throttle from "lodash.throttle";

const formEl = document.querySelector('.feedback-form');
const inputEl = formEl.querySelector('input[name="email"]');
const textareaEl = formEl.querySelector('textarea[name="message"]');
const USER_DATA = 'feedback-form-state';

formEl.addEventListener('input', throttle(onInput, 500));
formEl.addEventListener('submit', onSubmit);

function onInput(event) {
  const userData = {
    email: inputEl.value,
    message: textareaEl.value,
  };
  localStorage.setItem(USER_DATA, JSON.stringify(userData));
};

const savedData = JSON.parse(localStorage.getItem(USER_DATA));
if (savedData) {
    inputEl.value = savedData.email;
    textareaEl.value = savedData.message;
  };


function onSubmit(event) {
  event.preventDefault();
  event.currentTarget.reset();
  const savedData = localStorage.getItem(USER_DATA);
  if(savedData){
    console.log(JSON.parse(savedData));
  };
  localStorage.removeItem(USER_DATA);
};