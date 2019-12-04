import { buttonIcons, richIcons } from './icons.list'

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

  iconElement.classList.add(`msds-${icon}`)
  iconElement.setAttribute('title', icon)

  return iconElement
}

function createButtonIconElement(icon) {
  const svgElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
  const useElement = document.createElementNS('http://www.w3.org/2000/svg', 'use')

  useElement.setAttribute('href', `/msds-spritemap.svg#${icon}`)
  svgElement.setAttribute('title', icon)
  svgElement.appendChild(useElement)

  return svgElement
}

init()
