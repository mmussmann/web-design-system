import { buttonIcons } from './icons.list'
import { appendIconElementToContainer } from './icons.js'

function init() {
  const iconsContainer = document.querySelector('.msds-button-icons')

  if (iconsContainer) {
    const path = document.querySelector('.msds-button-icons').dataset.path

    buttonIcons.sort((iconA, iconB) => (iconA.name > iconB.name ? 1 : -1))

    buttonIcons.forEach(icon => appendIconElementToContainer(iconsContainer, icon, true, path))
  }
}

init()
