const cardRows = document.querySelectorAll('.card-row')

calcCardDimension()
window.onresize = function() {
  calcCardDimension()
}

function calcCardDimension() {
  cardRows.forEach(cardRow => {
    const heighestImage = getHeighestImage(cardRow)

    if (screen.width < 992) {
      setCardRowheight(cardRow, heighestImage)
    } else {
      setCardheight(cardRow, heighestImage)
    }
  })
}

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

function setCardRowheight(cardRow, heightValue) {
  const doubleImageHeight = heightValue * 2 + 'px'
  cardRow.style.minHeight = doubleImageHeight
}

function setCardheight(cardRow, heightValue) {
  const cards = cardRow.querySelectorAll('.msds-generic-content-card')
  const doubleImageHeight = heightValue * 2 + 'px'

  cards.forEach(card => {
    card.style.minHeight = doubleImageHeight
  })
}
