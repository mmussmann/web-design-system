const tabs = document.querySelectorAll('.msds-tab-tile')
const tabContainers = document.querySelectorAll('.row-scroll-x-mobile')
const viewport = window.matchMedia('(max-width: 992px)')
const smallTabsClass = 'msds-tab-tile--small'

applySmallTabs(viewport)
viewport.addListener(applySmallTabs)

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
    tabs.forEach(tab => {
      const tabHasFocus = document.activeElement
      if (tabHasFocus === tab) {
        setActive(tab)
      }
    })
  }
}

function centerTabs(tabContainer) {
  tabContainer.classList.add('center-tabs')
}

function setActive(clickedTab) {
  const tabContainer = clickedTab.parentElement
  const tabs = tabContainer.querySelectorAll('.msds-tab-tile')
  const activeClass = 'msds-tab-tile--active'
  tabs.forEach(tab => {
    const isActive = tab.classList.contains(activeClass)
    if (isActive) {
      tab.classList.remove(activeClass)
    }
  })
  clickedTab.classList.add(activeClass)
}

function applySmallTabs(viewPort) {
  if (viewPort.matches) {
    tabs.forEach(tab => {
      tab.classList.add(smallTabsClass)
    })
  } else {
    tabs.forEach(tab => {
      tab.classList.remove(smallTabsClass)
    })
  }
}
