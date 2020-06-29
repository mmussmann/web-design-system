import { flatIcons } from './icons.list'
import { appendIconElementToContainer } from './icons.js'

function init() {
  const iconsContainer = document.querySelector('.msds-button-icons')

  if (iconsContainer) {
    const path = document.querySelector('.msds-button-icons').dataset.path

    flatIcons.sort((iconA, iconB) => (iconA.name > iconB.name ? 1 : -1))

    flatIcons.forEach(icon => appendIconElementToContainer(iconsContainer, icon, true, path))
  }
}

init()
