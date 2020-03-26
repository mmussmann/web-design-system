function SelectInput(id, options, validationMsg, placeholder, isRequired) {
  const _options = options
  const _validationMsg = validationMsg
  const _placeholder = isRequired ? placeholder + '*' : placeholder
  let _valid = false
  let _value = 'not set'
  let _index = 0
  let shouldPopulateList = true

  const cacheDom = function() {
    this.selectInput = document.getElementById(id)
    console.log('cache dom', this.selectInput)
  }

  const bindEvents = function() {
    this.selectInput.addEventListener('change', () => render())
  }

  const render = function() {
    if (isEmpty(_options)) {
      _index = 0
      return
    } else if (shouldPopulateList) {
      shouldPopulateList = false
      const placeholderElement = createOptionElement(_placeholder, 0, true)
      this.selectInput.add(placeholderElement)
      let valueIndex = 1
      for (const key in _options) {
        const optionElement = createOptionElement(_options[key], valueIndex, false)
        this.selectInput.add(optionElement)
        valueIndex++
      }

      //console.log('_value', this.selectInput.value)
    }
    _index = this.selectInput.value
    _value = this.selectInput.options[this.selectInput.selectedIndex].text
    validateComponent()
  }
  const validateComponent = function() {
    if (_index != 0) {
      _valid = true
    } else {
      _valid = false
    }
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

  this.isValid = function() {
    if (_valid) {
      return true
    }
    return false
  }

  this.getSelectedValue = function() {
    return _value
  }
}

const input = new SelectInput(
  1,
  { dk: 'Denmark', en: 'England', po: 'Poland' },
  'validationMsg',
  'Select Country',
  true
)
input.init()

const inputSmall = new SelectInput(
  2,
  { dk: 'Denmark', en: 'England', po: 'Poland' },
  'validationMsg',
  'Select Country',
  true
)
inputSmall.init()
// console.log('getSelectedValue()', input.getSelectedValue())
