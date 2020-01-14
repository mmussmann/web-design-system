const tabs = document.querySelectorAll('.msds-tabs__tab')
const tabContainers = document.querySelectorAll('.msds-tabs__tabs-container')
const mediaQueryList = window.matchMedia('(max-width: 992px)')
const stickyTabsContainers = document.querySelectorAll('.msds-tabs__sticky-container')
const smallTabsClass = 'msds-tabs__tab--small'

function applySmallTabs(mediaQueryList) {
  if (mediaQueryList.matches) {
    for (let i = 0; i < tabs.length; i++) {
      const tab = tabs[i]
      tab.classList.add(smallTabsClass)
    }
  } else {
    for (let i = 0; i < tabs.length; i++) {
      const tab = tabs[i]
      tab.classList.remove(smallTabsClass)
    }
  }
}

function scrollToElement(tab) {
  const parentElement = tab.parentElement
  const containerWidth = parentElement.clientWidth
  const tabScrollLeft = tab.offsetLeft
  const elementWidth = tab.clientWidth
  const calcTabScrollPos = tabScrollLeft - containerWidth / 2 + elementWidth / 1.5

  const scrollOptions = {
    left: calcTabScrollPos,
    top: 0,
    behavior: 'smooth'
  }
  if (parentElement.scrollTo) {
    parentElement.scrollTo(scrollOptions)
  }
}

function setActive(clickedTab) {
  const tabContainer = clickedTab.parentElement
  const tabs = tabContainer.querySelectorAll('.msds-tabs__tab')
  const activeClass = 'msds-tabs__tab--active'
  const contentContainers = tabContainer.parentElement.parentElement.querySelectorAll('.msds-tabs__content-container')
  const shownContent = tabContainer.parentElement.parentElement.querySelector('.msds-tabs__content-container--visible')

  for (let i = 0; i < tabs.length; i++) {
    const tab = tabs[i]
    const isActive = tab.classList.contains(activeClass)

    if (isActive) {
      tab.classList.remove(activeClass)
    }
  }

  clickedTab.classList.add(activeClass)

  if (shownContent != null) {
    shownContent.classList.remove('msds-tabs__content-container--visible')
  }
  if (contentContainers.length > clickedTab.dataset.index) {
    contentContainers[clickedTab.dataset.index].classList.add('msds-tabs__content-container--visible')
  }

  ensureCardsContentMatchingHeights()
  scrollToElement(clickedTab)
}

function hasElementHitTop(tabRow, contentElement) {
  const tabRowBounding = tabRow.getBoundingClientRect()
  const contentElementBounding = contentElement.getBoundingClientRect()
  if (tabRowBounding.top <= 0 && contentElementBounding.bottom >= 0) {
    contentElement.style.paddingTop = 40 + 'px'
    return true
  } else {
    contentElement.style.paddingTop = 0
    return false
  }
}

function locateTabsToCenter() {
  for (let i = 0; i < tabContainers.length; i++) {
    const numberOftabsAndSpacers = tabContainers[i].childElementCount
    if (numberOftabsAndSpacers <= 4) {
      applyTabsCentered(tabContainers[i].parentElement)
    }
  }
}

function applyTabsCentered(tabContainer) {
  tabContainer.classList.add('msds-tabs--center-tabs')
}

function applyTabActiveEvent() {
  for (let i = 0; i < tabs.length; i++) {
    const tab = tabs[i]
    const tabIndex = i
    tab.addEventListener('click', () => setActive(tab, tabIndex))
  }
}

function applyTabKeyboardNavigation() {
  document.body.onkeyup = function(e) {
    if (e.keyCode == 13) {
      for (let i = 0; i < tabs.length; i++) {
        const tab = tabs[i]
        const tabIndex = i
        const tabHasFocus = document.activeElement
        if (tabHasFocus === tab) {
          setActive(tab, tabIndex)
        }
      }
    }
  }
}

function applyTabsSticky() {
  if (stickyTabsContainers) {
    window.addEventListener(
      'scroll',
      function() {
        for (let i = 0; i < stickyTabsContainers.length; i++) {
          const currentStickyTabsContainer = stickyTabsContainers[i]
          const stickyTabRow = currentStickyTabsContainer.querySelector('.msds-tabs__container')
          const tabContent = currentStickyTabsContainer.querySelector('.msds-tabs__content-container')
          const shouldAddStickyClass = hasElementHitTop(stickyTabRow, tabContent)
          if (shouldAddStickyClass) {
            stickyTabRow.classList.add('msds-tabs--sticky-tabs')
          } else {
            stickyTabRow.classList.remove('msds-tabs--sticky-tabs')
          }
        }
      },
      false
    )
  }
}

function ensureCardsContentMatchingHeights() {
  const cardRows = document.querySelectorAll('.card-row')

  cardRows.ensureCardContentsSameHeightWithinParent({
    subSelectors: ['.msds-category-card__header-body', '.msds-category-card__content-body']
  })

  cardRows.ensureCardContentsSameHeightWithinParent({
    subSelectors: [
      '.msds-contact-card__headline',
      '.msds-contact-card__body-contact-person',
      '.msds-contact-card__body-contact-position',
      '.msds-contact-card__body-contact-details'
    ]
  })

  cardRows.ensureCardContentsSameHeightWithinParent({
    subSelectors: [
      '.msds-solution-card__header-headline',
      '.msds-solution-card__body-headline',
      '.msds-solution-card__body-description',
      '.msds-solution-card__footer-buttons'
    ]
  })
}

function init() {
  locateTabsToCenter()
  applyTabActiveEvent()
  applyTabKeyboardNavigation()
  applyTabsSticky()
  applySmallTabs(mediaQueryList)
  mediaQueryList.addListener(applySmallTabs)
}

init()
