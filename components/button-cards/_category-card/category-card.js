import { setCardContentMaximumHeight, resetCardContentHeights } from 'components/button-cards/card.js'

window.addEventListener('load', function() {
  setCardContentMaximumHeight('.card-row', '.msds-category-card__header-body')
  setCardContentMaximumHeight('.card-row', '.msds-category-card__content-body')
})

window.onresize = function() {
  resetCardContentHeights('.msds-category-card__header-body')
  resetCardContentHeights('.msds-category-card__content-body')

  setCardContentMaximumHeight('.card-row', '.msds-category-card__header-body')
  setCardContentMaximumHeight('.card-row', '.msds-category-card__content-body')
}
