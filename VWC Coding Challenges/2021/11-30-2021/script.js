const content = document.querySelector('.content')

const images = [
  { url: "http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg", width: "240", height: "160" },
  { url: "http://farm1.staticflickr.com/33/45336904_1aef569b30_n.jpg", width: "320", height: "195" },
  { url: "http://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg", width: "500", height: "343" }
]
const random = Math.floor(Math.random() * images.length)
const img = document.createElement('img')

img.src = images[random].url
img.style.cssText = `
width: ${images[random].height}
height: ${images[random].width}
`
content.innerHTML = `width: ${images[random].width} height: ${images[random].height}`
content.append(img)