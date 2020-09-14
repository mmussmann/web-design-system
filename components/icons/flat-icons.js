import { flatIcons } from './icons.list'
import { appendIconElementToContainer } from './icons.js'

function init() {
  const genericIconsContainer = document.querySelector('.msds-generic-flat-icons')
  const marketplaceIconsContainer = document.querySelector('.msds-marketplace-flat-icons')

  if (genericIconsContainer) {
    const path = genericIconsContainer.dataset.path

    const genericIcons = flatIcons
      .filter(icon => !icon.name.startsWith('Marketplace '))
      .sort((iconA, iconB) => (iconA.name > iconB.name ? 1 : -1))

    genericIcons.forEach(icon => appendIconElementToContainer(genericIconsContainer, icon, true, path))
  }

  if (marketplaceIconsContainer) {
    const path = marketplaceIconsContainer.dataset.path

    const marketplaceIcons = flatIcons
      .filter(icon => icon.name.startsWith('Marketplace '))
      .sort((iconA, iconB) => (iconA.name > iconB.name ? 1 : -1))

    marketplaceIcons.forEach(icon => appendIconElementToContainer(marketplaceIconsContainer, icon, true, path))
  }
}

init()
