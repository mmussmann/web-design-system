const tabs = document.querySelectorAll('.msds-tab-tile')
const tabContainers = document.querySelectorAll('.row-scroll-x-mobile')

for (let i = 0; i < tabContainers.length; i++) {
  const numberOftabs = tabContainers[i].childElementCount

  if (numberOftabs <= 2) {
    centerTabs(tabContainers[i])
  }
}

for (let i = 0; i < tabs.length; i++) {
  const tab = tabs[i]
  tab.addEventListener('click', toggleActive)
}

function centerTabs(tabContainer) {
  tabContainer.classList.add('center-tabs')
}

function toggleActive() {
  const isActive = this.classList.contains('msds-tab-tile--active')

  if (isActive) {
    return
  } else {
    const elements = document.querySelectorAll('.msds-tab-tile')
    ;[].forEach.call(elements, function(element) {
      element.classList.remove('msds-tab-tile--active')
    })
    this.classList.add('msds-tab-tile--active')
  }
}
