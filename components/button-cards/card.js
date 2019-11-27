export function setCardContentMaximumHeight(rowSelector, element) {
  const cardRows = document.querySelectorAll(rowSelector)

  for (let i = 0; i < cardRows.length; i++) {
    const cardRow = cardRows[i]
    const tallestContent = getContentHeights(element, cardRow)

    setContentHeight(element, tallestContent)
  }
}

export function resetCardContentHeights(selector) {
  const itemContentHeadings = document.querySelectorAll(selector)
  itemContentHeadings.forEach(function(item) {
    item.style.height = ''
  })
}

function getContentHeights(selector, cardRow) {
  const contents = cardRow.querySelectorAll(selector)
  const contentHeights = []
  const rowMaxHeight = [0]
  let currentRowIndex = 0
  let currentOffsetPosition

  for (let i = 0; i < contents.length; i++) {
    const content = contents[i]
    const contentHeight = content.clientHeight
    const rowOffsetPosition = contents[i].getBoundingClientRect().top

    if (currentOffsetPosition !== rowOffsetPosition) {
      currentOffsetPosition = rowOffsetPosition
      currentRowIndex++
      contentHeights[currentRowIndex] = []
      rowMaxHeight[currentRowIndex] = 0
    }

    contentHeights[currentRowIndex].push(contentHeight)
    rowMaxHeight[currentRowIndex] =
      contentHeight > rowMaxHeight[currentRowIndex] ? contentHeight : rowMaxHeight[currentRowIndex]
  }

  return rowMaxHeight
}

function setContentHeight(selector, tallestContentInRow) {
  const tallestContent = tallestContentInRow
  const contents = document.querySelectorAll(selector)
  let currentOffsetPosition = 0
  let currentRowIndex = 0

  for (let i = 0; i < contents.length; i++) {
    const rowOffsetPosition = contents[i].getBoundingClientRect().top

    if (currentOffsetPosition !== rowOffsetPosition) {
      currentOffsetPosition = rowOffsetPosition
      currentRowIndex++
    }

    if (currentOffsetPosition == rowOffsetPosition) {
      contents[i].style.height = tallestContent[currentRowIndex] + 'px'
    }
  }
}
