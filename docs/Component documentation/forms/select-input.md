---
title: Select input 
---
## On this page we will go through our Select input component 

This component should be easy to integrate in our implementations. 

We have defined two different progress bars. One default which is the large version and one small. Both sizes have a light and dark version as well. Below you will find the way to integrate our prorgess bar component into your implementations.

### Table of contents
<div class="row">
    <div class="col-4">
        <!-- <dl>
            <dt>[Overview](#overview)</dt>
            <dd>[Global Definition](#global-definition)</dd>
            <dd>[Sizes](#sizes)</dd>
            <dd>[Features](#features)</dd>
            <dd>[Light version](#light-version)</dd>
            <dd>[Dark version](#dark-version)</dd>
        </dl>         -->
    </div>    
</div>

## Overview
### Global Definition
Each Progress Bar component is based on a global CSS class called "msds-progress-bar". It is important to include it first as it is the main CSS class. Without it, the UI of the component won't work. You can find mainly 2 types of progress bars, the default progress bar which is the large version and a smaller version.

In order the progress bar to work, you need to create a variable from the window.msds.progressBar object defined in our progress-bar.js then call the init function specifying the id of element it is linked to which represents the instance of the progress bar well. Then a base number which represents the maximum number of steps and finally a number specifying a specific step.

Also, note that the progress bar width is adaptive which means that it is based on the parent placeholder width.

<div class="element-preview">
  <div class="element-preview__inner">{{render '@select-input-global-definition'}}</div>
</div>

```html
{{render '@select-input-global-definition'}}
```