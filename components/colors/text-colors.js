import { fontColors } from './colors.list'

function init() {
  const textColorsContainer = document.querySelector('.msds-text-colors')

  if (textColorsContainer) {
    fontColors.forEach(color => appendColorTextElementToContainer(textColorsContainer, color))
  }
}

function appendColorTextElementToContainer(textColorsContainer, color) {
  const colorTextElement = createColorTextElement(color)

  textColorsContainer.appendChild(colorTextElement)
}

function createColorTextElement(color) {
  const colorTextElement = document.createElement('div')

  colorTextElement.classList.add('msds-text-colors__color-text')
  colorTextElement.classList.add('msds-text-display-2')
  colorTextElement.classList.add(color.value)

  colorTextElement.innerText = color.name

  return colorTextElement
}

init()
