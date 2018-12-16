document.addEventListener('DOMContentLoaded', () => {

  // Get DOM elements that will be used
  const keyDivs = document.querySelectorAll('div.key')
  const audioTags = document.querySelectorAll('audio')

  keyDivs.forEach((div, i) => {
    console.log(div, i)
  })
})
