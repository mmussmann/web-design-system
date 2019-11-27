import { setCardContentMaximumHeight, resetCardContentHeights } from 'components/button-cards/card.js'

window.addEventListener('load', function() {
  setCardContentMaximumHeight('.card-row', '.msds-contact-card__headline')
  setCardContentMaximumHeight('.card-row', '.msds-contact-card__body-contact-person')
  setCardContentMaximumHeight('.card-row', '.msds-contact-card__body-contact-position')
  setCardContentMaximumHeight('.card-row', '.msds-contact-card__body-contact-details-wrapper')
})

window.onresize = function() {
  resetCardContentHeights('.msds-contact-card__headline')
  resetCardContentHeights('.msds-contact-card__body-contact-person')
  resetCardContentHeights('.msds-contact-card__body-contact-position')
  resetCardContentHeights('.msds-contact-card__body-contact-details-wrapper')

  setCardContentMaximumHeight('.card-row', '.msds-contact-card__headline')
  setCardContentMaximumHeight('.card-row', '.msds-contact-card__body-contact-person')
  setCardContentMaximumHeight('.card-row', '.msds-contact-card__body-contact-position')
  setCardContentMaximumHeight('.card-row', '.msds-contact-card__body-contact-details-wrapper')
}
