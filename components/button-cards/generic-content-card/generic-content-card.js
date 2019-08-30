const cardRows = document.querySelectorAll('.card-row')

cardRows.forEach(cardRow => {
  const heighestImage = getHeighestImage(cardRow)

  setCardhight(cardRow, heighestImage)
})

function getHeighestImage(cardRow) {
  const images = cardRow.querySelectorAll('.msds-generic-content-card__cap-image')
  const imageHeights = []

  images.forEach(image => {
    const imageHeight = image.clientHeight
    imageHeights.push(imageHeight)
  })

  const heighestImageValue = Math.max(...imageHeights)
  return heighestImageValue
}

function setCardhight(cardRow, heightValue) {
  const doubleImageHeight = heightValue * 2 + 'px'
  cardRow.style.minHeight = doubleImageHeight
}
