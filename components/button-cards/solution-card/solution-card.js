window.addEventListener('load', function() {
  const cardRows = document.querySelectorAll('.card-row')

  cardRows.ensureCardContentsSameHeightWithinParent({
    subSelectors: [
      '.msds-solution-card__header-headline',
      '.msds-solution-card__body-headline',
      '.msds-solution-card__body-description',
      '.msds-solution-card__footer-buttons'
    ]
  })
})
