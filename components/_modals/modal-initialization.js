import { msdsModalComponent } from './modal.js'

window.addEventListener('load', function() {
  if (document.querySelector('#modalOnLoad')) {
    const modalOnLoad = new msdsModalComponent('modalOnLoad', {})
    modalOnLoad.showModal()
  }

  if (document.querySelector('#modalOnClick')) {
    const modalOnClick = new msdsModalComponent('modalOnClick', {
      linkElementClass: 'show-modal'
    })
    modalOnClick
  }
})
