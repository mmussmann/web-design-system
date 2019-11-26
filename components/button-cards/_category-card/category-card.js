import { setRowBySection, resetHeights } from 'components/button-cards/card.js'

function setRowHeights() {
  setRowBySection('.msds-category-card__header-body')
  setRowBySection('.msds-category-card__content-body')
}

window.onresize = function() {
  resetHeights('.msds-category-card__header-body')
  resetHeights('.msds-category-card__content-body')

  setRowHeights()
}

window.addEventListener('load', function() {
  setRowHeights()
})
