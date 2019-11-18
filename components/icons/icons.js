import { buttonIcons, richIcons } from './icons.list'

function init() {
  const iconsContainer = document.querySelector('.msds-icons')

  if (iconsContainer) {
    buttonIcons.forEach(icon => appendIconElementToContainer(iconsContainer, icon))
    richIcons.forEach(icon => appendIconElementToContainer(iconsContainer, icon))
  }
}

function appendIconElementToContainer(iconsContainer, icon) {
  const iconElement = createIconElement(icon)

  iconsContainer.appendChild(iconElement)
}

function createIconElement(icon) {
  const iconElement = document.createElement('div')

  iconElement.classList.add(`msds-${icon}`)

  return iconElement
}

init()
