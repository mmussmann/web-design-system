export const ExpandingElement = function(elementClass) {
  const expandingComponent = elementClass
  let expandingComponentsCollection

  const cacheDom = function() {
    expandingComponentsCollection = document.querySelectorAll('.' + expandingComponent)
  }

  const bindEvents = function() {
    expandingComponentsCollection.forEach(labelElement => {
      labelElement.addEventListener('click', () => resetInputRadioButtonState(labelElement))
    })
  }

  const resetInputRadioButtonState = function(labelElement) {
    const inputId = labelElement.htmlFor

    if (inputId) {
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
