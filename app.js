const incCounter = document.querySelector('.counter');
const btnClear = document.querySelector('.btn-counterClear');
const btnAdd = document.querySelector('.btn-counterAdd');
const btnReduce = document.querySelector('.btn-counterReduce');

let counter = 0;

function increment() {
  counter += 1;
  incCounter.innerText = counter;
}

function clear() {
  counter = 0;
  incCounter.innerText = counter;
}

function reduce() {
  counter -= 1;
  incCounter.innerText = counter
}

function negative() { if (counter <= 0) {
  counter = 0;
  incCounter.innerText = counter;
}};

btnAdd.addEventListener('click', () => {
  increment();
});

btnClear.addEventListener('click', () => {
  clear()
});

btnReduce.addEventListener('click', () => {
  reduce();
  negative();
});

