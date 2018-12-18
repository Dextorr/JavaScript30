document.addEventListener('DOMContentLoaded', () => {

  // Get DOM elements that will be used
  const keyDivs = document.querySelectorAll('div.key')

  function playSound(e){
    // Get the audio tag that has the data-key property of the key that has been pressed
    const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`)
    // If the key doesn't have an audio tag with an appropriate data attribute, stop the function
    if(!audio) return
    // Reset the audio tag to time 0 and play it
    audio.currentTime = 0
    audio.play()
  }

  function transition(e){
    const key = document.querySelector(`div.key[data-key = "${e.keyCode}"]`)
    if(!key) return
    key.classList.add('playing')
  }

  // Event Listener on document that passes the keyup event to the playSound function
  document.addEventListener('keyup', (e) => {
    playSound(e)
    transition(e)
  })

  keyDivs.forEach(key => {
    key.addEventListener('transitionend', () => {
      key.classList.remove('playing')
    })
  })

})
