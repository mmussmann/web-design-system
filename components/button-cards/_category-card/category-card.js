window.addEventListener('load', function() {
  const cardRows = document.querySelectorAll('.card-row')

  cardRows.ensureCardContentsSameHeightWithinParent({
    subSelectors: ['.msds-category-card__header-body', '.msds-category-card__content-body'],
    waitForImages: false
  })
})
