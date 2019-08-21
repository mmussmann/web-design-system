const textAreas = document.querySelectorAll('.msds-form__input-container-text-area')

textAreas.forEach(element => {
  element.onkeydown = function() {
    updateWordCount(element)
  }
})

function updateWordCount(element) {
  const inputLength = element.value.length
  const wordCount = `${inputLength} / 400`
  const countElement = element.parentNode.querySelector('.word-count')
  countElement.innerHTML = wordCount
}
