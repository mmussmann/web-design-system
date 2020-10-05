---
title: Progress Bar
---

## On this page we will go through our Progress bar component 

This component should be easy to integrate in our implementations. 

We have defined two different progress bars. One default which is the large version and one small. Both sizes have a light and dark version as well. Below you will find the way to integrate our prorgess bar component into your implementations.

### Table of contents
<div class="row">
    <div class="col-4">
      <ul class="document__unordered-list">
            <li class="document__unordered-list-item"> 
                 <a class="msds-link" href="#overview">Overview</a>
                <ul class="document__unordered-list">
                      <li class="document__unordered-list-item">
                        <a class="msds-link" href="#global-definition">Global Definition</a>
                      </li>
                      <li class="document__unordered-list-item">
                        <a class="msds-link" href="#sizes">Sizes</a>
                      </li>
                </ul>
            </li>
            <li class="document__unordered-list-item">
                 <a class="msds-link" href="#features">Features</a>
            </li>
            <li class="document__unordered-list-item">
                  <a class="msds-link" href="#dark-version">Light version</a>
            </li>
        </ul>      
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
//Progress bar Global Definition------------------
//Initialize the progress bar with the element id, a maximum of 5 steps and starting from 0 (minimum step). 
const progressBar = new msdsProgressBar('ProgressBarDefinition', 5, false)
//Set the progression to step 4 - For demo purposes.
progressBar.goToStep(4)
```

### Features
By default our progress bar starts from 0. However, depending on the context, we have an option to start the progress bar from 1 by setting the "StartFromOne" variable to true. There is also a way to set a progression to a specific step by setting the currentStep to the value you need. To do so, you will need to use the goToStep function and pass as parameter the required step number.


<div class="element-preview">
  <div class="element-preview__inner">{{render '@progress-bar-features'}}</div>
</div>

```html
{{render '@progress-bar-features'}}
```

```javascript
//Progress Bar Features scripts------------------
//Initialize the progress bar with 5 steps starting form step 0.
const progressBarFeatures1 = new msdsProgressBar('ProgressBarFeatures1', 5, false)
//Initialize the progress bar with 5 steps starting form step 1.
const progressBarFeatures2 = new msdsProgressBar('ProgressBarFeatures2', 5, true)
//Set the progress bar with 5 steps starting from 0.
const progressBarFeatures3 = new msdsProgressBar('ProgressBarFeatures3', 5, false)
//Set the progression to step 3 to show how the goToStep function works
progressBarFeatures3.goToStep(3)
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
//Initialize the progress bar with 5 steps starting from 0.
const progressBarSize1 = new msdsProgressBar('ProgressBarSize1', 5, false)
//Set the progression to step 2 - For demo purposes.
progressBarSize1.goToStep(2)
//Initialize the progress bar with 5 steps starting from 0.
const progressBarSize2 = new msdsProgressBar('ProgressBarSize2', 5, false)
//Set the progression to step 3 - For demo purposes.
progressBarSize2.goToStep(3)
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
//Initialize the progress bar with 20 steps starting from 0.
const lightThemeProgressBar = new msdsProgressBar('LightThemeProgressBar', 20, false)
lightThemeProgressBar.setPaginationElements('LightThemePrevStep', 'LightThemeNextStep', 'LightThemeBaseNumber', 'LightThemeCurrentStep')
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
//Initialize the progress bar with 20 steps starting from 1.
const darkThemeProgressBar = new msdsProgressBar('DarkThemeProgressBar', 20, true)
darkThemeProgressBar.setPaginationElements('DarkThemePrevStep', 'DarkThemeNextStep', 'DarkThemeBaseNumber', 'DarkThemeCurrentStep')
```
