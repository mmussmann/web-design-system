import { SelectInput } from './select-input.js'

window.addEventListener('load', function() {
  console.log('input initialize')
  const input = new SelectInput(
    'input-1',
    { dk: 'Denmark', en: 'England', po: 'Poland' },
    'validationMsg',
    'Select Country',
    true
  )
  input.init()
})
