---
title: Progress Bar
---

<script async src="/main.js" charset="utf-8"></script>
<script async src="/src/js/progress-bar-initialization.js" charset="utf-8"></script>

## On this page we will go through our Progress bar component 

This component should be easily to integrate in our implementations. 

We have defined two different progress bars. One default which is the large version and one small. Both sizes have a light and dark version as well. Below you will find the way to integrate our prorgess bar component into your implementations.

Important notes: 
1- UseInsert the scripts inside 
Don't use any of the style definition in each of the sections. It is to set the width of the progess for demo purposes. This will be done automatically when settings the steps using the progress bar javascripts.

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
Each Progress Bar component is based on a global CSS class called "msds-progress-bar". It is important to include it first as it is the main CSS class. Without it, the UI of the component won't work. You can find mainly 2 types of progress bar, the default progress bar which is the large version and a small version.

In order the progress bar to work, you need to create a variable from the window.msds.progressBar object defined in our progress-bar.js then call the init function specifying the base number. The Base number is the number of steps you would like the progress bar to be based on.  

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

### Sizes
Our Progress Bar can be rendered in 2 different sizes, large (default) and small.

<div class="element-preview">
  <div class="element-preview__inner">{{render '@progress-bar-sizes'}}</div>
</div>

```html
{{render '@progress-bar-sizes'}}
```

### Light version
As mentioned ealier there are 2 themes you can choose for our progress bar component: a light and dark theme. Below is you have a exemple of the Light theme version and it is rendered by default. No need to add extra CSS classes.

<div class="element-preview">
  <div class="element-preview__inner">{{render '@progress-bar-light-theme'}}</div>
</div>

```html
{{render '@progress-bar-light-theme'}}
```

### Dark version
Concerning the Dark theme version, you will need to add the follow class on the Progress Bar parent element as followed

<div class="element-preview dark-theme">
  <div class="element-preview__inner">{{render '@progress-bar-dark-theme'}}</div>
</div>

```html
{{render '@progress-bar-dark-theme'}}
```