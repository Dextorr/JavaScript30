document.addEventListener('DOMContentLoaded', () => {
  const secHand = document.querySelector('div.hand.second-hand'),
    minHand = document.querySelector('div.hand.min-hand'),
    hrHand = document.querySelector('div.hand.hour-hand'),
    now = new Date()

  let sec = now.getSeconds(),
    min = now.getMinutes(),
    hr = now.getHours()

  console.log(now)

  function updateTime(){
    sec += 1
    min += 1/60
    hr += 1/3600
    secHand.style.transform = `rotate(${90 + sec*6}deg)`
    minHand.style.transform = `rotate(${90 + min*6}deg)`
    hrHand.style.transform = `rotate(${90 + hr*30}deg)`
  }

  updateTime()

  setInterval(() => {
    updateTime()
    // console.log(hr, min, sec)
  }, 1000)
})
