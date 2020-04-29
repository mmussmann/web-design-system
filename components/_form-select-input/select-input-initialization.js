import { SelectInput } from './select-input.js'

window.addEventListener('load', function() {
  const selectElement = document.querySelector('.msds-select-input')
  if (selectElement) {
    const input = new SelectInput(
      'input-1',
      { dk: 'Denmark', en: 'England', po: 'Poland' },
      'validationMsg',
      'Select Country',
      true
    )
    input.init()

    const inputRequired = new SelectInput(
      'input-required',
      { dk: 'Denmark', en: 'England', po: 'Poland' },
      'validationMsg',
      'Select Country',
      true
    )
    inputRequired.init()

    const inputNotRequired = new SelectInput(
      'input-not-required',
      { dk: 'Denmark', en: 'England', po: 'Poland' },
      'validationMsg',
      'Select Country',
      false
    )
    inputNotRequired.init()

    const inputSmall = new SelectInput(
      'input-small',
      { dk: 'Denmark', en: 'England', po: 'Poland' },
      'validationMsg',
      'Select Country',
      true
    )
    inputSmall.init()

    const inputDefault = new SelectInput(
      'input-default',
      { dk: 'Denmark', en: 'England', po: 'Poland' },
      'validationMsg',
      'Select Country',
      true
    )
    inputDefault.init()

    const errorinput = new SelectInput(
      'input-error',
      { dk: 'Denmark', en: 'England', po: 'Poland' },
      'Error message',
      'Select Country',
      true
    )
    errorinput.init()
    errorinput.isValid()
  }
})
