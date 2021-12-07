const button = document.querySelector('.button');

let count = 1;
button.addEventListener('click', () => {
  count++;
  const isOdd = count & 1;
  const text = document.querySelectorAll('.text');
  text.forEach((el) => {
    if (!isOdd || count === 1) {
      el.classList.add('text-clicked');
    }
    if (isOdd) {
      el.classList.remove('text-clicked');
    }
  });
});
