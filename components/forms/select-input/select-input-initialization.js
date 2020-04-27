import { SelectInput } from './select-input.js'

window.addEventListener('load', function() {
  const selectElement = document.querySelector('.msds-select-input')
  if (selectElement) {
    console.log('input initialize')
    const input = new SelectInput(
      'input-1',
      { dk: 'Denmark', en: 'England', po: 'Poland' },
      'validationMsg',
      'Select Country',
      true
    )
    input.init()
  }
})
