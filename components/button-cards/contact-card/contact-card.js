window.addEventListener('load', function() {
  const cardRows = document.querySelectorAll('.card-row')

  cardRows.ensureCardContentsSameHeightWithinParent({
    subSelectors: [
      '.msds-contact-card__headline',
      '.msds-contact-card__body-contact-person',
      '.msds-contact-card__body-contact-position',
      '.msds-contact-card__body-contact-details'
    ],
    waitForImages: false
  })
})
