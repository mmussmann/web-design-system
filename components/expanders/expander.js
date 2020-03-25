const expander = {
  init: function() {
    this.cacheDom()
    this.bindEvents()
  },
  cacheDom: function() {
    this.expanderComponents = document.querySelectorAll('.msds-expander__list-item')
  },
  bindEvents: function() {
    this.expanderComponents.forEach(function() {
      document.body.onkeyup = expander.setActiveExpanderOnEnterKey
    })
  },
  setActiveExpanderOnEnterKey: function(event) {
    const enterKeyCode = 13

    if (event.keyCode == enterKeyCode) {
      const expanderChildren = event.target.childNodes

      expanderChildren.forEach(function(item) {
        const isExpanded = item.checked
        const elementType = item.nodeName
        if (elementType == 'INPUT' && isExpanded == true) {
          expander.openExpander(item)
        } else if (elementType == 'INPUT' && isExpanded == false) {
          expander.closeExpander(item)
        }
      })
    }
  },
  openExpander: function(item) {
    item.checked = false
  },
  closeExpander: function(item) {
    item.checked = true
  }
}

expander.init()
