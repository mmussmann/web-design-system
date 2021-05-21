export const msdsModalComponent = function(id, settings) {
  //Checks if the modal element exist. if not we don't continue the initialization
  const modalId = id

  const ModalElement = document.getElementById(id)

  if (typeof ModalElement === 'undefined' || ModalElement === null) {
    return
  }

  const linkElementClass = settings.linkElementClass,
    beforeOpening = settings.beforeOpening || function() {},
    beforeClosing = settings.beforeClosing || function() {}

  if (linkElementClass) {
    const linkElements = document.getElementsByClassName(linkElementClass)

    if (linkElements) {
      linkElements.forEach(function(linkElement) {
        linkElement.addEventListener('click', function() {
          showModal()
        })
      })
    }
  }

  //Add the close element on the close element of the specified modal popup.
  const closeLink = ModalElement.querySelector('.msds-modal__close')
  closeLink.addEventListener('click', function() {
    hideModal()
  })

  function showModal() {
    //disable the page scrolling
    disablePageScrolling(true)

    //Perform the beforeOpening event if any has been set.
    if (typeof beforeOpening === 'function') {
      beforeOpening()
    }

    //display the modal
    toggleModal()
  }

  function hideModal() {
    disablePageScrolling(false)
    toggleModal()

    if (typeof beforeClosing === 'function') beforeClosing()
  }

  function toggleModal() {
    ModalElement.classList.toggle('msds-modal--show')
  }

  function disablePageScrolling(disablePageScrolling) {
    disablePageScrolling ? document.body.classList.add('no-scroll') : document.body.classList.remove('no-scroll')
  }

  function getModalId() {
    return modalId
  }

  return {
    showModal: showModal,
    getModalId: getModalId
  }
}
