const onSubmit = (event) => {
  event.preventDefault();
  const output = document.querySelector('.output')
  const radius = document.querySelector('.radius').value
  const volume = (4/3) * Math.PI * Math.pow(radius, 3) 
  output.innerHTML = `Volume of a sphere with a radius of ${radius} is ${volume}`
  event.target.reset()
}

const form = document.getElementById('form')
form.addEventListener('submit', onSubmit)