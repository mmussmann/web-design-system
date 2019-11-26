export function setRowBySection(selector) {
  const itemSection = document.querySelectorAll(selector)

  const rows = [[]]
  const rowMaxHeight = [0]
  let currentRowIndex = 0
  let currentRowOffset

  itemSection.forEach(function(item) {
    const height = item.offsetHeight
    const offset = item.getBoundingClientRect().top

    if (currentRowOffset !== offset) {
      currentRowIndex += 1
      rows[currentRowIndex] = []
      rowMaxHeight[currentRowIndex] = 0
    }
    rows[currentRowIndex].push(item)
    rowMaxHeight[currentRowIndex] = height > rowMaxHeight[currentRowIndex] ? height : rowMaxHeight[currentRowIndex]
    currentRowOffset = offset
  })

  applyRowHeights(rows, rowMaxHeight)
}

function applyRowHeights(rows, rowMaxHeight) {
  rows.forEach(function(row, index) {
    const maxHeight = rowMaxHeight[index]

    row.forEach(function(item) {
      item.style.height = maxHeight + 'px'
    })
  })
}

export function resetHeights(selector) {
  const itemContentHeadings = document.querySelectorAll(selector)
  itemContentHeadings.forEach(function(item) {
    item.style.height = ''
  })
}
