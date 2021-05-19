import { msdsModal } from './modal.js'

window.addEventListener('load', function() {
  if (document.querySelector('#modalOnLoad')) {
    const modalOnLoad = new msdsModal('modalOnLoad', {})
    modalOnLoad.showModal()
  }

  if (document.querySelector('#modalOnClick')) {
    const modalOnClick = new msdsModal('modalOnClick', {
      linkElementClass: 'show-modal'
    })
    modalOnClick
  }
})
