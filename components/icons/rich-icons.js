import { richIcons } from './icons.list'
import { appendIconElementToContainer } from './icons.js'

function init() {
  const genericIconsContainer = document.querySelector('.msds-generic-rich-icons')
  const marketplaceIconsContainer = document.querySelector('.msds-marketplace-rich-icons')

  if (genericIconsContainer) {
    const genericIcons = richIcons
      .filter(icon => !icon.name.startsWith('Marketplace '))
      .sort((iconA, iconB) => (iconA.name > iconB.name ? 1 : -1))

    genericIcons.forEach(icon => appendIconElementToContainer(genericIconsContainer, icon))
  }

  if (marketplaceIconsContainer) {
    const marketplaceIcons = richIcons
      .filter(icon => icon.name.startsWith('Marketplace '))
      .sort((iconA, iconB) => (iconA.name > iconB.name ? 1 : -1))

    marketplaceIcons.forEach(icon => appendIconElementToContainer(marketplaceIconsContainer, icon))
  }
}

window.addEventListener('load', function() {
  init()
})
