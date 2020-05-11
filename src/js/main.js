import '../scss/main.scss'
import 'components/tab-tile/tab-tile.js'
import 'components/forms/text-areas/text-area.js'
import { SelectInput } from 'components/_form-select-input/select-input.js'
import 'components/alert/alert.js'
import 'components/button-cards/card.js'
import 'components/button-cards/generic-card/generic-card.js'
import 'components/button-cards/_contact-card/contact-card.js'
import 'components/button-cards/solution-card/solution-card.js'
import 'components/button-cards/_category-card/category-card.js'
import 'components/colors/background-colors.js'
import 'components/colors/text-colors.js'
import 'components/icons/icons.js'
import 'components/_Progress-Bar/progress-bar.js'
import 'components/icons/button-icons.js'
import 'components/icons/rich-icons.js'

export const SelectInputComponent = SelectInput

// export const SelectInput = function(id, options, validationMsg, placeholder, isRequired) {
//   let selectInput
//   let selectElement
//   let validationMsgElement
//   let isOpen = false
//   let displayValidationMsg = false
//   let _valid = isRequired ? false : true
//   let _value = 'not set'
//   let _selectedOptionIndex = 0
//   let shouldPopulateList = true
//   const _options = options
//   const _validationMsg = validationMsg
//   const _placeholder = isRequired ? placeholder + '*' : placeholder

//   const cacheDom = function() {
//     selectInput = document.getElementById(id)
//     selectElement = selectInput.querySelector('.msds-select-input__select')
//     validationMsgElement = selectInput.querySelector('.msds-select-input__validation-msg')
//   }

//   const bindEvents = function() {
//     selectElement.addEventListener('change', () => render())
//   }

//   const render = function() {
//     _selectedOptionIndex = selectElement.value
//     validationMsgElement.innerHTML = _validationMsg
//     if (isOpen) {
//       selectInput.classList.toggle('msds-select-input--open')
//     }
//     if (_selectedOptionIndex == 0) {
//       selectElement.classList.add('msds-select-input__select--no-selection')
//     } else {
//       selectElement.classList.remove('msds-select-input__select--no-selection')
//       cleanValidationState()
//     }
//     if (_validationMsg != '' && displayValidationMsg) {
//       validationMsgElement.classList.add('msds-select-input__validation-msg--display')
//       displayValidationMessage()
//     } else {
//       validationMsgElement.classList.remove('msds-select-input__validation-msg--display')
//       hideValidationMessage()
//     }
//     if (isEmpty(_options)) {
//       _selectedOptionIndex = 0
//       return
//     } else if (shouldPopulateList) {
//       shouldPopulateList = false
//       const placeholderElement = createOptionElement(_placeholder, 0, true)
//       selectElement.add(placeholderElement)
//       let valueIndex = 1
//       for (const key in _options) {
//         const optionElement = createOptionElement(_options[key], valueIndex, false)
//         selectElement.add(optionElement)
//         valueIndex++
//       }
//     }
//     _value = selectElement.options[selectElement.selectedIndex].text
//   }

//   const createOptionElement = function(text, value, isPlaceholder) {
//     const optionElement = document.createElement('option')
//     optionElement.text = text
//     optionElement.value = value
//     if (isPlaceholder) {
//       optionElement.setAttribute('disabled', 'disabled')
//       optionElement.setAttribute('selected', 'selected')
//     }
//     return optionElement
//   }

//   const isEmpty = function(obj) {
//     for (const key in obj) {
//       if (obj.hasOwnProperty(key)) return false
//     }
//     return true
//   }

//   const hideValidationMessage = function() {
//     displayValidationMsg = false
//   }
//   const displayValidationMessage = function() {
//     displayValidationMsg = true
//   }

//   const cleanValidationState = function() {
//     _valid = true
//   }

//   const setValidationState = function() {
//     _valid = false
//   }

//   this.init = function() {
//     cacheDom()
//     bindEvents()
//     render()
//   }

//   this.toggleOpen = function() {
//     if (!isOpen) {
//       isOpen = true
//     } else {
//       isOpen = false
//     }
//   }

//   this.isValid = function() {
//     if (_valid) {
//       cleanValidationState()
//       hideValidationMessage()
//       render()
//       return true
//     }
//     setValidationState()
//     displayValidationMessage()
//     render()
//     return false
//   }

//   this.getSelectedValue = function() {
//     return _value
//   }
// }
