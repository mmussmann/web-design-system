export function appendIconElementToContainer(iconsContainer, icon, isButtonIcon, path) {
  const iconElement = isButtonIcon ? createButtonIconElement(icon, path) : createIconElement(icon)
  const iconWrapper = createBootstrapWrapper()
  const iconName = iconElement.getAttribute('title')
  const iconNameElement = document.createElement('p')

  iconNameElement.innerHTML = iconName
  iconsContainer.appendChild(iconWrapper)
  iconWrapper.appendChild(iconElement)
  iconWrapper.appendChild(iconNameElement)
}

function createBootstrapWrapper() {
  const iconWrapperElement = document.createElement('div')
  iconWrapperElement.classList.add('msds-icon')

  return iconWrapperElement
}

function createIconElement(icon) {
  const iconElement = document.createElement('div')

  iconElement.classList.add(icon.value)
  iconElement.setAttribute('title', icon.name)

  return iconElement
}

function createButtonIconElement(icon, path) {
  const svgElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
  const useElement = document.createElementNS('http://www.w3.org/2000/svg', 'use')

  useElement.setAttribute('href', `${path}${icon.previewValue}`)
  svgElement.setAttribute('title', icon.name)

  svgElement.appendChild(useElement)

  return svgElement
}
