addEventListener('submit', (e) => {
  e.preventDefault();
  const output = document.getElementById('output');
  const mass = document.getElementById('mass').value;
  const radius = document.getElementById('radius').value;
  console.log(mass, radius);
  output.innerText = `${mass} ${radius}`
})