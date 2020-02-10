---
title: Progress Bar
---

## On this page we will go through our Progress bar component 

This component should be easy to integrate in our implementations. 

We have defined two different progress bars. One default which is the large version and one small. Both sizes have a light and dark version as well. Below you will find the way to integrate our prorgess bar component into your implementations.

### Table of contents
<div class="row">
    <div class="col-4">
        <dl>
            <dt>[Overview](#overview)</dt>
            <dd>[Global Definition](#global-definition)</dd>
            <dd>[Sizes](#sizes)</dd>
            <dd>[Features](#features)</dd>
            <dd>[Light version](#light-version)</dd>
            <dd>[Dark version](#dark-version)</dd>
        </dl>        
    </div>    
</div>

## Overview
### Global Definition
Each Progress Bar component is based on a global CSS class called "msds-progress-bar". It is important to include it first as it is the main CSS class. Without it, the UI of the component won't work. You can find mainly 2 types of progress bars, the default progress bar which is the large version and a smaller version.

In order the progress bar to work, you need to create a variable from the window.msds.progressBar object defined in our progress-bar.js then call the init function specifying the id of element it is linked to which represents the instance of the progress bar well. Then a base number which represents the maximum number of steps and finally a number specifying a specific step.

Also, note that the progress bar width is adaptive which means that it is based on the parent placeholder width.

<div class="element-preview">
  <div class="element-preview__inner">{{render '@progress-bar-global-definition'}}</div>
</div>

```html
{{render '@progress-bar-global-definition'}}
```

```javascript
//Initialize the progress bar with the element id, a progression of 5 steps and set a specific progression step by default      
const progressBar = Object.create(window.msdsProgressBar);      
const ProgressBarDefinition = document.getElementById("ProgressBarDefinition");
if(ProgressBarDefinition) {
    progressBar.init("ProgressBarDefinition", 5, 4); 
}
```

### Features
By default our progress bar starts from 0. However, depending on the context, we have an option to start the progress bar from 1 by setting the "StartFromOne" variable to true. There is also a way to set a progression to a specific step by setting the currentStep to the value you need.


<div class="element-preview">
  <div class="element-preview__inner">{{render '@progress-bar-features'}}</div>
</div>

```html
{{render '@progress-bar-features'}}
```

```javascript
//Progress Bar Features scripts------------------    
const progressBarFeatures1El = document.getElementById("ProgressBarFeatures1");
if(progressBarFeatures1El) {
    //Initialize the progress bar with 5 steps starting form the default value 0.
    const progressBarFeatures1 = Object.create(window.msdsProgressBar);
    progressBarFeatures1.init("ProgressBarFeatures1", 5, 0);
}
    
const progressBarFeatures2El = document.getElementById("ProgressBarFeatures2");
    if(progressBarFeatures2El) {
    //Initialize the progress bar with 5 steps starting form the 1.
    const progressBarFeatures2 = Object.create(window.msdsProgressBar);
    progressBarFeatures2.startFromOne = true; //Set "StartFromOne" variable to true.
    progressBarFeatures2.init("ProgressBarFeatures2", 5, 0); //Initialize the progress bar with 5 steps starting from step 1 as the startFromOne is set to true
}

const progressBarFeatures3El = document.getElementById("ProgressBarFeatures3");
if(progressBarFeatures3El) {
    //Set the progress bar to a specific step.
    const progressBarFeatures3 = Object.create(window.msdsProgressBar);
    progressBarFeatures3.init("ProgressBarFeatures3", 5, 3); //Initialize the progress bar with 5 steps starting from step 3
}
```

### Sizes
Our Progress Bar can be rendered in 2 different sizes, large (default) and small.

<div class="element-preview">
  <div class="element-preview__inner">{{render '@progress-bar-sizes'}}</div>
</div>

```html
{{render '@progress-bar-sizes'}}
```

```javascript
//Progress bar Size scripts------------------
const progressBarSize1El = document.getElementById('ProgressBarSize1');
if(progressBarSize1El) {
  const progressBarSize1 = Object.create(window.msdsProgressBar);
  progressBarSize1.init('ProgressBarSize1', 5, 2); //Initialize the progress bar with 5 steps starting from step 2
}    
        
const progressBarSize2El = document.getElementById('ProgressBarSize2');
if(progressBarSize2El) {
  //Set the progress bar to a specific step by default.
  const progressBarSize2 = Object.create(window.msdsProgressBar);      
  progressBarSize2.init('ProgressBarSize2', 5, 3); //Initialize the progress bar with 5 steps starting from step 3
}
```

### Light version
As mentioned ealier there are 2 themes you can choose for our progress bar component: a light and dark theme. Below you have a exemple of the Light theme version and it is rendered by default. No need to add extra CSS classes. 

you can also see that you can attached different events such as prev() and next() which would make it easier when having the progress bar in a wizard.

<div class="element-preview">
  <div class="element-preview__inner">{{render '@progress-bar-light-theme'}}</div>
</div>

```html
{{render '@progress-bar-light-theme'}}
```

```javascript
//Light Theme scripts------------------              
const lightThemeProgressBarEl = document.getElementById("LightThemeProgressBar");
if(lightThemeProgressBarEl) {    
  //Initialize the progress bar with 12 steps.
  const lightThemeProgressBar = Object.create(window.msdsProgressBar);
  lightThemeProgressBar.init("LightThemeProgressBar", 12, 0);             
}

//Initialize the progress bar with 12 steps.     
const lightThemeProgressBarEl = document.getElementById("LightThemeProgressBar");
if(lightThemeProgressBarEl) {
  const lightThemeProgressBar = Object.create(window.msdsProgressBar);

  let lightThemeBaseNumberElement = document.querySelectorAll('#LightThemeBaseNumber')[0]    
  lightThemeBaseNumberElement.value = 12;

  lightThemeProgressBar.init("LightThemeProgressBar", lightThemeBaseNumberElement.value, 0);  
  
  document.querySelector('#LightThemePrevStep').addEventListener('click', event => {            
      lightThemeProgressBar.prev();
  })

  document.querySelector('#LightThemeNextStep').addEventListener('click', event => {
      lightThemeProgressBar.next();
  })

  document.querySelector('#LightThemeBaseNumber').addEventListener('change', event => {
      lightThemeProgressBar.init("LightThemeProgressBar", event.target.value, 0);        
  })    

  const lightThemeStartFromOneElement = document.querySelector('#LightThemeStartFromOne');
  lightThemeStartFromOneElement.addEventListener('change', event => {        
      lightThemeProgressBar.startFromOne = lightThemeStartFromOneElement.checked;
      const baseNumber = document.querySelectorAll('#LightThemeBaseNumber')[0].value;
      lightThemeProgressBar.init("LightThemeProgressBar", baseNumber, 0);
  })
}  
```

### Dark version
Concerning the Dark theme version, you will need to add the following CSS class on the Progress Bar parent element as followed

<div class="element-preview-dark">
  <div class="element-preview__inner">{{render '@progress-bar-dark-theme'}}</div>
</div>

```html
{{render '@progress-bar-dark-theme'}}
```

```javascript
//Dark Theme scripts------------------        
//Initialize the progress bar with 12 steps.
const darkThemeProgressBarEl = document.getElementById("DarkThemeProgressBar");
if(darkThemeProgressBarEl) {
    const darkThemeProgressBar = Object.create(window.msdsProgressBar);

    let darkThemeBaseNumberElement = document.querySelectorAll('#DarkThemeBaseNumber')[0]    
    darkThemeBaseNumberElement.value = 12;
    
    darkThemeProgressBar.init("DarkThemeProgressBar", darkThemeBaseNumberElement.value, 0); 

    document.querySelector('#DarkThemePrevStep').addEventListener('click', event => {
        darkThemeProgressBar.prev();
    })

    document.querySelector('#DarkThemeNextStep').addEventListener('click', event => {
        darkThemeProgressBar.next();
    })

    document.querySelector('#DarkThemeBaseNumber').addEventListener('change', event => {
        darkThemeProgressBar.init("DarkThemeProgressBar", event.target.value, 0);        
    })    

    const darkThemeStartFromOneElement = document.querySelector('#DarkThemeStartFromOne');
    darkThemeStartFromOneElement.addEventListener('change', event => {        
        darkThemeProgressBar.startFromOne = darkThemeStartFromOneElement.checked;
        const baseNumber = document.querySelectorAll('#DarkThemeBaseNumber')[0].value;
        darkThemeProgressBar.init("DarkThemeProgressBar", baseNumber, 0);
    })
}
```
