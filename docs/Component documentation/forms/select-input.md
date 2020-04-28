---
title: Select input 
---
## On this page we will go through our Select input component 

We have defined two different select inputs. One default which is the large version and one small. Below you will find the way to integrate our select element component into your implementations.

## Overview
### Global Definition
Each select input component is based on a global CSS class called "msds-select-input". It is important to include it first as it is the main CSS class. Without it, the UI of the component won't work. You can find mainly 2 types of select inputs, the default select inputs which is the large version and a smaller version.

In order the select inputs to work, you need to create a variable from the window.msds.select-input object defined in our select-input.js then call the init function specifying the id of element it is linked to which represents the instance of the select input well. The options represents the different values availble in the select dropdown, validationMsg is a string that should be shown if the component is not validated. placeholder represents the placeholder in the initial load of the component and finally the isRequired is a boolean that determins whether or not the component is required to be filled out.

Also, note that the select inputs width is adaptive which means that it is based on the parent placeholder width.


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

<div class="element-preview">
  <div class="element-preview__inner">{{render '@select-input-global-definition'}}</div>
</div>

```html
{{render '@select-input-global-definition'}}
```