---
title: Spacing
---

## In this section, we are going to give you an overview of how Milestone Systems web application spacing are defined.

### Table of contents
<div class="row">    
    <div class="col-md-6">
      <ul class="document__unordered-list">
        <li class="document__unordered-list-item"><a class="msds-link" href="#overview">Overview</a></li>
        <li class="document__unordered-list-item">     
          <a class="msds-link" href="#global-spacing-definitions">Global Spacing Definitions</a>     
          <ul class="document__unordered-list">                   
            <li class="document__unordered-list-item">
              <a class="msds-link" href="#margin-definitions">Margin Definitions</a>
            </li>  
            <li class="document__unordered-list-item">
              <a class="msds-link" href="#padding-definitions">Padding Definitions</a>
            </li>         
          </ul> 
        </li>
        <li class="document__unordered-list-item">
          <a class="msds-link" href="#section-spacing-definitions">Section Spacing definitions</a>    
          <ul class="document__unordered-list">                   
            <li class="document__unordered-list-item">
              <a class="msds-link" href="#large-spacing-definitions">Large Spacing Definitions</a>
            </li>  
            <li class="document__unordered-list-item">
              <a class="msds-link" href="#medium-spacing-definitions">Medium Spacing Definitions</a>
            </li>
            <li class="document__unordered-list-item">
              <a class="msds-link" href="#small-spacing-definitions">Small Spacing Definitions</a>
            </li>
          </ul>     
        </li>               
      </ul>     
    </div>
</div>

## Overview 
Milestone Systems web systems spacing are globally defined on bootstrap definitions as described in the global spacing definition below. Concerning  global spacing definitions, you will to install boostrap 4 or above.

Besides th4ese spacing definitions, there is also section spacing which is not bsed on bootstrap and has its own definition.

## Global spacing definitions 

### Margin Definitions
Below is the global margin definitions based on bootstrap 4 margin definitions.

<div class="element-preview">
  <div class="element-preview__inner">{{render '@global-margins'}}</div>
</div>


### Padding Definitions
Below is the global padding definitions based on bootstrap 4 padding definitions.


<div class="element-preview">
  <div class="element-preview__inner">{{render '@global-paddings'}}</div>
</div>


## Section Spacing Definitions
The section spacing is not based on Bootstrap 4 spacing definitions. it has its own and is devided in 3, Large, Medium and Small definitions. For each of them, there will be a specific padding definition for desktop, tablet and mobile devices.

Basically, the section spacing consists of 3 distinct CSS classes definitions:
<ul>
  <li>msds-block-padding-large</li>
  <li>msds-block-padding-medium</li>
  <li>msds-block-padding-small</li>
</ul>

For each of the following section, The blue areas represent the section spacing and based on the CSS class used will adapt to device automatically.

Also, remember that 
<ul>
<li><strong>Desktop</strong> represents screens superior or equivalent than 992px.</li>
<li><strong>Tablets</strong> represents screens superior or equivalent than 769px and inferior than 992px.</li>
<li><strong>Mobile</strong> represents screens inferior than 769px.</li>
</ul>

 They are defined as follow:


### Large Spacing Definitions
Below is the "Large" definitions for sections where the section is using the "msds-block-padding-large" CSS class. 

<div class="element-preview">
  <div class="element-preview__inner">{{render '@large-section-spacing-definitions'}}</div>
</div>

</br>
Try out the "Large" section implementation by resizing the client window or any repsonsive/developer tools to select the different screen sizes.

<div class="element-preview">
  <div class="element-preview__inner">{{render '@large-section-spacing'}}</div>
</div>

```html
{{render '@large-section-spacing'}}
```

### Medium Spacing Definitions
Below is the "Medium" definitions for sections where the section is using the "msds-block-padding-medium" CSS class.

<div class="element-preview">
  <div class="element-preview__inner">{{render '@medium-section-spacing-definitions'}}</div>
</div>

</br>
Try out the "Medium" section implementation by resizing the client window or any repsonsive/developer tools to select the different screen sizes.

<div class="element-preview">
  <div class="element-preview__inner">{{render '@medium-section-spacing'}}</div>
</div>

```html
{{render '@medium-section-spacing'}}
```

### Small Spacing Definitions
Below is the "Small" definitions for sections where the section is using the "msds-block-padding-small" CSS class.

<div class="element-preview">
  <div class="element-preview__inner">{{render '@small-section-spacing-definitions'}}</div>
</div>

</br>
Try out the "Small" section implementation by resizing the client window or any repsonsive/developer tools to select the different screen sizes.

<div class="element-preview">
  <div class="element-preview__inner">{{render '@small-section-spacing'}}</div>
</div>

```html
{{render '@small-section-spacing'}}
```
