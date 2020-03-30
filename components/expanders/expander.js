const expander = {
  init: function() {
    this.cacheDom()
    this.bindEvents()
  },
  cacheDom: function() {
    this.expanderComponents = document.querySelectorAll('.msds-expander__list-item')
    this.expanderSections = document.querySelectorAll('.msds-expander--section-expander')
  },
  bindEvents: function() {
    this.expanderComponents.forEach(function() {
      document.body.onkeyup = expander.setActiveExpanderOnEnterKey
    })

    for (const expanderSection of this.expanderSections) {
      expanderSection.onclick = expander.setActiveSection
    }
  },
  setActiveExpanderOnEnterKey: function(event) {
    const enterKeyCode = 13

    if (event.keyCode == enterKeyCode) {
      const expanderChildren = event.target.childNodes

      expanderChildren.forEach(function(expandingElement) {
        const isExpanded = expandingElement.checked
        const elementType = expandingElement.nodeName
        if (elementType == 'INPUT' && isExpanded == true) {
          expander.openExpander(expandingElement)
        } else if (elementType == 'INPUT' && isExpanded == false) {
          expander.closeExpander(expandingElement)
        }
      })
    }
  },
  setActiveSection: function(event) {
    const clickedElement = event.toElement
    const floatingButtonContainer = 'msds-btn-floating'
    const floatingButtonSvgContainer = 'msds-icon'
    const floatingButtonTextContainer = 'msds-expander__button-text'
    let checkbox = ''

    if (clickedElement.classList.contains(floatingButtonContainer)) {
      checkbox = clickedElement.previousElementSibling
      expander.toggleExpander(checkbox)
    } else if (
      clickedElement.classList.contains(floatingButtonSvgContainer) ||
      clickedElement.classList.contains(floatingButtonTextContainer)
    ) {
      checkbox = clickedElement.parentNode.previousElementSibling
      expander.toggleExpander(checkbox)
    } else if (event.srcElement.nodeName == 'use') {
      checkbox = clickedElement.parentNode.parentNode.previousElementSibling
      expander.toggleExpander(checkbox)
    }
  },
  toggleExpander: function(checkbox) {
    if (checkbox.checked == true) {
      expander.openExpander(checkbox)
    } else {
      expander.closeExpander(checkbox)
    }
  },
  openExpander: function(expandingElement) {
    expandingElement.checked = false
  },
  closeExpander: function(expandingElement) {
    expandingElement.checked = true
  }
}

expander.init()
