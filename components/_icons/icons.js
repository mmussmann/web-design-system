export function appendIconElementToContainer(iconsContainer, icon, isButtonIcon, path) {
  const iconElement = isButtonIcon ? createFlatIconElement(icon, path) : createRichIconElement(icon)
  const iconWrapper = createBootstrapWrapper()
  const iconName = iconElement.getAttribute('title')
  const iconNameElement = document.createElement('div')

  iconNameElement.innerHTML = iconName
  iconNameElement.classList.add('msds-text-header-5')
  iconNameElement.classList.add('msds-text-gray-9')
  iconNameElement.classList.add('msds-icon-title')

  iconsContainer.appendChild(iconWrapper)
  iconWrapper.appendChild(iconElement)
  iconWrapper.appendChild(iconNameElement)
}

function createBootstrapWrapper() {
  const iconWrapperElement = document.createElement('div')
  iconWrapperElement.classList.add('msds-icon-wrapper')

  return iconWrapperElement
}

function createRichIconElement(icon) {
  const iconElement = document.createElement('div')

  iconElement.classList.add(icon.previewValue)
  iconElement.classList.add('msds-rich-icon')
  iconElement.setAttribute('title', icon.name)

  return iconElement
}

function createFlatIconElement(icon, path) {
  const svgElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
  const useElement = document.createElementNS('http://www.w3.org/2000/svg', 'use')

  useElement.setAttribute('href', `${path}${icon.previewValue}`)
  svgElement.setAttribute('title', icon.name)
  svgElement.classList.add('msds-flat-icon')

  svgElement.appendChild(useElement)

  return svgElement
}
