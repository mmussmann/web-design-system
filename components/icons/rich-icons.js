import { richIcons } from './icons.list'
import { appendIconElementToContainer } from './icons.js'

function init() {
  const iconsContainer = document.querySelector('.msds-rich-icons')

  if (iconsContainer) {
    richIcons.sort((iconA, iconB) => (iconA.name > iconB.name ? 1 : -1))

    richIcons.forEach(icon => appendIconElementToContainer(iconsContainer, icon))
  }
}

init()
