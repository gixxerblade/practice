const buttonContainer = document.querySelector('.btn-container')
buttonContainer.addEventListener('click', (e)=> {
  console.log(e.target)
  e.target.classList.add('red')
})