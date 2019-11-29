function ensureSameHeight(nodes) {
  let maxHeight = 0

  for (let i = 0; i < nodes.length; i++) {
    nodes[i].style.height = 'auto'
    maxHeight = Math.max(nodes[i].offsetHeight, maxHeight)
    applyMaxHeight(nodes, maxHeight)
  }
}

function applyMaxHeight(nodes, maxHeight) {
  for (let i = 0; i < nodes.length; i++) {
    if (nodes[i].offsetHeight < maxHeight) {
      nodes[i].style.height = maxHeight + 'px'
    }
  }
}

NodeList.prototype.ensureCardContentsSameHeightWithinParent = function(args) {
  if (this.length <= 0) {
    return
  }

  const self = this
  function run() {
    let latestParent = null
    for (let i = 0; i < self.length; i++) {
      if (latestParent != self[i]) {
        latestParent = self[i]
        ;(function(parent) {
          const rowMaxHeight = []
          let currentRowIndex = 0
          let currentOffsetPosition
          let elementsCollection = []

          function resize() {
            for (let j = 0; j < args.subSelectors.length; j++) {
              const currentElements = parent.querySelectorAll(args.subSelectors[j])

              for (let k = 0; k < currentElements.length; k++) {
                const currentElement = currentElements[k]
                const rowOffsetPosition = currentElement.getBoundingClientRect().top

                if (currentOffsetPosition !== rowOffsetPosition) {
                  elementsCollection = []
                  currentOffsetPosition = rowOffsetPosition
                  currentRowIndex++
                  rowMaxHeight[currentRowIndex] = 0
                }

                if (currentOffsetPosition == rowOffsetPosition) {
                  elementsCollection.push(currentElement)
                  ensureSameHeight(elementsCollection)
                }
              }
            }
          }
          resize()
        })(latestParent)
      }
    }
  }

  run()

  let timeout = true
  addEventListener(
    'resize',
    function() {
      clearTimeout(timeout)
      timeout = setTimeout(run, 500)
    },
    false
  )
  timeout = setTimeout(run, 500)
}
