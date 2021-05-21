import { msdsProgressBarComponent } from './progress-bar.js'

window.addEventListener('load', function() {
  const progressbarElement = document.querySelector('.msds-progress-bar')
  if (progressbarElement) {
    //Progress bar Global Definition------------------
    //Initialize the progress bar with the element id, a maximum of 5 steps and starting from 0 (minimum step).
    const progressBar = new msdsProgressBarComponent('ProgressBarDefinition', 5, false)
    //Set the progression to step 4 - For demo purposes.
    progressBar.goToStep(4)

    //Progress Bar Features scripts------------------
    //Progress Bar Features scripts------------------
    //Initialize the progress bar with 5 steps starting form step 0.
    new msdsProgressBarComponent('ProgressBarFeatures1', 5, false)

    //Initialize the progress bar with 5 steps starting form step 1.
    new msdsProgressBarComponent('ProgressBarFeatures2', 5, true)

    //Set the progress bar with 5 steps starting from 0.
    const progressBarFeatures3 = new msdsProgressBarComponent('ProgressBarFeatures3', 5, false)
    //Set the progression to step 3 to show how the goToStep function works
    progressBarFeatures3.goToStep(3)

    //Progress bar Size scripts------------------
    //Initialize the progress bar with 5 steps starting from 0.
    const progressBarSize1 = new msdsProgressBarComponent('ProgressBarSize1', 5, false)
    //Set the progression to step 2 - For demo purposes.
    progressBarSize1.goToStep(2)

    //Initialize the progress bar with 5 steps starting from 0.
    const progressBarSize2 = new msdsProgressBarComponent('ProgressBarSize2', 5, false)
    //Set the progression to step 3 - For demo purposes.
    progressBarSize2.goToStep(3)

    //Light Theme scripts------------------
    //Initialize the progress bar with 20 steps starting from 0.
    const lightThemeProgressBar = new msdsProgressBarComponent('LightThemeProgressBar', 20, false)
    lightThemeProgressBar.setPaginationElements(
      'LightThemePrevStep',
      'LightThemeNextStep',
      'LightThemeBaseNumber',
      'LightThemeCurrentStep'
    )

    //Dark Theme scripts------------------
    //Initialize the progress bar with 20 steps starting from 1.
    const darkThemeProgressBar = new msdsProgressBarComponent('DarkThemeProgressBar', 20, true)
    darkThemeProgressBar.setPaginationElements(
      'DarkThemePrevStep',
      'DarkThemeNextStep',
      'DarkThemeBaseNumber',
      'DarkThemeCurrentStep'
    )
  }
})
