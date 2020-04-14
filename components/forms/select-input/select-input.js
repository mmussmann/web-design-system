function SelectInput(id, options, validationMsg, placeholder, isRequired) {
  let selectInput
  let selectElement
  let validationMsgElement
  let isOpen = false
  let displayValidationMsg = false
  let _valid = false
  let _value = 'not set'
  let _selectedOptionIndex = 0
  let shouldPopulateList = true
  const _options = options
  const _validationMsg = validationMsg
  const _placeholder = isRequired ? placeholder + '*' : placeholder

  const cacheDom = function() {
    selectInput = document.getElementById(id)
    selectElement = selectInput.querySelector('.msds-select-input__select')
    validationMsgElement = selectInput.querySelector('.msds-select-input__validation-msg')
  }

  const bindEvents = function() {
    selectElement.addEventListener('change', () => render())
  }

  const render = function() {
    _selectedOptionIndex = selectElement.value
    validationMsgElement.innerHTML = _validationMsg
    if (isOpen) {
      selectInput.classList.toggle('msds-select-input--open')
    }
    if (_validationMsg != '' && displayValidationMsg == true) {
      validationMsgElement.classList.add('msds-select-input__validation-msg--display')
    } else {
      validationMsgElement.classList.remove('msds-select-input__validation-msg--display')
    }
    if (_selectedOptionIndex == 0) {
      selectElement.classList.add('msds-select-input__select--no-selection')
    } else {
      selectElement.classList.remove('msds-select-input__select--no-selection')
      displayValidationMsg = false
    }
    if (isEmpty(_options)) {
      _selectedOptionIndex = 0
      return
    } else if (shouldPopulateList) {
      shouldPopulateList = false
      const placeholderElement = createOptionElement(_placeholder, 0, true)
      selectElement.add(placeholderElement)
      let valueIndex = 1
      for (const key in _options) {
        const optionElement = createOptionElement(_options[key], valueIndex, false)
        selectElement.add(optionElement)
        valueIndex++
      }
    }
    _value = selectElement.options[selectElement.selectedIndex].text
  }

  const createOptionElement = function(text, value, isPlaceholder) {
    const optionElement = document.createElement('option')
    optionElement.text = text
    optionElement.value = value
    if (isPlaceholder) {
      optionElement.setAttribute('disabled', 'disabled')
      optionElement.setAttribute('selected', 'selected')
    }
    return optionElement
  }

  const isEmpty = function(obj) {
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) return false
    }
    return true
  }

  this.init = function() {
    cacheDom()
    bindEvents()
    render()
  }

  this.toggleOpen = function() {
    if (!isOpen) {
      isOpen = true
    } else {
      isOpen = false
    }
  }

  this.validateComponent = function() {
    if (_selectedOptionIndex != 0) {
      _valid = true
      displayValidationMsg = false
      render()
    } else {
      _valid = false
      displayValidationMsg = true
      render()
    }
  }
  this.isValid = function() {
    if (_valid) {
      displayValidationMsg = false
      render()
      return true
    }
    displayValidationMsg = true
    render()
    return false
  }

  this.getSelectedValue = function() {
    return _value
  }
}

const input = new SelectInput(
  'input-1',
  { dk: 'Denmark', en: 'England', po: 'Poland' },
  'validationMsg',
  'Select Country',
  true
)
input.init()

const inputSmall = new SelectInput(
  'input-2',
  { dk: 'Denmark', en: 'England', po: 'Poland' },
  'validationMsg',
  'Select Country',
  true
)
inputSmall.init()
