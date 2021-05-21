export const msdsModalManagerComponent = function() {
  //Checks if the modal element exist. if not we don't continue the initialization
  const modals = []

  function addModal(newModal) {
    if (newModal) {
      const newModalId = newModal.getModalId()
      for (let i = 0; i < modals.length; i++) {
        const modal = modals[i]
        const existingModalId = modal.getModalId()
        if (existingModalId == newModalId) {
          return
        }
      }

      modals.push(newModal)
    }
  }

  function showModal(currentModalId) {
    for (let i = 0; i < modals.length; i++) {
      const modal = modals[i]
      const existingModalId = modal.getModalId()
      if (existingModalId == currentModalId) {
        modal.showModal()
        return
      }
    }
  }

  return {
    addModal: addModal,
    showModal: showModal
  }
}
