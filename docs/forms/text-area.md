---
title: Text-Area 
---
## On this page we will go through our Radio Button component 

The text-area allows the user to enter a piece of text. A counter, placed at the bottom of the text area, will show the maximum number of characters that the user can enter. 

### Table of contents
<div class="row">
    <div class="col-4">
        <ul class="document__unordered-list">             
             <li class="document__unordered-list-item">
                 <a class="msds-link" href="#overview">Overview</a>
             </li>
             <li class="document__unordered-list-item">
                 <a class="msds-link" href="#sizes">Sizes</a>
             </li>
             <li class="document__unordered-list-item">
                <a class="msds-link" href="#states">States</a>
                <ul class="document__unordered-list">
                  <li class="document__unordered-list-item">
                      <a class="msds-link" href="#hover-state">Hover state</a>
                  </li>  
                  <li class="document__unordered-list-item">
                      <a class="msds-link" href="#focus-state">Focus state</a>
                  </li>  
                  <li class="document__unordered-list-item">
                    <a class="msds-link" href="#readonly-state">Readonly state</a>
                  </li>  
                  <li class="document__unordered-list-item">
                      <a class="msds-link" href="#disabled-state">Disabled state</a>
                  </li>  
                </ul>  
             </li>                      
             <li class="document__unordered-list-item">
                <a class="msds-link" href="#validations">Validations</a>
                <ul class="document__unordered-list">
                  <li class="document__unordered-list-item">
                      <a class="msds-link" href="#validation-success">Success</a>
                  </li>  
                  <li class="document__unordered-list-item">
                    <a class="msds-link" href="#validation-error">Error</a>
                  </li>            
              </ul>  
             </li>                                        
         </ul>    
    </div>    
</div>

## Overview
Each text-area component is based on a global CSS class called "msds-text-area". It is important to include them first as it is the main CSS class but. Without it, the UI of the component won't work.

The text-area is linked to a label element and should be placed right below it like the way it is shown below. 

As other form fields, the text-area layout contains an error message which is placed below the text-area label. 

<div class="element-preview">
  <div class="element-preview__inner">{{render '@text-area-field'}}</div>
</div>

```html
{{render '@text-area-field'}}
```

## Sizes
The text-area field comes like most of our forms components in 2 sizes, large whichi is our default size and small used in specific cases.

<div class="element-preview">
  <div class="element-preview__inner">{{render '@text-area-sizes'}}</div>
</div>

```html
{{render '@text-area-sizes'}}
```

## States
The styling of states are defined in the CSS file. Some of the states can be triggered programmatically by setting the relative property to the text-area element. 

### Hover State

State of the hover input field
<div class="element-preview">
  <div class="element-preview__inner">{{render '@text-area-hover'}}</div>
</div>

```html
{{render '@text-area-hover'}}
```

### Focus State

State of the focused text-area field
<div class="element-preview">
  <div class="element-preview__inner">{{render '@text-area-focus'}}</div>
</div>

```html
{{render '@text-area-focus'}}
```

### Disabled State

It can be disabled programmatically by setting the "disabled" attribute to the text-area field element.

<div class="element-preview">
  <div class="element-preview__inner">{{render '@text-area-disabled'}}</div>
</div>

```html
{{render '@text-area-disabled'}}
```

### Readonly State

In order to use the read-only text-area fields, you need to add the "readonly" attribute to the text-area field element.

<div class="element-preview">
  <div class="element-preview__inner">{{render '@text-area-readonly'}}</div>
</div>

```html
{{render '@text-area-readonly'}}
```

## Validations
The text-area field has 2 distincts validation styling. After entering some content, we will get either a success or error look and feel when the content is required or only an error if the content does not match the definition of a non required text-area. 

### Validation Success
The validation success look and feel of the text-area.

<div class="element-preview">
  <div class="element-preview__inner">{{render '@text-area-success'}}</div>
</div>

```html
{{render '@text-area-success'}}
```


### Validation Error
The validation error look and feel of the text-area.

<div class="element-preview">
  <div class="element-preview__inner">{{render '@text-area-error'}}</div>
</div>

```html
{{render '@text-area-error'}}
```
