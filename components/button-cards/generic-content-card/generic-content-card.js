const cardRows = document.querySelectorAll('.card-row')

calcCardDimension()
window.onresize = function() {
  calcCardDimension()
}

function calcCardDimension() {
  for (let i = 0; i < cardRows.length; i++) {
    const cardRow = cardRows[i]
    const heighestImage = getHeighestImage(cardRow)

    if (screen.width < 992) {
      setCardRowheight(cardRow, heighestImage)
    } else {
      setCardheight(cardRow, heighestImage)
    }
  }
}

function getHeighestImage(cardRow) {
  const images = cardRow.querySelectorAll('.msds-generic-content-card__cap-image')
  const imageHeights = []

  for (let i = 0; i < images.length; i++) {
    const image = images[i]
    const imageHeight = image.clientHeight
    imageHeights.push(imageHeight)
  }

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

  for (let i = 0; i < cards.length; i++) {
    const card = cards[i]
    card.style.minHeight = doubleImageHeight
  }
}
