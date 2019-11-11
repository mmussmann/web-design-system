import { backgroundColors } from './colors.list'

function init() {
  const backgroundColorsContainer = document.querySelector('.msds-backgrounds-colors')

  if (backgroundColorsContainer) {
    backgroundColors.forEach(color => appendColorElementToContainer(backgroundColorsContainer, color))
  }
}

init()

function appendColorElementToContainer(backgroundColorsContainer, color) {
  const colorElement = createColorElement(color.value)
  const colorNameElement = createColorNameElement(color.name)
  const classNameElement = createClassNameElement(color.value)

  colorElement.appendChild(colorNameElement)
  colorElement.appendChild(classNameElement)
  backgroundColorsContainer.appendChild(colorElement)
}

function createColorElement(colorClass) {
  const colorElement = document.createElement('div')

  colorElement.classList.add('msds-backgrounds-colors__color-element')
  colorElement.classList.add(colorClass)

  return colorElement
}

function createColorNameElement(colorName) {
  const colorNameElement = document.createElement('div')

  colorNameElement.classList.add('msds-backgrounds-colors__color-name')
  colorNameElement.classList.add('msds-text-header-3')
  colorNameElement.classList.add('msds-text-danger-red-2')

  colorNameElement.innerText = colorName

  return colorNameElement
}

function createClassNameElement(className) {
  const classNameElement = document.createElement('div')

  classNameElement.classList.add('msds-backgrounds-colors__class-name')
  classNameElement.classList.add('msds-text-body-2')
  classNameElement.classList.add('msds-text-danger-red-2')

  classNameElement.innerText = className

  return classNameElement
}
