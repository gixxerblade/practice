/**
 * Write a JavaScript program to highlight the bold words of the following paragraph, on mouse over.
 * <b>We</b> are <b>the</b> few and the proud. In a <>country<> filled with untwisted <>balloons<>. 
 * <>We<> heed the call and are <>never<> too late.
 */
const header = document.querySelector('.header')

header.addEventListener('mouseenter', () => {
  const highlights = document.getElementsByTagName('span')
  for (const highlight of highlights) {
    highlight.classList.add('highlight')
  }
})

header.addEventListener('mouseout', ()=> {
  const highlights = document.getElementsByTagName('span')
  for (const highlight of highlights) {
    highlight.classList.remove('highlight')
  }
})