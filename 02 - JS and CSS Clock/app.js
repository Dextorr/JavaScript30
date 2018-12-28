document.addEventListener('DOMContentLoaded', () => {
  const secHand = document.querySelector('div.hand.second-hand'),
    minHand = document.querySelector('div.hand.min-hand'),
    hrHand = document.querySelector('div.hand.hour-hand')
  let now,
    sec,
    min,
    hr

  console.log(now)

  function updateTime(){
    now = new Date()
    sec = now.getSeconds()
    min = now.getMinutes()
    hr = now.getHours()
    secHand.style.transform = `rotate(${90 + sec*6}deg)`
    minHand.style.transform = `rotate(${90 + min*6}deg)`
    hrHand.style.transform = `rotate(${90 + hr*30}deg)`
  }

  updateTime()

  setInterval(() => {
    updateTime()
    console.log(hr, min, sec)
  }, 1000)
})
