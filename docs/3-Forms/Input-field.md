---
title: Input field 
---
## On this page we will go through our Radio Button component 

The input field allows the user to enter a piece of text. If the text is long it will stay on the same line.
They can be used in forms, filters, lists etc. in many different ways like for passwords.

### Table of contents
<div class="row">
    <div class="col-4">
        <ul class="document__unordered-list">             
             <li class="document__unordered-list-item">
                 <a class="msds-link" href="#overview">Overview</a>
             </li>
             <li class="document__unordered-list-item">
                 <a class="msds-link" href="#Sizes">Sizes</a>
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
Each input field component is based on a global CSS class called "msds-input" and has to be inside a warpper using the "msds-input__icon-wrapper". It is important to include them first as it is the main CSS class but. Without it, the UI of the component won't work.

The input field is linked to a label element and should be placed right below it like the way it is shown below. 

As other form fields, the input field layout contains a error message which is placed below the input field wrapper. 

<div class="element-preview">
  <div class="element-preview__inner">{{render '@input'}}</div>
</div>

```html
{{render '@input'}}
```

## Sizes
The input field comes like most of our forms components in 2 sizes, large whichi is our default size and small used in specific cases.

<div class="element-preview">
  <div class="element-preview__inner">{{render '@input-sizes'}}</div>
</div>

```html
{{render '@input-sizes'}}
```

## States
The styling of states are defined in the CSS file. Some of the states can be triggered programmatically by setting the relative property to the input element. 

### Hover State

State of the hover input field
<div class="element-preview">
  <div class="element-preview__inner">{{render '@input-hover'}}</div>
</div>

```html
{{render '@input-hover'}}
```

### Focus State

State of the focused input field
<div class="element-preview">
  <div class="element-preview__inner">{{render '@input-focus'}}</div>
</div>

```html
{{render '@input-focus'}}
```

### Disabled State

It can be disabled programmatically by setting the "disabled" attribute to the input field element.

<div class="element-preview">
  <div class="element-preview__inner">{{render '@input-disabled'}}</div>
</div>

```html
{{render '@input-disabled'}}
```

### Readonly State

In order to use the read-only input fields, you need to add the "readonly" attribute to the input field element.

<div class="element-preview">
  <div class="element-preview__inner">{{render '@input-readonly'}}</div>
</div>

```html
{{render '@input-readonly'}}
```

## Validations
The input field has 2 distincts validation styling. After entering a string, we will get either a success or error look and feel when the content is required or only an error if the content does not match the definition of a non required input field. 

### Validation Success
The validation success look and feel of the input field.

<div class="element-preview">
  <div class="element-preview__inner">{{render '@input-state-success'}}</div>
</div>

```html
{{render '@input-state-success'}}
```


### Validation Error
The validation error look and feel of the input field.

<div class="element-preview">
  <div class="element-preview__inner">{{render '@input-state-error'}}</div>
</div>

```html
{{render '@input-state-error'}}
```