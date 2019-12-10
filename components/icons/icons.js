import { buttonIcons, richIcons } from './icons.list'
const path = require('path')

function init() {
  const iconsContainer = document.querySelector('.msds-icons')

  if (iconsContainer) {
    buttonIcons.forEach(icon => appendIconElementToContainer(iconsContainer, icon, true))
    richIcons.forEach(icon => appendIconElementToContainer(iconsContainer, icon))
  }
}

function appendIconElementToContainer(iconsContainer, icon, isButtonIcon) {
  const iconElement = isButtonIcon ? createButtonIconElement(icon) : createIconElement(icon)

  iconsContainer.appendChild(iconElement)
}

function createIconElement(icon) {
  const iconElement = document.createElement('div')

  iconElement.classList.add(icon.value)
  iconElement.setAttribute('title', icon.name)

  return iconElement
}

function createButtonIconElement(icon) {
  const svgElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
  const useElement = document.createElementNS('http://www.w3.org/2000/svg', 'use')

  console.log(path.resolve('/'))

  useElement.setAttribute('href', path.join(__dirname, icon.previewValue))
  svgElement.setAttribute('title', icon.name)
  svgElement.appendChild(useElement)

  return svgElement
}

init()
