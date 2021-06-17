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
Milestone Systems web systems spacing are globally defined on bootstrap definitions as described in the global spacing definitions below. Concerning  global spacing definitions, you will need to install boostrap 4 or above.

Besides these global spacing definitions, there is also section spacing which is not based on bootstrap and has its own definitions.

## Global spacing definitions 

The global spacing definitions, which represents margin and padding, are based on bootstrap 4 margin and padding utilities classes definitions.

All definitions follow bootstrap breakpoints abbreviations except xs. The remaining breakpoints will include a breakpoint abbreviation and they are defined as follow:
</br></br>
<p>The CSS utilities classes are named using the following formats</p>
<ul>
  <li>For <strong class="msds-text-clear-blue">xs</strong>, it will defined as such <strong>{type}{orientations}-{size}</strong></li>
  <li>For the rest, <strong class="msds-text-clear-blue">sm, md, lg, and xl</strong>, it will defined as such  <strong>{type}{orientations}-{breakpoint}-{size}</strong></li>
</ul>
</br>
<p>The <strong><i>type</i></strong> is defined as follow:</p>
<ul>
  <li><strong class="msds-text-clear-blue">"m"</strong> for classes that set <strong>margin</strong></li>
  <li><strong class="msds-text-clear-blue">"p"</strong> for classes that set <strong>padding</strong></li>
</ul>
</br>
<p>The <strong><i>orientations</i></strong> are defined as follow:</p>
<ul>
  <li><strong class="msds-text-clear-blue">"t"</strong> will set <strong>margin-top or padding-top</strong></li>
  <li><strong class="msds-text-clear-blue">"b"</strong> will set <strong>margin-bottom or padding-bottom</strong></li>
  <li><strong class="msds-text-clear-blue">"l"</strong> will set <strong>margin-left or padding-left</strong></li>
  <li><strong class="msds-text-clear-blue">"r"</strong> will set <strong>margin-right or padding-right</strong></li>
  <li><strong class="msds-text-clear-blue">"x"</strong> will set <strong>both *-left and *-right</strong></li>
  <li><strong class="msds-text-clear-blue">"y"</strong> will set <strong>both *-top and *-bottom</strong></li>
  <li><strong class="msds-text-clear-blue">"blank"</strong> will set <strong>margin or padding on all 4 orientations</strong> of the specified element</li>  
</ul>
</br>
<p>The <strong><i>size</i></strong> is defined as follow:</p>
<ul>
  <li><strong class="msds-text-clear-blue">"auto"</strong> will set the margin to <strong>auto</strong></li>
  <li><strong class="msds-text-clear-blue">"0"</strong> will remove any margin or padding by setting it to <strong>0</strong></li>
  <li><strong class="msds-text-clear-blue">"1"</strong> will set margin or padding to <strong>4px</strong></li>
  <li><strong class="msds-text-clear-blue">"2"</strong> will set the margin or padding to <strong>8px</strong></li>
  <li><strong class="msds-text-clear-blue">"3"</strong> will set the margin or padding to <strong>12px</strong></li>
  <li><strong class="msds-text-clear-blue">"4"</strong> will set the margin or padding to <strong>16px</strong></li>
  <li><strong class="msds-text-clear-blue">"5"</strong> will set the margin or padding to <strong>20px</strong></li>
  <li><strong class="msds-text-clear-blue">"6"</strong> will set the margin or padding to <strong>24px</strong></li>
  <li><strong class="msds-text-clear-blue">"7"</strong> will set the margin or padding to <strong>32px</strong></li>
  <li><strong class="msds-text-clear-blue">"8"</strong> will set the margin or padding to <strong>40px</strong></li>
  <li><strong class="msds-text-clear-blue">"9"</strong> will set the margin or padding to <strong>48px</strong></li>
  <li><strong class="msds-text-clear-blue">"10"</strong> will set the margin or padding to <strong>64px</strong></li>
  <li><strong class="msds-text-clear-blue">"11"</strong> will set the margin or padding to <strong>80px</strong></li>
  <li><strong class="msds-text-clear-blue">"12"</strong> will set the margin or padding to <strong>96px</strong></li>
  <li><strong class="msds-text-clear-blue">"13"</strong> will set the margin or padding to <strong>112px</strong></li>
  <li><strong class="msds-text-clear-blue">"14"</strong> will set the margin or padding to <strong>128px</strong></li>
  <li><strong class="msds-text-clear-blue">"15"</strong> will set the margin or padding to <strong>160px</strong></li>  
</ul>
</br>
Note: For more information about bootstrap margin and padding definitions, please go to bootstrap spacing page <a href="https://getbootstrap.com/docs/4.0/utilities/spacing/" target="_blank">here</a>. 

## Section Spacing Definitions
The section spacing is not based on Bootstrap 4 spacing definitions. it has its own and is devided in 3, Large, Medium and Small definitions. For each of them, there will be a specific padding definition for desktop, tablet and mobile devices.

Basically, the section spacing consists of 3 distinct CSS classes definitions:
<ul>
  <li><strong class="msds-text-clear-blue">msds-block-padding-large</strong></li>
  <li><strong class="msds-text-clear-blue">msds-block-padding-medium</strong></li>
  <li><strong class="msds-text-clear-blue">msds-block-padding-small</strong></li>
</ul>
</br>
<p>For each of the following section, The blue areas represent the section spacing and based on the CSS class used will adapt to device automatically.</p>

Also, remember that 
<ul>
  <li><strong>Desktop</strong> represents screens superior or equivalent than 992px.</li>
  <li><strong>Tablets</strong> represents screens superior or equivalent than 769px and inferior than 992px.</li>
  <li><strong>Mobile</strong> represents screens inferior than 769px.</li>
</ul>
 

### Large Spacing Definitions
Below is the "Large" definitions for sections where the section is using the "msds-block-padding-large" CSS class. 

<div class="element-preview">
  <div class="element-preview__inner">{{render '@large-section-spacing-definitions'}}</div>
</div>

</br>
Try out the "Large" section spacing implementation by resizing the client window or any repsonsive/developer tools to select the different screen sizes.

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
Try out the "Medium" section spacing implementation by resizing the client window or any repsonsive/developer tools to select the different screen sizes.

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
Try out the "Small" section spacing implementation by resizing the client window or any repsonsive/developer tools to select the different screen sizes.

<div class="element-preview">
  <div class="element-preview__inner">{{render '@small-section-spacing'}}</div>
</div>

```html
{{render '@small-section-spacing'}}
```
