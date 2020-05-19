export const UncheckRadioButton = function(elementClass) {
  const expandingComponent = elementClass
  let expandingElement

  const cacheDom = function() {
    expandingElement = document.querySelectorAll('.' + expandingComponent)
  }

  const bindEvents = function() {
    expandingElement.forEach(labelElement => {
      labelElement.addEventListener('click', () => findInputForLabel(labelElement))
    })
  }

  const findInputForLabel = function(labelElement) {
    const labelElementFor = labelElement.htmlFor
    const inputId = labelElementFor

    if (labelElementFor) {
      uncheckRadioButton(inputId)
    }
  }

  const uncheckRadioButton = function(inputId) {
    const inputElement = document.getElementById(inputId)
    const inputElementType = inputElement.type

    if (inputElementType == 'radio' && inputElement.checked) {
      setTimeout(() => (inputElement.checked = false), 10)
    }
  }

  this.init = function() {
    cacheDom()
    bindEvents()
  }
}
