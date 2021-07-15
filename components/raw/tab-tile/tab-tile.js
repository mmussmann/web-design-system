const tabs = document.querySelectorAll('.msds-tabs__tab')
const tabContainers = document.querySelectorAll('.msds-tabs__tabs-container')
const mediaQueryList = window.matchMedia('(max-width: 992px)')
const stickyTabsContainers = document.querySelectorAll('.msds-tabs__sticky-container')
const centerTabClass = 'msds-tabs--center-tabs'
const smallTabsClass = 'msds-tabs__tab--small'
const activeTabClass = 'msds-tabs__tab--active'
const stickyTabContentTopPadding = '40px'
const enterKeyCode = 13

function init() {
  locateTabsToCenter()
  applySmallTabs(mediaQueryList)
  mediaQueryList.addListener(applySmallTabs)
  bindEvents()
}

function bindEvents() {
  for (let i = 0; i < tabs.length; i++) {
    const tab = tabs[i]
    tab.onclick = function() {
      setTabActive(tab)
    }
  }

  window.onscroll = setStickyTabsClass
  document.body.onkeyup = setTabActiveOnEnterKey
}

function locateTabsToCenter() {
  for (let i = 0; i < tabContainers.length; i++) {
    const numberOftabsAndSpacers = tabContainers[i].childElementCount
    if (numberOftabsAndSpacers <= 4) {
      tabContainers[i].parentElement.classList.add(centerTabClass)
    }
  }
}

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

function setTabActive(clickedTab) {
  const tabContainer = clickedTab.parentElement
  const contentContainers = tabContainer.parentElement.parentElement.querySelectorAll('.msds-tabs__content-container')
  const shownContent = tabContainer.parentElement.parentElement.querySelector('.msds-tabs__content-container--visible')
  const activeTab = tabContainer.querySelector('.' + activeTabClass)

  if (activeTab != null) {
    activeTab.classList.remove(activeTabClass)
  }

  clickedTab.classList.add(activeTabClass)

  if (shownContent != null) {
    shownContent.classList.remove('msds-tabs__content-container--visible')
  }
  if (contentContainers.length > clickedTab.dataset.index) {
    contentContainers[clickedTab.dataset.index].classList.add('msds-tabs__content-container--visible')
  }
  ensureCardsContentMatchingHeights()
  scrollToElement(clickedTab)
}

function setTabActiveOnEnterKey(event) {
  if (event.keyCode == enterKeyCode) {
    for (let i = 0; i < tabs.length; i++) {
      const tab = tabs[i]
      if (tab === document.activeElement && setTabActive(tab)) {
        return true
      }
    }
  }
}

function setStickyTabsClass() {
  for (let i = 0; i < stickyTabsContainers.length; i++) {
    const stickyTabsContainer = stickyTabsContainers[i]
    const stickyTabRow = stickyTabsContainer.querySelector('.msds-tabs__container')
    const tabContent = stickyTabsContainer.querySelector('.msds-tabs__content-container')
    const shouldAddStickyClass = hasElementHitTop(stickyTabRow, tabContent)

    if (shouldAddStickyClass) {
      stickyTabRow.classList.add('msds-tabs--sticky-tabs')
    } else {
      stickyTabRow.classList.remove('msds-tabs--sticky-tabs')
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

function hasElementHitTop(tabRow, contentElement) {
  const tabRowBounding = tabRow.getBoundingClientRect()
  const contentElementBounding = contentElement.getBoundingClientRect()

  if (tabRowBounding.top <= 0 && contentElementBounding.bottom >= 0) {
    contentElement.style.paddingTop = stickyTabContentTopPadding
    return true
  } else {
    contentElement.style.paddingTop = 0
    return false
  }
}

function ensureCardsContentMatchingHeights() {
  const cardRows = document.querySelectorAll('.card-row')

  cardRows.ensureCardContentsSameHeightWithinParent({
    subSelectors: ['.msds-category-card__header-body', '.msds-category-card__content-body']
  })
}

init()
