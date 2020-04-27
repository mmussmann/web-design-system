import { SelectInput } from './select-input.js'

window.addEventListener('load', function() {
  const selectElement = document.querySelector('.msds-select-input')
  if (selectElement) {
    const selectInputConfiguration = {
      input: new SelectInput(
        'input-1',
        { dk: 'Denmark', en: 'England', po: 'Poland' },
        'validationMsg',
        'Select Country',
        true
      ),
      smallinput: new SelectInput(
        'input-2',
        { dk: 'Denmark', en: 'England', po: 'Poland' },
        'validationMsg',
        'Select Country',
        true
      ),
      cacheDom: function() {
        this.selectElements = document.querySelectorAll('.msds-select-input')
      },
      bindEvents: function() {
        for (let i = 0; i < this.selectElements.length; i++) {
          const element = this.selectElements[i]
          element.addEventListener('click', () => this.clickSelect(element))
        }
      },
      init: function() {
        this.cacheDom()
        this.bindEvents()
        this.render()
      },
      render: function() {
        this.input.init()
        this.smallinput.init()
      },
      clickSelect: function(selectInputElement) {
        console.log(selectInputElement)
        if (selectInputElement) selectInputElement.toggleOpen()
      }
    }

    selectInputConfiguration.init()
  }
})
