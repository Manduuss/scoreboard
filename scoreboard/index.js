let homeScore = 0
let guestScore = 0
let homeScoreEl = document.getElementById("homescore-el")
let guestScoreEl = document.getElementById("guestscore-el")

function plus1home () {
  homeScore +=1
  homeScoreEl.innerText = "Home-Score: " + homeScore 
}

function plus2home () {
  homeScore +=2
  homeScoreEl.innerText = "Home-Score: " + homeScore 
}

function plus3home () {
  homeScore +=3
  homeScoreEl.innerText = "Home-Score: " + homeScore 
}

function plus1guest () {
  guestScore +=1
  guestScoreEl.innerText = "Guest-Score: " + guestScore 
}

function plus2guest () {
  guestScore +=2
  guestScoreEl.innerText = "Guest-Score: " + guestScore 
}

function plus3guest () {
  guestScore +=3
  guestScoreEl.innerText = "Guest-Score: " + guestScore 
}