const button = document.getElementById('jsstyle');

button.addEventListener('click', (e) => {
  e.preventDefault();
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  const p = document.getElementById('text');
  const container = document.querySelector('body');
  p.setAttribute('style', `color: #${randomColor}; filter: invert(1)`)
  container.setAttribute('style', `background-color: #${randomColor}`);
  p.innerText = `Background set to #${randomColor}`;
});