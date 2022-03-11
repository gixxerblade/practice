const btn = document.querySelector('.btn')

btn.addEventListener('click', () => {
  const url = window.location.href
  const div = document.querySelector('.url')
  div.textContent = url
})

