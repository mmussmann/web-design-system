const msdsProgressBar = {
  //Get the base number for the progress bar
  parentElement: '',
  baseNumber: 0,
  currentStep: 0,
  startFromOne: false,
  init: function(parentElementId, baseNumber, customProgressionStep) {
    this.parentElement = document.getElementById(parentElementId)

    if (customProgressionStep > 0) {
      this.currentStep = customProgressionStep
    } else if (this.startFromOne == true) {
      this.currentStep = 1
    } else {
      this.currentStep = 0
    }
    this.baseNumber = baseNumber
    this.updateProgressbarDisplay()
  },
  updateProgressbarDisplay: function() {
    //calculate the percentage width of the progress step and update the look and fill base on this
    const updatedWidth = (this.currentStep * 100) / this.baseNumber

    //update the progression bar
    const progressBarProgressionElement = this.parentElement.querySelectorAll('.msds-progress-bar__progression-bar')
    for (let i = 0; i < progressBarProgressionElement.length; i++) {
      //update the width of the progression bar
      const currentEl = progressBarProgressionElement[i]
      currentEl.style.width = updatedWidth + '%'

      //Add the completed class to round the corners of the progression bar.
      if (this.currentStep == this.baseNumber) {
        currentEl.classList.add('msds-progress-bar__progression-bar--completed')
      } else {
        if (currentEl.classList.contains('msds-progress-bar__progression-bar--completed')) {
          currentEl.classList.remove('msds-progress-bar__progression-bar--completed')
        }
      }
    }

    //update the progression counter
    const progressionCounterElement = this.parentElement.querySelectorAll('.msds-progress-bar__progression-counter')
    for (let i = 0; i < progressionCounterElement.length; i++) {
      //update the width of the progression bar
      const currentEl = progressionCounterElement[i]
      currentEl.innerHTML = this.currentStep + '/' + this.baseNumber
    }
  },
  next: function() {
    if (this.currentStep < this.baseNumber) {
      this.currentStep++
      this.updateProgressbarDisplay()
    }
  },
  prev: function() {
    if (this.startFromOne) {
      if (this.currentStep > 1) {
        this.currentStep--
        this.updateProgressbarDisplay()
      }
    } else {
      if (this.currentStep > 0) {
        this.currentStep--
        this.updateProgressbarDisplay()
      }
    }
  }
}

window.msdsProgressBar = msdsProgressBar
