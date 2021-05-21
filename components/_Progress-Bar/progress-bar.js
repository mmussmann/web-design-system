export const msdsProgressBarComponent = function(parentElementId, maxStepNumber, startFromOne) {
  //Get the base number for the progress bar
  const cssClassCompleted = 'msds-progress-bar__progression-bar--completed'

  const parentElement = document.getElementById(parentElementId),
    progressBarProgressionElement = parentElement.querySelector('.msds-progress-bar__progression-bar'),
    progressionCounterElement = parentElement.querySelector('.msds-progress-bar__progression-counter'),
    minStep = startFromOne ? 1 : 0,
    maxStep = maxStepNumber

  let currentStep = startFromOne ? 1 : 0,
    prevElement,
    nextElement,
    currentStepElement,
    baseNumberElement

  updateProgressbarDisplay()

  function setPaginationElements(prevElementId, nextElementId, baseNumberElementId, currentStepElementId) {
    //Prev element
    prevElement = parentElement.querySelector('#' + prevElementId)
    if (prevElement) {
      prevElement.addEventListener('click', () => {
        decrementStep(1)
      })
    }

    //Next element
    nextElement = parentElement.querySelector('#' + nextElementId)
    if (nextElement) {
      nextElement.addEventListener('click', () => {
        incrementStep(1)
      })
    }

    //Current step element
    currentStepElement = parentElement.querySelector('#' + currentStepElementId)
    if (currentStepElement) {
      currentStepElement.min = minStep
      currentStepElement.max = maxStep
      currentStepElement.value = currentStep
      currentStepElement.addEventListener('change', event => {
        goToStep(event.target.value)
      })
    }

    baseNumberElement = parentElement.querySelector('#' + baseNumberElementId)
    baseNumberElement.innerHTML = maxStep
  }

  //update the display of the prorgess bar (step and counter)
  function updateProgressbarDisplay() {
    if (progressBarProgressionElement) {
      updateStep(progressBarProgressionElement)
      updateCounter()
    }
  }

  function updateStep(progressBarProgressionElement) {
    //calculate the percentage width of the progress step and update the look and fill base on this
    const progressInPercentage = (currentStep * 100) / maxStep
    progressBarProgressionElement.style.width = `${progressInPercentage}%`

    //Add the completed class to round the corners of the progression bar.
    if (currentStep == maxStep) {
      progressBarProgressionElement.classList.add(cssClassCompleted)
    } else {
      if (progressBarProgressionElement.classList.contains(cssClassCompleted)) {
        progressBarProgressionElement.classList.remove(cssClassCompleted)
      }
    }
  }

  function updateCounter() {
    //update the progression counter
    progressionCounterElement.innerHTML = currentStep + '/' + maxStep

    //Update the pagination currentStepElement if defined
    if (currentStepElement) {
      currentStepElement.value = currentStep
    }
  }

  function decrementStep(decrementNumber) {
    if (currentStep > minStep) {
      currentStep -= decrementNumber
      updateProgressbarDisplay()
    }
  }

  function incrementStep(incrementNumber) {
    if (currentStep < maxStep) {
      currentStep += incrementNumber
      updateProgressbarDisplay()
    }
  }

  function goToStep(stepNumber) {
    if (stepNumber < currentStep && stepNumber >= minStep) {
      decrementStep(currentStep - stepNumber)
    } else if (currentStep < stepNumber && stepNumber <= maxStep) {
      incrementStep(stepNumber - currentStep)
    } else {
      return
    }
  }

  return {
    setPaginationElements: setPaginationElements,
    goToStep: goToStep
  }
}
