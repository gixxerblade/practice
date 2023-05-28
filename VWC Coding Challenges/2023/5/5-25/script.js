//Write an function called to that takes a DOM element selector and an object that moves the DOM element by the specified distance over the specified time.
// Examples
// to('.box', { x: 100, duration: 1 })
// => translateX elements with class `box`, and takes 1s
// 

const form = document.getElementById('form');

document.addEventListener('DOMContentLoaded', () => {
  const boxes = document.querySelectorAll('.selectables .box');
  const select = document.querySelector('#select');
  boxes.forEach((box) => {
    const option = document.createElement('option');
    const content = box.querySelector('.text').textContent;
    option.value = content;
    option.text = content;
    option.id = content.toLowerCase().split(' ').join('')
    select.add(option);
  })
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const toX = document.getElementById('toX');
  const toY = document.getElementById('toY');
  const duration = document.getElementById('duration');
  const select = document.getElementById('select');
  const toXLabel = document.querySelector(`label[for=${toX.id}]`); 
  const toYLabel = document.querySelector(`label[for=${toY.id}]`); 
  const durationLabel = document.querySelector(`label[for=${duration.id}]`); 
  const selectLabel = document.querySelector(`label[for=${select.id}]`); 
  const error = document.querySelector('.error');
  const selectedOptionId = select.options[select.selectedIndex].id;
  const { value: selectValue } = select;
  const { value: toXValue } = toX;
  const { value: toYValue } = toY;
  const { value: durationValue } = duration;
  console.log(JSON.stringify({
    toX: toX.value,
    toY: toY.value,
    duration: duration.value,
    select: selectValue,
  }));
  if (![toXValue, toYValue, durationValue, selectValue].every(Boolean)) {
    error.style.padding = '16px';
    error.textContent = 'Missing some values!';
    return;
  }
  error.style.padding = 0;
  error.textContent = '';
})