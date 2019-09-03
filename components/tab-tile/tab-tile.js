const tabs = document.querySelectorAll('.msds-tab-tile')
const tabContainers = document.querySelectorAll('.row-scroll-x-mobile')
const mediaQueryList = window.matchMedia('(max-width: 992px)')
const smallTabsClass = 'msds-tab-tile--small'

applySmallTabs(mediaQueryList)
mediaQueryList.addListener(applySmallTabs)

for (let i = 0; i < tabContainers.length; i++) {
  const numberOftabs = tabContainers[i].childElementCount

  if (numberOftabs <= 2) {
    centerTabs(tabContainers[i])
  }
}

for (let i = 0; i < tabs.length; i++) {
  const tab = tabs[i]
  tab.addEventListener('click', () => setActive(tab))
}

document.body.onkeyup = function(e) {
  if (e.keyCode == 32) {
    for (let i = 0; i < tabs.length; i++) {
      const tab = tabs[i]
      const tabHasFocus = document.activeElement
      if (tabHasFocus === tab) {
        setActive(tab)
      }
    }
    // tabs.forEach(tab => {
    //   const tabHasFocus = document.activeElement
    //   if (tabHasFocus === tab) {
    //     setActive(tab)
    //   }
    // })
  }
}

function centerTabs(tabContainer) {
  tabContainer.classList.add('center-tabs')
}

function setActive(clickedTab) {
  const tabContainer = clickedTab.parentElement
  const tabs = tabContainer.querySelectorAll('.msds-tab-tile')
  const activeClass = 'msds-tab-tile--active'
  for (let i = 0; i < tabs.length; i++) {
    const tab = tabs[i]
    const isActive = tab.classList.contains(activeClass)
    if (isActive) {
      tab.classList.remove(activeClass)
    }
  }

  // tabs.forEach(tab => {
  //   const isActive = tab.classList.contains(activeClass)
  //   if (isActive) {
  //     tab.classList.remove(activeClass)
  //   }
  // })
  clickedTab.classList.add(activeClass)
  scrollToElement(clickedTab)
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
