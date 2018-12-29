
// Keycodes for konami code
const konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65, 13]
// array to hold last 11 keys pressed
const keysPressed = []

// each time a keyup occurs...
document.addEventListener('keyup', (e) => {
  console.log(e.keyCode)
  // ...that key's keycode is pushed to the keysPressed array
  keysPressed.push(e.keyCode)
  // this splice starts at 11 back from the end of the keysPressed array and removes everything before it
  keysPressed.splice(-konamiCode.length - 1, keysPressed.length - konamiCode.length)
  console.log(keysPressed)
  // if the code is entered in correct sequence, then the alert is triggered
  if (keysPressed.join('') === konamiCode.join('')) alert('Konami Code Recognised')
})
