const tabs = document.querySelectorAll('.msds-tab-tile')

for (let i = 0; i < tabs.length; i++) {
  const tab = tabs[i]
  tab.addEventListener('click', toggleActive)
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
