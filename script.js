function toggleMode() {
  const html = document.documentElement

  html.classList.toggle("light")
}


let copyText = document.querySelector(".copyText")


function copyToClipBoard(event) {
  event.preventDefault()
  const text = event.target.textContent
  navigator.clipboard.writeText(text)
  copyText.classList.add("active")
  window.getSelection().removeAllRanges()
  setTimeout(function () {
    copyText.classList.remove("active")
  }, 900)
}
