const textAreas = document.querySelectorAll('.msds-text-area__text-input')

window.addEventListener('load', function() {
  ;[].forEach.call(textAreas, element => {
    element.onkeyup = function() {
      updateWordCount(element)
    }
  })
})

function updateWordCount(element) {
  const inputLength = element.value.length
  const wordCount = `${inputLength}`
  const countElement = element.parentNode.querySelector('.word-counter__current')
  countElement.innerHTML = wordCount
}
