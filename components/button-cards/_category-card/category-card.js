const setMaximumHeight = elements => {
  const elementsHeights = []
  let maximumElementHeight = 0

  for (let i = 0; i < elements.length; i++) {
    elementsHeights.push(elements[i].clientHeight)
  }

  maximumElementHeight = Math.max(...elementsHeights)

  for (let i = 0; i < elements.length; i++) {
    elements[i].parentNode.style.height = maximumElementHeight + 'px'
  }
}

function cleanInlineStyles(array) {
  array.forEach(element => {
    element.parentNode.style = null
  })
}

function init() {
  const headerElements = document.querySelectorAll('.msds-category-card__header-body')
  const contentElements = document.querySelectorAll('.msds-category-card__content-body')

  setMaximumHeight(headerElements)
  setMaximumHeight(contentElements)
}

window.addEventListener('load', function() {
  init()
})

window.onresize = resize

function resize() {
  const mobileBreakpoint = 767
  const headerElements = document.querySelectorAll('.msds-category-card__header-body')
  const contentElements = document.querySelectorAll('.msds-category-card__content-body')

  if (document.documentElement.clientWidth > mobileBreakpoint) {
    setMaximumHeight(headerElements)
    setMaximumHeight(contentElements)
  } else {
    cleanInlineStyles(headerElements)
    cleanInlineStyles(contentElements)
  }
}