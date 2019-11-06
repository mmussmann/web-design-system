const setMaxHeight = array => {
  let arrHeightValues = []
  maxObjectHeight = 0

  for (let i = 0; i < array.length; i++) {
    arrHeightValues.push(array[i].clientHeight)
  }

  maxObjectHeight = Math.max(...arrHeightValues)

  for (let i = 0; i < array.length; i++) {
    array[i].parentNode.style.height = maxObjectHeight + 'px'
  }
}

function cleanInlineStyles(array) {
  array.forEach(element => {
    element.parentNode.style = null
  })
}

function init() {
  const arrHeader = document.querySelectorAll('.msds-category-card__header-body')
  const arrContent = document.querySelectorAll('.msds-category-card__content-body')

  setMaxHeight(arrHeader)
  setMaxHeight(arrContent)
}

init()

window.onresize = resize

function resize() {
  const mobileSize = 767
  const arrHeader = document.querySelectorAll('.msds-category-card__header-body')
  const arrContent = document.querySelectorAll('.msds-category-card__content-body')

  if (document.documentElement.clientWidth > mobileSize) {
    setMaxHeight(arrHeader)
    setMaxHeight(arrContent)
  } else {
    cleanInlineStyles(arrHeader)
    cleanInlineStyles(arrContent)
  }
}
