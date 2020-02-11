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
  updateProgressbarDisplay: function() { //update the display of the prorgess bar (step and counter)
    
    const progressBarProgressionElement = this.parentElement.querySelector('.msds-progress-bar__progression-bar')
    if (progressBarProgressionElement) {
      //calculate the percentage width of the progress step and update the look and fill base on this
      const updatedWidth = (this.currentStep * 100) / this.baseNumber
      progressBarProgressionElement.style.width = updatedWidth + '%'
      
      //Add the completed class to round the corners of the progression bar.
      if (this.currentStep == this.baseNumber) {
        progressBarProgressionElement.classList.add('msds-progress-bar__progression-bar--completed')
      } else {
        if (progressBarProgressionElement.classList.contains('msds-progress-bar__progression-bar--completed')) {
          progressBarProgressionElement.classList.remove('msds-progress-bar__progression-bar--completed')
        }
      }

      //update the progression counter
      const progressionCounterElement = this.parentElement.querySelector('.msds-progress-bar__progression-counter')
      progressionCounterElement.innerHTML = this.currentStep + '/' + this.baseNumber
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
