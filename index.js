const demoEl = document.querySelector('#demo');
const btnEl = document.querySelector('.date-btn');
console.log(btnEl);

function getTime() {
  demoEl.textContent = Date();
}

btnEl.addEventListener('click', getTime);

